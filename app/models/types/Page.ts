export interface IMovieListItem  {
  id: number;
  poster_path: string | null;
  release_date: string; // "YYYY-MM-DD"
  title: string;
  adult: boolean;
};

export interface IMovieListItemExt extends IMovieListItem {
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  vote_average: number;
  vote_count: number;

}

