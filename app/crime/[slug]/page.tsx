import ShowPage from "@/app/components/ShowPage";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";


export function generateStaticParams() {
    return teenSeriesWithSlug.items.flatMap((series) =>
        series.mainCharacters.map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}


function TeenPage() {
    return <ShowPage genre="teen" />;
}

export default TeenPage;
