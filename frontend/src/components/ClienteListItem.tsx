import React, { useContext } from 'react'
import Cliente from '../models/Cliente'

interface ClienteListItemProps {
  cliente: Cliente
}

const ClienteListItem: React.FC<ClienteListItemProps> = ({ cliente }) => {
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">{cliente.id}</td>
      <td className="uk-width-auto">{cliente.nome}</td>
      <td className="uk-width-auto">{cliente.cpf}</td>
      <td className="uk-width-auto">
        {Intl.DateTimeFormat('pt-BR').format(cliente.dataNascimento)}
      </td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-primary"
          uk-icon="edit"
          onClick={() => {}}
        ></button>
      </td>
    </tr>
  )
}

export default ClienteListItem
