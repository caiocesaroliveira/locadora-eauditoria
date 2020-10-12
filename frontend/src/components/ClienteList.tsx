import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import AppContextType from '../contexts/AppContextType'
import ClienteListItem from './ClienteListItem'

const ClienteList: React.FC = () => {
  const { clientes } = useContext<AppContextType>(AppContext)

  return (
    <>
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/add">
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
          <span className="uk-badge">{clientes?.length}</span>
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
          {clientes?.map(cliente => (
            <ClienteListItem
              key={cliente.id}
              cliente={cliente}
            ></ClienteListItem>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ClienteList
