import { teenSeriesTop50 } from "../models/objects/teenSeriesTop50";

// Flatten: alla karaktärer från alla serier i en lista
export const allCharacters = teenSeriesTop50.items.flatMap((s) =>
  (s.mainCharacters ?? []).map((c) => ({
    ...c,
    seriesId: s.id,
    seriesTitle: s.title,
  }))
);

// Snabb lookup på characterId
export function getCharacterById(characterId: string) {
  return allCharacters.find((c) => c.id === characterId) ?? null;
}
