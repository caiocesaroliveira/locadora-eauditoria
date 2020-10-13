import React, { useContext } from 'react'
import { MovieContext } from '../../contexts/Movie/MovieContext'
import { MovieContextType } from '../../contexts/Movie/MovieContextType'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

interface AddMovieForm {
  id: number
  titulo: string
  classificacaoIndicativa: number
  lancamento: number
}

export const AddMovie: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<AddMovieForm>()
  const { addMovie } = useContext<MovieContextType>(MovieContext)
  let history = useHistory()

  const onSubmit = (newMovieForm: AddMovieForm, e: any) => {
    const newMovie = {
      id: 0,
      titulo: newMovieForm.titulo,
      classificacaoIndicativa: newMovieForm.classificacaoIndicativa,
      lancamento: newMovieForm.lancamento ? 1 : 0,
    }
    e.preventDefault()

    addMovie(newMovie)
    history.push('/movies')
  }

  return (
    <form onSubmit={handleSubmit<AddMovieForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Filme</legend>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="titulo"
            placeholder="Informe o titulo"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.titulo && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="number"
            name="classificacaoIndicativa"
            placeholder="Informe a classificação"
            ref={register}
          />
          {errors.classificacaoIndicativa && <span>Campo obrigatório</span>}
        </div>
        <div className="uk-margin">
          <label>
            <input
              className="uk-checkbox"
              type="checkbox"
              name="lancamento"
              ref={register}
            />{' '}
            Lançamento
          </label>
          {errors.lancamento && <span>Campo obrigatório</span>}
        </div>
        <button className="uk-button uk-button-primary uk-margin-small-right">
          Salvar
        </button>
        <Link to="/movies">
          <button type="button" className="uk-button uk-button-default">
            Cancelar
          </button>
        </Link>{' '}
      </fieldset>
    </form>
  )
}
