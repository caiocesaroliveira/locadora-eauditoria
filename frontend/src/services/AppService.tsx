import { Customer } from '../models/Customer'

import api from './api'

export const getAll = async () => {
  const response = await api.get('/clientes')
  const json = (await response.data) as Customer[]

  return json
}

export const create = async (data: Customer) => {
  const response = await api.post('/clientes', data)
  const json: Customer = await response.data

  return json
}
export const update = async (id: number, data: Customer) => {
  const response = await api.put(`/clientes/${id}`, data)
  const json: Customer = await response.data

  return json
}

export const remove = async (data: Customer) => {
  const response = await api.delete(`/clientes/${data.id}`)
  const json: Customer = await response.data

  return json
}
