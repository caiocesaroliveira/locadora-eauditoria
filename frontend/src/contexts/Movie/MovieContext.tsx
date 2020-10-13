import React, { createContext, useEffect, useReducer } from 'react'
import { Movie } from '../../models/Movie'
import {
  createMovie,
  getAllMovie,
  deleteMovie,
  updateMovie,
} from '../../services/AppService'

import { MovieContextType } from './MovieContextType'

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
)

const initialState = {
  movies: [],
}
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get':
      return { movies: action.payload }
    case 'add':
      return { movies: [...state.movies, action.payload] }
    case 'edit':
      const updatedMovie = action.payload

      const updatedMovies = state.movies.map((movie: Movie) => {
        if (movie.id === updatedMovie.id) {
          return updatedMovie
        }
        return movie
      })

      return {
        ...state,
        movies: updatedMovies,
      }
    case 'remove':
      return {
        ...state,
        movies: state.movies.filter(
          (movie: Movie) => movie.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}

export const MovieProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getData = async () => {
      const response = await getAllMovie()
      dispatch({ type: 'get', payload: response })
    }

    getData()
  }, [])

  const addMovie = async (movie: Movie) => {
    const response = await createMovie(movie)
    dispatch({ type: 'add', payload: response })
  }
  const editMovie = async (id: number, movie: Movie) => {
    const response = await updateMovie(id, movie)
    dispatch({ type: 'edit', payload: response })
  }

  const removeMovie = async (movie: Movie) => {
    await deleteMovie(movie)
    dispatch({ type: 'remove', payload: movie })
  }

  return (
    <MovieContext.Provider
      value={{ movies: state.movies, addMovie, editMovie, removeMovie }}
    >
      {children}
    </MovieContext.Provider>
  )
}
