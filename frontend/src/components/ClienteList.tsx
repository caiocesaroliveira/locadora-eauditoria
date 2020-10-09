import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import AppContextType from '../contexts/AppContextType'
import ClienteListItem from './ClienteListItem'

const ClienteList: React.FC = () => {
  const { clientes } = useContext<AppContextType>(AppContext)
  return (
    <table className="uk-table">
      <caption>Lista de Clientes</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Data de Nascimento</th>
        </tr>
      </thead>

      <tbody>
        {clientes?.map(cliente => (
          <ClienteListItem key={cliente.id} cliente={cliente}></ClienteListItem>
        ))}
      </tbody>
    </table>
  )
}

export default ClienteList
