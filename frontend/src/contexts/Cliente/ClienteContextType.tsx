import Cliente from '../../models/Cliente'

export interface ClienteContextType {
  clientes: Cliente[]
  addCliente(cliente: Cliente): void
  editCliente(id: number, cliente: Cliente): void
  removeCliente(cliente: Cliente): void
  // addCliente(cliente: Cliente): Promise<void>
  // editCliente(id: number, cliente: Cliente): Promise<void>
  // removeCliente(cliente: Cliente): Promise<void>
}
