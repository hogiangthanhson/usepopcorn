import { IMovie } from "types";

interface NumResultsProp {
  movies: IMovie[];
}
export default function NumResults({ movies }: NumResultsProp) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
