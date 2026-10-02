import { seriesBetaWithSlug } from "../dramaSeriesTop50WithSlug";
import { genreByShowId } from "../genreByShowId";

export const catalog = seriesBetaWithSlug.items.flatMap((show) => {
  const genre = genreByShowId.get(show.id);
  return genre ? [{ show, genre }] : [];
});
