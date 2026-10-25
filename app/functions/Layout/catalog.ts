import { allSeriesWithSlug } from "../dramaSeriesTop50WithSlug";
import { genreByShowId } from "../genreByShowId";

export const catalog = allSeriesWithSlug.items.flatMap((show) => {
  const genre = genreByShowId.get(show.id);
  return genre ? [{ show, genre }] : [];
});
