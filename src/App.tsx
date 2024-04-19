import Box from "components/Box";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import Main from "components/Main";
import MovieDetails from "components/MovieDetails";
import MovieList from "components/MovieList";
import NumResults from "components/NavBar/components/NumResults";
import NavBar from "components/NavBar/NavBar";
import Search from "components/Search";
import WatchedMoviesList from "components/WatchedBox/WatchedMoviesList";
import WatchedSummary from "components/WatchedBox/WatchedSummary";
import { useLocalStorageState } from "hooks/useLocalStorageState";
import { useMovies } from "hooks/useMovies";
import { useState } from "react";
import { IMovie, IWatched } from "types";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id: string) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie: IMovie) {
    setWatched((watched: IWatched[]) => [...watched, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((watched: IWatched[]) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId !== null ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
