import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../contexts/Movie/MovieContext'
import { MovieContextType } from '../../contexts/Movie/MovieContextType'
import { MovieListItem } from './MovieListItem'

export const MovieList: React.FC = () => {
  const { movies } = useContext<MovieContextType>(MovieContext)

  return (
    <>
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/movies/add" style={{ textDecoration: 'none' }}>
            <button
              className="uk-icon-button uk-button-primary uk-margin-small-right"
              uk-icon="plus"
              onClick={() => {}}
            ></button>
            <span>Novo Filme</span>
          </Link>
        </div>
      </nav>
      <table className="uk-table">
        <caption>
          <strong>Lista de Filmes</strong>{' '}
          <span className="uk-badge">{movies?.length}</span>
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Classificação</th>
            <th>Lançamento</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {movies?.map(movie => (
            <MovieListItem key={movie.id} movie={movie}></MovieListItem>
          ))}
        </tbody>
      </table>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="uk-margin-small-right" uk-icon="arrow-left"></span>{' '}
        Voltar
      </Link>
    </>
  )
}
