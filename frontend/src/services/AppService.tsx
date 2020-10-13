import { Customer } from '../models/Customer'
import { Movie } from '../models/Movie'

import api from './api'

export const getAllCustomer = async () => {
  const response = await api.get('/clientes')
  const json = (await response.data) as Customer[]

  return json
}

export const createCustomer = async (data: Customer) => {
  const response = await api.post('/clientes', data)
  const json: Customer = await response.data

  return json
}
export const updateCustomer = async (id: number, data: Customer) => {
  const response = await api.put(`/clientes/${id}`, data)
  const json: Customer = await response.data

  return json
}

export const deleteCustomer = async (data: Customer) => {
  const response = await api.delete(`/clientes/${data.id}`)
  const json: Customer = await response.data

  return json
}

export const getAllMovie = async () => {
  const response = await api.get('/filmes')
  const json = (await response.data) as Movie[]

  return json
}

export const createMovie = async (data: Movie) => {
  const response = await api.post('/filmes', data)
  const json: Movie = await response.data

  return json
}

export const updateMovie = async (id: number, data: Movie) => {
  const response = await api.put(`/filmes/${id}`, data)
  const json: Movie = await response.data

  return json
}

export const deleteMovie = async (data: Movie) => {
  const response = await api.delete(`/filmes/${data.id}`)
  const json: Movie = await response.data

  return json
}
