import Character from "@/app/components/Characters/Character";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";


export function generateStaticParams() {
    return dramaSeriesWithSlug.items.flatMap((series) =>
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