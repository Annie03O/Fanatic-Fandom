import { InfoField } from "../../models/types/Infobox";
import { dramaSeriesWithSlug } from "../WithSlug/dramaSeriesWithSlug";
import { Soundtrack } from "@/app/models/types/Soundtrack";

// type guard så .filter inte blir (InfoField | null)[]
const isInfoField = (v: InfoField | null): v is InfoField => v !== null;

const isSoundtrack = (value: unknown): value is Soundtrack =>
  typeof value === "object" &&
  value !== null &&
  "soundtrackNumber" in value &&
  "songCount" in value &&
  "recurringArtists" in value;

export function convertToSoundtrackInfobox(soundtrack?: Soundtrack) {
  if (!soundtrack) return null; // <- skydd (fixar "reading cast" om du råkar skicka undefined)


  const artists = soundtrack.songs.flatMap(s => (s.song ?? []).map(i => i.artist))

  const recurringArtist = [...new Set(
    artists.filter((a, index) => artists.indexOf(a) !== index)
  )] 

  const fields = [
    typeof soundtrack.songs.length === "number"
      ? { 
        label: "Song Count", 
        info: String(soundtrack.songs.length) 
      }
      : null,

    recurringArtist.length ? { 
      label: "Reucurring Artists", 
      info: recurringArtist 
    } 
    : null,

  ].filter(isInfoField);

  return {
    ...soundtrack,
    infobox: {
      name: soundtrack.noSeason,
      posterSrc: soundtrack.imgUrl,
      fields,
    },
  };
}

// Om du vill bygga listan:
// (filtrera bort null ifall något skulle vara trasigt)
export const dramaSeriesWithInfobox = {
  items: dramaSeriesWithSlug.items
    .map((item) => (isSoundtrack(item) ? convertToSoundtrackInfobox(item) : null))
    .filter(
      (s): s is NonNullable<ReturnType<typeof convertToSoundtrackInfobox>> =>
        Boolean(s),
    ),
};
