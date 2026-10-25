import Character from "@/app/components/Characters/Character";
import { allSeriesWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";


export function generateStaticParams() {
    return allSeriesWithSlug.items.flatMap((series) =>
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