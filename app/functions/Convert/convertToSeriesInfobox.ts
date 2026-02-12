import { InfoField } from "../../models/types/Infobox";
import { Show } from "../../models/types/Show";
import { teenSeriesTop50WithSlug } from "../teenSeriesTop50WithSlug";

// type guard så .filter inte blir (InfoField | null)[]
const isInfoField = (v: InfoField | null): v is InfoField => v !== null;

export function convertToSeriesInfobox(show?: Show) {
  if (!show) return null; // <- skydd (fixar "reading cast" om du råkar skicka undefined)

  const castNames: string[] = (show.cast ?? [])
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
    show.title?.length ? { label: "Title", info: show.title } : null,
    show.tags?.length ? { label: "Genre", info: show.tags } : null,
    show.basedOn === true && show.related?.length
      ? { label: "Based On", info: show.related[0] }
      : null,
    show.creator?.length ? { label: "Creator", info: show.creator } : null,
    castNames.length ? { label: "Cast", info: castNames } : null,

    show.adapter?.length ? { label: "Adapter", info: show.adapter } : null,
    show.composer?.length ? { label: "Composer", info: show.composer } : null,
    show.executive?.length ? { label: "Executive Producer", info: show.executive } : null,
    show.prodLocation?.length ? { label: "Production Location", info: show.prodLocation } : null,
    show.producer?.length ? { label: "Producer", info: show.producer } : null,
    show.prodCompanies?.length ? { label: "Production Companies", info: show.prodCompanies } : null,

    // InfoField vill inte ha number -> gör string
    typeof show.numberOfEpisodes === "number"
      ? { label: "Episode Count", info: String(show.numberOfEpisodes) }
      : null,
    typeof show.numberOfSeasons === "number"
      ? { label: "Season Count", info: String(show.numberOfSeasons) }
      : null,

    show.firstAirDate?.length ? { label: "Premiere Air Date", info: show.firstAirDate } : null,
    show.lastAirDate?.length ? { label: "Finale Air Date", info: show.lastAirDate } : null,
    show.network?.length ? { label: "Network", info: show.network } : null,
    show.related?.length ? { label: "Related", info: show.related } : null,
  ].filter(isInfoField);

  return {
    ...show,
    infobox: {
      name: show.title,
      posterSrc: show.posterUrl,
      fields,
    },
  };
}

// Om du vill bygga listan:
// (filtrera bort null ifall något skulle vara trasigt)
export const teenSeriesTop50WithInfobox = {
  items: teenSeriesTop50WithSlug.items
    .map(convertToSeriesInfobox)
    .filter((s): s is Show & { infobox: any } => Boolean(s)),
};
