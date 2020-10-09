import Cliente from '../models/Cliente'
import http from './api'

const getAll = () => {
  return http.get(`/clientes`)
}

// const details = (id) => {
//   return http.get(`/transaction/${id}`)
// }

const create = (data: Cliente) => {
  return http.post('/clientes', data)
}

// const update = (id, data) => {
//   return http.put(`/transaction/${id}`, data)
// }

const remove = (data: Cliente) => {
  return http.get(`/clientes`)
}

export default {
  getAll,
  create,
  remove,
}
