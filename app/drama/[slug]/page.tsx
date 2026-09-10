import ShowPage from "@/app/components/ShowPage";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";


export function generateStaticParams() {
    return dramaSeriesWithSlug.items.flatMap((series) =>
        series.mainCharacters.map((character) => ({
            slug: series.slug,
            id: character.id,
        }))
    );
}


function TeenPage() {
    return <ShowPage genre="drama" />;
}

export default TeenPage;
