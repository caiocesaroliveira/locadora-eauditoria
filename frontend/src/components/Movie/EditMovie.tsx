import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../contexts/Movie/MovieContext'
import { MovieContextType } from '../../contexts/Movie/MovieContextType'
import { useForm } from 'react-hook-form'
import { useParams, useHistory, Link } from 'react-router-dom'

interface EditMovieForm {
  id: number
  titulo: string
  classificacaoIndicativa: number
  lancamento: number
}

interface EditMovieParams {
  id: string
}
export const EditMovie: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<EditMovieForm>({
    id: 0,
    titulo: '',
    classificacaoIndicativa: 0,
    lancamento: 0,
  })

  const { editMovie, movies } = useContext<MovieContextType>(MovieContext)

  const { register, handleSubmit, errors } = useForm<EditMovieForm>()

  const { id } = useParams<EditMovieParams>()
  let history = useHistory()

  useEffect(() => {
    const movie = movies.find(c => c.id === parseInt(id)) as EditMovieForm
    setSelectedMovie(movie)
  }, [])

  const onSubmit = (editMovieForm: EditMovieForm, e: any) => {
    const newMovie = {
      id: editMovieForm.id,
      titulo: editMovieForm.titulo,
      classificacaoIndicativa: editMovieForm.classificacaoIndicativa,
      lancamento: editMovieForm.lancamento ? 1 : 0,
    }
    e.preventDefault()
    editMovie(parseInt(id), newMovie)
    history.push('/movies')
  }
  const handleOnChange = (userKey: string, value: string) => {
    setSelectedMovie({ ...selectedMovie, [userKey]: value })
  }
  const handleOnCheck = (userKey: string, value: boolean) => {
    console.log(value)
    setSelectedMovie({ ...selectedMovie, [userKey]: value ? 1 : 0 })
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit<EditMovieForm>(onSubmit)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Novo Cliente</legend>

        <div className="uk-margin">
          <input
            className="uk-input"
            type="number"
            name="id"
            // disabled
            value={selectedMovie.id}
            onChange={e => handleOnChange('id', e.target.value)}
            ref={register}
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input"
            type="text"
            name="titulo"
            placeholder="Informe o titulo"
            value={selectedMovie.titulo}
            onChange={e => handleOnChange('titulo', e.target.value)}
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
            value={selectedMovie.classificacaoIndicativa}
            onChange={e =>
              handleOnChange('classificacaoIndicativa', e.target.value)
            }
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
              checked={selectedMovie.lancamento === 1 && true}
              // value={selectedMovie.lancamento}
              onChange={e => handleOnCheck('lancamento', e.target.checked)}
              ref={register}
            />{' '}
            Lançamento
          </label>
          {errors.lancamento && <span>Campo obrigatório</span>}
        </div>

        <div className="uk-margin">
          <button className="uk-button uk-button-primary uk-margin-small-right">
            Salvar
          </button>
          <Link to="/movies">
            <button type="button" className="uk-button uk-button-default">
              Cancelar
            </button>
          </Link>{' '}
        </div>
      </fieldset>
    </form>
  )
}
