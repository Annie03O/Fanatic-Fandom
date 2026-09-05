import { teenSeriesWithSlug } from "./WithSlug/teenSeriesWithSlug";

// Flatten: alla karaktärer från alla serier i en lista
export const allCharacters = teenSeriesWithSlug.items.flatMap((s) =>
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
