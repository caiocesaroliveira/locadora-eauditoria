import { Customer } from '../../models/Customer'

export interface CustomerContextType {
  customers: Customer[]
  addCustomer(customer: Customer): void
  editCustomer(id: number, customer: Customer): void
  removeCustomer(customer: Customer): void
}
