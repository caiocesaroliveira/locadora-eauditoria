import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../../contexts/Customer/CustomerContext'
import { CustomerContextType } from '../../contexts/Customer/CustomerContextType'
import { CustomerListItem } from './CustomerListItem'

export const CustomerList: React.FC = () => {
  const { customers } = useContext<CustomerContextType>(CustomerContext)

  return (
    <>
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/customers/add">
            <button
              className="uk-icon-button uk-button-primary uk-margin-small-right"
              uk-icon="plus"
              onClick={() => {}}
            ></button>
            <span>Novo Cliente</span>
          </Link>
        </div>
      </nav>
      <table className="uk-table">
        <caption>
          <strong>Lista de Clientes</strong>{' '}
          <span className="uk-badge">{customers?.length}</span>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {customers?.map(customer => (
            <CustomerListItem
              key={customer.id}
              customer={customer}
            ></CustomerListItem>
          ))}
        </tbody>
      </table>
    </>
  )
}
