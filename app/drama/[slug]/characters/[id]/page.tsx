import Character from "@/app/components/Characters/Character";
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";


export function generateStaticParams() {
    return seriesBetaWithSlug.items.flatMap((series) =>
    (series.mainCharacters ?? []).map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}

function CharacterAdapter() {
  return <Character />;
}

function CharacterPage() {
  return (
    <div>
        <CharacterAdapter />
    </div>
  );
}
export default CharacterPage;