import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContext'
import AppContextType from '../../contexts/AppContextType'
import Cliente from '../../models/Cliente'

interface ClienteListItemProps {
  cliente: Cliente
}

const ClienteListItem: React.FC<ClienteListItemProps> = ({ cliente }) => {
  const { removeCliente } = useContext<AppContextType>(AppContext)

  const onRemove = (cliente: Cliente) => {
    removeCliente(cliente)
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">{cliente.id}</td>
      <td className="uk-width-auto">{cliente.nome}</td>
      <td className="uk-width-auto">{cliente.cpf}</td>
      <td className="uk-width-auto">{cliente.dataNascimento}</td>
      <td className="uk-width-auto">
        <Link to={`/edit/${cliente.id}`}>
          <button
            className="uk-icon-button uk-button-primary uk-margin-small-right"
            uk-icon="file-edit"
          ></button>
        </Link>
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(cliente)}
        ></button>
      </td>
    </tr>
  )
}

export default ClienteListItem
