import { Season } from "@/app/models/types/Season";
import { InfoField } from "../../models/types/Infobox";
import { dramaSeriesWithSlug } from "../WithSlug/dramaSeriesWithSlug";

// type guard så .filter inte blir (InfoField | null)[]
const isInfoField = (v: InfoField | null): v is InfoField => v !== null;

const isSeason = (value: unknown): value is Season =>
  typeof value === "object" &&
  value !== null &&
  "seasonNumber" in value &&
  "episodeCount" in value &&
  "mainCast" in value &&
  "recurring" in value &&
  "episodeBreakdown" in value;

export function convertToSeasonInfobox(season?: Season) {
  if (!season) return null; // <- skydd (fixar "reading cast" om du råkar skicka undefined)

  const mainCastNames: string[] = (season.mainCast ?? [])
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

    const recurringCastNames: string[] = (season.recurring ?? [])
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
    mainCastNames.length ? { 
      label: "Main Cast", 
      info: mainCastNames 
    } 
    : null,

    recurringCastNames.length ? {
      label: "Recurring",
      info: recurringCastNames,
    } 
    : null,
    // InfoField vill inte ha number -> gör string
    typeof season.episodeCount === "number"
      ? { 
        label: "Episode Count", 
        info: String(season.episodeCount) 
      }
      : null,

    season.premiereDate?.length ? { 
      label: "Premiere Air Date", 
      info: season.premiereDate 
    } 
    : null,

    season.finaleDate?.length ? { 
      label: "Finale Air Date", 
      info: season.finaleDate 
    } 
    : null,
    season.premiereEpisode?.length ? { 
      label: "Premiere Episode", 
      info: season.premiereEpisode 
    } 
    : null,
    season.finaleEpisode?.length ? { 
      label: "Finale Episode", 
      info: season.finaleEpisode 
    } 
    : null,
    season.network ? { 
      label: "Network", 
      info: season.network 
    } 
    : null,
  ].filter(isInfoField);

  return {
    ...season,
    infobox: {
      name: season.title,
      posterSrc: season.posterUrl,
      fields,
    },
  };
}

// Om du vill bygga listan:
// (filtrera bort null ifall något skulle vara trasigt)
export const dramaSeriesWithInfobox = {
  items: dramaSeriesWithSlug.items
    .map((item) => (isSeason(item) ? convertToSeasonInfobox(item) : null))
    .filter(
      (s): s is NonNullable<ReturnType<typeof convertToSeasonInfobox>> =>
        Boolean(s),
    ),
};
