import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../contexts/Movie/MovieContext'
import { MovieContextType } from '../../contexts/Movie/MovieContextType'
import { Movie } from '../../models/Movie'

interface MovieListItemProps {
  movie: Movie
}

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { removeMovie } = useContext<MovieContextType>(MovieContext)

  const onRemove = (movie: Movie) => {
    removeMovie(movie)
  }

  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">{movie.id}</td>
      <td className="uk-width-auto">{movie.titulo}</td>
      <td className="uk-width-auto">{movie.classificacaoIndicativa}</td>
      <td className="uk-width-auto">
        {movie.lancamento === 1 ? 'Sim' : 'Não'}
      </td>
      <td className="uk-width-auto">
        <Link to={`/movies/edit/${movie.id}`}>
          <button
            className="uk-icon-button uk-button-primary uk-margin-small-right"
            uk-icon="file-edit"
          ></button>
        </Link>
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(movie)}
        ></button>
      </td>
    </tr>
  )
}
