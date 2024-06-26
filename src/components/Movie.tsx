import { IMovie } from "types";

interface MovieProp {
  movie: IMovie;
  onSelectMovie: (id: string) => void;
}
export default function Movie({ movie, onSelectMovie }: MovieProp) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
