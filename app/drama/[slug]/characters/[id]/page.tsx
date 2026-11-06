import Character from "@/app/components/Characters/Character";
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";
import type { ComponentType } from "react";


export function generateStaticParams() {
    return seriesBetaWithSlug.items.flatMap((series) =>
    (series.mainCharacters ?? []).map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}

function CharacterAdapter() {
  const CharacterComponent = Character as ComponentType;
  return <CharacterComponent />;
}

function CharacterPage() {
  return (
    <div>
        <CharacterAdapter />
    </div>
  );
}
export default CharacterPage;