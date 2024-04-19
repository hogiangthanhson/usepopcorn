import Movie from "components/Movie";
import { IMovie } from "types";

interface IMovieList {
  movies: IMovie[];
  onSelectMovie: (id: string) => void;
}
export default function MovieList({ movies, onSelectMovie }: IMovieList) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
