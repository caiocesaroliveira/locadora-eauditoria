import React, { createContext, useEffect, useState } from 'react'
import AppContextType from './AppContextType'
import Cliente from '../models/Cliente'
// import { getAll, create, remove } from '../services/AppService'
import api from '../services/TransactionAPI'

export const AppContext = createContext<AppContextType>({
  clientes: [],
  addCliente: () => {},
  editCliente: () => {},
  removeCliente: () => {},
})

const AppProvider = (props: any) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await api.getAll()
      const json = (await response.data) as Cliente[]

      setClientes(json)
    }

    getData()
  }, [edit])

  const addCliente = (cliente: Cliente) => {
    api.create(cliente)
  }

  const removeCliente = (cliente: Cliente) => {
    api.remove(cliente)
  }

  const editCliente = (id: number, cliente: Cliente) => {
    api.update(id, cliente)
    setEdit(true)
  }

  return (
    <AppContext.Provider
      value={{ clientes, addCliente, removeCliente, editCliente }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
export default AppProvider
