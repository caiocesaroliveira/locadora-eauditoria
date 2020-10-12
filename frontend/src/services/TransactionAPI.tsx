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

const update = async (id: number, data: Cliente) => {
  console.log(data, '', id)
  return await http.put(`/clientes/${id}`, data)
}

const remove = async (data: Cliente) => {
  return await http.delete(`/clientes/${data.id}`)
}

export default {
  getAll,
  create,
  update,
  remove,
}
