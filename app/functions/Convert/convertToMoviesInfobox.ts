import { Movie } from "@/app/models/types/Movie";
import { InfoField } from "../../models/types/Infobox";

import { allSeriesWithSlug } from "../WithSlug/allSeriesWithSlug";

// type guard så .filter inte blir (InfoField | null)[]
const isInfoField = (v: unknown): v is InfoField => {
  if (!v || typeof v !== "object") return false;

  const field = v as { label?: unknown; info?: unknown };
  return typeof field.label === "string" && field.info !== undefined;
};

export function convertToMoviesInfobox(movie: Movie) {
  if (!movie) return null; // <- skydd (fixar "reading cast" om du råkar skicka undefined)

  const castNames: string[] = (movie.base.cast ?? [])
    .filter(Boolean)
    .map((c) => {
      const a = c.actor;

      // Anpassa efter din CastMember-shape:
      if (typeof a === "string") return a;

      // Om actor är objekt (t.ex. { firstName, lastName } eller { name })
      if (a && typeof a === "object") {
        const anyA = a as any;
        const full =
          [anyA.firstName, anyA.lastName].filter(Boolean).join(" ") ||
          anyA.name ||
          "";
        return String(full).trim();
      }

      return "";
    })
    .filter((s): s is string => Boolean(s));




  const fields = [
    movie.base.title?.length ? { label: "Title", info: movie.base.title } : null,
    movie.base.genre?.length ? { label: "Genre", info: movie.base.genre } : null,
    movie.base.basedOn === true && movie.base.related?.length
      ? { label: "Based On", info: movie.base.related[0].title }
      : null,
    movie.base.creator?.length ? { label: "Creator", info: movie.base.creator } : null,
    castNames.length ? { label: "Cast", info: castNames } : null,
    movie.base.director?.length ? {label: "Director", info: movie.base.director} : null,
    movie.base.writtenBy?.length ? {label: "Writer(s)", info: movie.base.writtenBy} : null,
    movie.base.adapter?.length ? { label: "Adapter", info: movie.base.adapter } : null,
    movie.base.producer?.length ? { label: "Producer", info: movie.base.producer } : null,
    movie.base.prodCompanies?.length ? { label: "Production Companies", info: movie.base.prodCompanies } : null,

    // InfoField vill inte ha number -> gör string
    typeof movie.number === "number"
      ? { label: "Movie Number", info: String(movie.number) }
      : null,
    typeof movie.season=== "number"
      ? { label: "Season", info: String(movie.season) }
      : null,

    movie.base.firstAirDate?.length ? { label: "Premiere Air Date", info: movie.base.firstAirDate } : null,
    movie.base.related?.length ? { label: "Related", info: movie.base.related.map((r) => r.title) } : null,
  ].filter(isInfoField);

  return {
    ...movie,
    infobox: {
      name: movie.base.title,
      posterSrc: movie.base.posterUrl,
      fields,
    },
  };
}

const isMovie = (
  show: (typeof allSeriesWithSlug.items)[number],
): show is (typeof show & Movie) =>
  "base" in show && "season" in show && "number" in show;

// Om du vill bygga listan:
// (filtrera bort null ifall något skulle vara trasigt)
export const dramaMoviesWithInfobox = {
  items: allSeriesWithSlug.items
    .filter(isMovie)
    .map(convertToMoviesInfobox)
    .filter((s): s is Movie & { infobox: any } => Boolean(s)),
};
