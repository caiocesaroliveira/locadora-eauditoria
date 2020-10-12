import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ConsumerContext } from '../../contexts/Consumer/ConsumerContext'
import { ConsumerContextType } from '../../contexts/Consumer/ConsumerContextType'
import { ConsumerListItem } from './ConsumerListItem'

export const ConsumerList: React.FC = () => {
  const { consumers } = useContext<ConsumerContextType>(ConsumerContext)

  return (
    <>
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/clientes/add">
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
          <span className="uk-badge">{consumers?.length}</span>
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
          {consumers?.map(consumer => (
            <ConsumerListItem
              key={consumer.id}
              consumer={consumer}
            ></ConsumerListItem>
          ))}
        </tbody>
      </table>
    </>
  )
}
