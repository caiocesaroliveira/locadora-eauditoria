import Cliente from '../models/Cliente'

import api from './api'

const BOOK_STORE = 'books'

//buscar da api

export const getAll = async (): Promise<Cliente[]> => {
  const response = await api.get('/clientes')
  const json = (await response.data) as Cliente[]

  return json
}

export const create = async (data: Cliente) => {
  const response = await api.get('/clientes')
  const json: Cliente[] = await response.data

  return json
}

export const remove = async (data: Cliente) => {
  const response = await api.get('/clientes')
  const json: Cliente[] = await response.data

  return json
}
