import { Movie } from '../../models/Movie'

export interface MovieContextType {
  movies: Movie[]
  addMovie(movie: Movie): void
  editMovie(id: number, movie: Movie): void
  removeMovie(movie: Movie): void
}
