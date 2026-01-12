import { PopularMovie } from "../models/types/PopularMovie";
import { TmdbGenre } from "../models/types/TmdbGenre";

export function attachGenreNames(
  movies: PopularMovie[],
   tags: TmdbGenre[]
) {
  const genreMap = new Map( tags.map(g => [g.id, g.name]));

  return movies.map(m => ({
    ...m,
    genre_names: m.genre_ids.map(id => genreMap.get(id) ?? "Okänd"),
  }));
}
