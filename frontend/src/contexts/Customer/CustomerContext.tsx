import React, { createContext, useEffect, useState } from 'react'

import { Customer } from '../../models/Customer'
import { CustomerContextType } from './CustomerContextType'

import { create, getAll, remove, update } from '../../services/AppService'

export const CustomerContext = createContext<CustomerContextType>(
  {} as CustomerContextType
)

export const CustomerProvider: React.FC = ({ children }) => {
  const [customer, setCustomer] = useState<Customer>()
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await getAll()
      setCustomers(response)
    }

    getData()
  }, [customer])

  const addCustomer = async (customer: Customer) => {
    const response = await create(customer)
    setCustomer(response)
  }
  const editCustomer = async (id: number, customer: Customer) => {
    const response = await update(id, customer)
    setCustomer(response)
  }
  const removeCustomer = async (customer: Customer) => {
    await remove(customer)
    setCustomer(customer)
  }

  return (
    <CustomerContext.Provider
      value={{ customers, addCustomer, removeCustomer, editCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  )
}
