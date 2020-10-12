import Consumer from '../models/Consumer'

import api from './api'

export const getAll = async () => {
  const response = await api.get('/clientes')
  const json = (await response.data) as Consumer[]

  return json
}

export const create = async (data: Consumer) => {
  const response = await api.post('/clientes', data)
  const json: Consumer = await response.data

  return json
}
export const update = async (id: number, data: Consumer) => {
  const response = await api.put(`/clientes/${id}`, data)
  const json: Consumer = await response.data

  return json
}

export const remove = async (data: Consumer) => {
  const response = await api.delete(`/clientes/${data.id}`)
  const json: Consumer = await response.data

  return json
}
