import Character from "@/app/components/Characters/Character";
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";


export function generateStaticParams() {
    return fantasySeriesWithSlug.items.flatMap((series) =>
    (series.mainCharacters ?? []).map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}

function CharacterPage() {
  return (
    <div>
        <Character/>
    </div>
  );
}
export default CharacterPage;