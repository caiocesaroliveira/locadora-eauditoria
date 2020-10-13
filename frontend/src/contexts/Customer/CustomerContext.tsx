import React, { createContext, useEffect, useReducer } from 'react'
import { Customer } from '../../models/Customer'
import {
  createCustomer,
  getAllCustomer,
  deleteCustomer,
  updateCustomer,
} from '../../services/AppService'

import { CustomerContextType } from './CustomerContextType'

export const CustomerContext = createContext<CustomerContextType>(
  {} as CustomerContextType
)

const initialState = {
  customers: [],
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get':
      return { customers: action.payload }
    case 'add':
      return { customers: [...state.customers, action.payload] }
    case 'edit':
      const updatedCustomer = action.payload

      const updatedCustomers = state.customers.map((customer: Customer) => {
        if (customer.id === updatedCustomer.id) {
          return updatedCustomer
        }
        return customer
      })

      return {
        ...state,
        customers: updatedCustomers,
      }
    case 'remove':
      return {
        ...state,
        customers: state.customers.filter(
          (customer: Customer) => customer.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}

export const CustomerProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getData = async () => {
      const response = await getAllCustomer()
      dispatch({ type: 'get', payload: response })
    }

    getData()
  }, [])

  const addCustomer = async (customer: Customer) => {
    const response = await createCustomer(customer)
    dispatch({ type: 'add', payload: response })
  }
  const editCustomer = async (id: number, customer: Customer) => {
    const response = await updateCustomer(id, customer)
    dispatch({ type: 'edit', payload: response })
  }

  const removeCustomer = async (customer: Customer) => {
    await deleteCustomer(customer)
    dispatch({ type: 'remove', payload: customer })
  }

  return (
    <CustomerContext.Provider
      value={{
        customers: state.customers,
        addCustomer,
        editCustomer,
        removeCustomer,
      }}
    >
      {children}
    </CustomerContext.Provider>
  )
}
