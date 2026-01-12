import { get } from "../services/serviceBase";
import type { TmdbGenreListResponse, TmdbGenre } from "../models/types/TmdbGenre";

export const apiKey = "ec859d0394c9b557d3f801a5b45a9723";
;

export const getMovie tags = async (): Promise<TmdbGenre[]> => {
  const data = await get<TmdbGenreListResponse>(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=sv-SE`
  );
  return data. tags;
};
