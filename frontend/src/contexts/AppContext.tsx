import React, { createContext, useEffect, useState } from 'react'
import AppContextType from './AppContextType'
import Cliente from '../models/Cliente'
// import { getAll, create, remove } from '../services/AppService'
import api from '../services/TransactionAPI'

export const AppContext = createContext<AppContextType>({
  clientes: [],
  addCliente: () => {},
  removeCliente: () => {},
})

const AppProvider = (props: any) => {
  const [refresh, setRefresh] = useState<boolean>(true)
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await api.getAll()
      const json = (await response.data) as Cliente[]

      console.log(json)
      setClientes(json)
    }

    getData()
  }, [])

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await api.getAll()
  //     const json = (await response.data) as Cliente[]

  //     setClientes(json)
  //   }

  //   getData()
  // }, [refresh])

  const addCliente = (cliente: Cliente) => {
    api.create(cliente)
    setRefresh(true)
  }
  const removeCliente = (cliente: Cliente) => {
    api.remove(cliente)
    setRefresh(true)
  }

  return (
    <AppContext.Provider value={{ clientes, addCliente, removeCliente }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppProvider
