export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface IWatched {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
}

export interface IData {
  movies: IMovie[];
  watched: IWatched[];
}
