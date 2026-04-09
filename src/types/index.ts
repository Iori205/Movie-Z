export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};
export type movieResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type GenreType = {
  id: number;
  name: string;
};
export type genreResponseType = {
  genres: GenreType[];
};

export type MovieDetailsType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  genres: GenreType[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieCreditsCastType = {
  order: number;
  name: string;
};
export type MovieCreditsCrewType = {
  job: string;
  name: string;
  id: number;
  credit_id: string;
};
export type movieCreditsResponseType = {
  cast: MovieCreditsCastType[];
  crew: MovieCreditsCrewType[];
  id: number;
};

export type MovieTrailerType = {
  id: number;
  key: string;
  name: string;
  type: string;
};
export type movieTrailerResponseType = {
  id: number;
  results: MovieTrailerType[];
};
