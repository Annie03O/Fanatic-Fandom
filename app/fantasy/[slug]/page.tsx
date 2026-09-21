import ShowPage from "@/app/components/ShowPage";
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";


export function generateStaticParams() {
    return fantasySeriesWithSlug.items.flatMap((series) => [
        { slug: series.slug },
        ...(series.id === series.slug ? [] : [{ slug: series.id }]),
    ]);
}


function FantasyPage() {
    return <ShowPage genre="fantasy" />;
}

export default FantasyPage;
