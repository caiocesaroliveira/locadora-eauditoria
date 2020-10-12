import Cliente from '../models/Cliente'

import api from './api'

export const getAll = async () => {
  const response = await api.get('/clientes')
  const json = (await response.data) as Cliente[]

  return json
}

export const create = async (data: Cliente) => {
  const response = await api.post('/clientes', data)
  const json: Cliente = await response.data

  return json
}
export const update = async (id: number, data: Cliente) => {
  const response = await api.put(`/clientes/${id}`, data)
  const json: Cliente = await response.data

  return json
}

export const remove = async (data: Cliente) => {
  const response = await api.delete(`/clientes/${data.id}`)
  const json: Cliente = await response.data

  return json
}
