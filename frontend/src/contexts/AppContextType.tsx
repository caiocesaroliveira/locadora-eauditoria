import Cliente from '../models/Cliente'

export default interface AppContextType {
  clientes: Cliente[]
  addCliente(cliente: Cliente): void
  editCliente(id: number, cliente: Cliente): void
  removeCliente(cliente: Cliente): void
}
