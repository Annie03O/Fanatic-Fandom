import ShowPage from "@/app/components/ShowPage";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";


export function generateStaticParams() {
    return comedySeriesWithSlug.items.flatMap((series) =>
        series.mainCharacters.map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}


function ComedyPage() {
    return <ShowPage genre="comedy" />;
}

export default ComedyPage;
