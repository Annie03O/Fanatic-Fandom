import Character from "@/app/components/Characters/Character";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";


export function generateStaticParams() {
    return teenSeriesWithSlug.items.flatMap((series) =>
        series.mainCharacters.map((character) => ({
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