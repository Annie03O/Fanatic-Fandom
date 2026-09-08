import Character from "@/app/components/Characters/Character";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";


export function generateStaticParams() {
    return comedySeriesWithSlug.items.flatMap((series) =>
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