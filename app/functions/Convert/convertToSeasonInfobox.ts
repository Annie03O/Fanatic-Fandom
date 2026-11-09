import { Season } from "@/app/models/types/seasons/Season";
import { InfoField } from "../../models/types/structure/InfoboxCategory";
import { seriesBetaWithSlug } from "\.\./WithSlug/allSeriesWithSlug";
import { Show } from "@/app/models/types/structure/Show";

const isInfoField = (v: InfoField | null): v is InfoField => v !== null;

const getActorName = (actor: string | string[]) =>
  Array.isArray(actor)
    ? actor.filter((name) => name.trim()).join(", ")
    : actor.trim();

export function convertToSeasonInfobox(show: Show, season: Season) {
  const mainCastNames: string[] = (show.cast ?? [])
    .filter((i) => i.seasons?.includes(season.id))
    .map((castMember) => getActorName(castMember.actor))
    .filter((s): s is string => Boolean(s));

  const recurringCastNames: string[] = (show.recurring ?? [])
    .filter((i) => i.seasons?.includes(season.id))
    .map((character) => character.actor ? getActorName(character.actor) : "")
    .filter((s): s is string => Boolean(s));

  // Annotated directly so every `category` is checked against InfoboxCategory
  const allFields: InfoField[] = [
    // General
    mainCastNames.length ? { label: "Main Cast", info: mainCastNames, category: "General" } : null,
    recurringCastNames.length ? { label: "Recurring", info: recurringCastNames, category: "General" } : null,
    season.premiereDate?.length ? { label: "Premiere Air Date", info: season.premiereDate, category: "General" } : null,
    season.finaleDate?.length ? { label: "Finale Air Date", info: season.finaleDate, category: "General" } : null,
    season.premiereEpisode?.length ? { label: "Premiere Episode", info: season.premiereEpisode, category: "General" } : null,
    season.finaleEpisode?.length ? { label: "Finale Episode", info: season.finaleEpisode, category: "General" } : null,

    // Release
    season.network ? { label: "Network", info: season.network ? season.network : show.network, category: "Release" } : null,
    typeof season.episodeCount === "number"
      ? { label: "Episode Count", info: String(season.episodeCount), category: "Release" }
      : null,
  ];

  const fields = allFields.filter(isInfoField);

  return {
    ...season,
    infobox: {
      name: season.title,
      posterSrc: season.posterUrl?.src ?? "",
      fields,
    },
  };
}

export const dramaSeriesWithInfobox = {
  items: seriesBetaWithSlug.items.flatMap((show) =>
    (show.seasons ?? []).map((season) => convertToSeasonInfobox(show, season))
  ),
};
