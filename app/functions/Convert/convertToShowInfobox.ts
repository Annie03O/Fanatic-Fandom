import { InfoField } from "../../models/types/structure/InfoboxCategory";
import { Show } from "../../models/types/structure/Show";
import { seriesBetaWithSlug } from "\.\./WithSlug/allSeriesWithSlug";

// type guard så .filter inte blir (InfoField | null)[]
const isInfoField = (v: unknown): v is NonNullable<InfoField> => {
  if (!v || typeof v !== "object") return false;

  const field = v as { label?: unknown; info?: unknown };
  return typeof field.label === "string" && field.info !== undefined;
};

export function convertToShowInfobox(show?: Show) {
  if (!show) return null; // <- skydd (fixar "reading cast" om du råkar skicka undefined)

  const castNames: string[] = (show.mainCharacters ?? [])
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

  const basedOnTitle = show.basedOn === true ? show.related?.[0]?.title : undefined;
  const relatedTitles = (show.related ?? [])
    .map((r) => r.title)
    .filter((t): t is string => Boolean(t));

  // Annotated directly so every `category` is checked against InfoboxCategory
  const allFields: InfoField[] = [
    // General
    show.title?.length ? { label: "Title", info: show.title, category: "General" } : null,
    show.tags?.length ? { label: "Genre", info: show.tags, category: "General" } : null,
    basedOnTitle ? { label: "Based On", info: basedOnTitle, category: "General" } : null,
    show.creator?.length ? { label: "Creator", info: show.creator, category: "General" } : null,
    castNames.length ? { label: "Cast", info: castNames, category: "General" } : null,
    show.firstAirDate?.length ? { label: "Premiere Air Date", info: show.firstAirDate, category: "General" } : null,
    show.lastAirDate?.length ? { label: "Finale Air Date", info: show.lastAirDate, category: "General" } : null,
    relatedTitles.length ? { label: "Related", info: relatedTitles, category: "General" } : null,

    // Production
    show.executive?.length ? { label: "Executive Producer", info: show.executive, category: "Production" } : null,
    show.producer?.length ? { label: "Producer", info: show.producer, category: "Production" } : null,
    show.adapter?.length ? { label: "Adapter", info: show.adapter, category: "Production" } : null,
    show.composer?.length ? { label: "Composer", info: show.composer, category: "Production" } : null,
    show.prodLocation?.length ? { label: "Production Location", info: show.prodLocation, category: "Production" } : null,
    show.prodCompanies?.length ? { label: "Production Companies", info: show.prodCompanies, category: "Production" } : null,

    // Release
    show.network?.length ? { label: "Network", info: show.network, category: "Release" } : null,
    // InfoField vill inte ha number -> gör string
    typeof show.numberOfSeasons === "number"
      ? { label: "Season Count", info: String(show.numberOfSeasons), category: "Release" }
      : null,
    typeof show.numberOfEpisodes === "number"
      ? { label: "Episode Count", info: String(show.numberOfEpisodes), category: "Release" }
      : null,
  ];

  const fields = allFields.filter(isInfoField);

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
export const dramaSeriesWithInfobox = {
  items: seriesBetaWithSlug.items
    .map(convertToShowInfobox)
    .filter((s): s is Show & { infobox: any } => Boolean(s)),
};
