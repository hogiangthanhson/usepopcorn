import { IWatched } from "types";
import WatchedMovie from "./WatchedMovie";

interface IWatchedMoviesList {
  watched: IWatched[];
  onDeleteWatched: (id: string) => void;
}
export default function WatchedMoviesList({ watched, onDeleteWatched }: IWatchedMoviesList) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}
