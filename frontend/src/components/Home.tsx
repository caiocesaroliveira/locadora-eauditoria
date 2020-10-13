import React from 'react'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <>
      <header>
        <h1 className="uk-heading-small uk-text-center">Locadora Virtual</h1>
      </header>
      <div
        className="uk-child-width-expand@s uk-grid-small uk-grid-match"
        uk-grid="true"
      >
        <Link to="/customers" style={{ textDecoration: 'none' }}>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="uk-card-title">
                <span className="uk-margin-small-right" uk-icon="users"></span>{' '}
                Clientes
              </h3>
              <p>
                Aqui você poderá listar, cadastrar, alterar e excluir clientes
              </p>
            </div>
          </div>
        </Link>

        <Link to="/movies" style={{ textDecoration: 'none' }}>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-card-hover">
              <h3 className="uk-card-title">
                <span className="uk-margin-small-right" uk-icon="tv"></span>{' '}
                Filmes
              </h3>
              <p>
                Aqui você poderá listar, cadastrar, alterar e excluir filmes
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
