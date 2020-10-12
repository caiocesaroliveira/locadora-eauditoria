import React, { createContext, useEffect, useState } from 'react'
import Cliente from '../../models/Cliente'
import { create, getAll, remove, update } from '../../services/AppService'
import { ClienteContextType } from './ClienteContextType'

export const ClienteContext = createContext<ClienteContextType>(
  {} as ClienteContextType
)

export const ClienteProvider: React.FC = ({ children }) => {
  const [cliente, setCliente] = useState<Cliente>()
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await getAll()
      setClientes(response)
    }

    getData()
  }, [cliente])

  const addCliente = async (cliente: Cliente) => {
    const response = await create(cliente)
    setCliente(response)
  }

  const editCliente = async (id: number, cliente: Cliente) => {
    const response = await update(id, cliente)
    setCliente(response)
  }
  const removeCliente = async (cliente: Cliente) => {
    await remove(cliente)
    setCliente(cliente)
  }

  return (
    <ClienteContext.Provider
      value={{ clientes, addCliente, removeCliente, editCliente }}
    >
      {children}
    </ClienteContext.Provider>
  )
}
