import { teenSeriesTop50WithSlug } from "./teenSeriesTop50WithSlug";

// Flatten: alla karaktärer från alla serier i en lista
export const allCharacters = teenSeriesTop50WithSlug.items.flatMap((s) =>
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
