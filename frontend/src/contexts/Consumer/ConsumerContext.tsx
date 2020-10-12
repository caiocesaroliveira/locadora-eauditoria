import React, { createContext, useEffect, useState } from 'react'
import Consumer from '../../models/Consumer'
import { create, getAll, remove, update } from '../../services/AppService'
import { ConsumerContextType } from './ConsumerContextType'

export const ConsumerContext = createContext<ConsumerContextType>(
  {} as ConsumerContextType
)

export const ConsumerProvider: React.FC = ({ children }) => {
  const [consumer, setConsumer] = useState<Consumer>()
  const [consumers, setConsumers] = useState<Consumer[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await getAll()
      setConsumers(response)
    }

    getData()
  }, [consumer])

  const addConsumer = async (consumer: Consumer) => {
    const response = await create(consumer)
    setConsumer(response)
  }

  const editConsumer = async (id: number, consumer: Consumer) => {
    const response = await update(id, consumer)
    setConsumer(response)
  }
  const removeConsumer = async (consumer: Consumer) => {
    await remove(consumer)
    setConsumer(consumer)
  }

  return (
    <ConsumerContext.Provider
      value={{ consumers, addConsumer, removeConsumer, editConsumer }}
    >
      {children}
    </ConsumerContext.Provider>
  )
}
