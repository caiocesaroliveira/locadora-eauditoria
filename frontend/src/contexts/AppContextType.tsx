import Cliente from '../models/Cliente'

export default interface AppContextType {
  clientes: Cliente[]
  addCliente(book: Cliente): void
  removeCliente(book: Cliente): void
}
