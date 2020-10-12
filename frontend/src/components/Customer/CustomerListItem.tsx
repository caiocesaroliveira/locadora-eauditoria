import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CustomerContext } from '../../contexts/Customer/CustomerContext'
import { CustomerContextType } from '../../contexts/Customer/CustomerContextType'
import { Customer } from '../../models/Customer'

interface CustomerListItemProps {
  customer: Customer
}

export const CustomerListItem: React.FC<CustomerListItemProps> = ({
  customer,
}) => {
  const { removeCustomer } = useContext<CustomerContextType>(CustomerContext)

  const onRemove = (customer: Customer) => {
    removeCustomer(customer)
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">{customer.id}</td>
      <td className="uk-width-auto">{customer.nome}</td>
      <td className="uk-width-auto">{customer.cpf}</td>
      <td className="uk-width-auto">{customer.dataNascimento}</td>
      <td className="uk-width-auto">
        <Link to={`/customers/edit/${customer.id}`}>
          <button
            className="uk-icon-button uk-button-primary uk-margin-small-right"
            uk-icon="file-edit"
          ></button>
        </Link>
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(customer)}
        ></button>
      </td>
    </tr>
  )
}
