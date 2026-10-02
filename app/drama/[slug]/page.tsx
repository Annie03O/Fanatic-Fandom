import ShowPage from "@/app/components/Show/ShowPage";
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";


export function generateStaticParams() {
    return seriesBetaWithSlug.items.flatMap((series) => [
        { slug: series.slug },
        ...(series.id === series.slug ? [] : [{ slug: series.id }]),
    ]);
}


function TeenPage() {
    return <ShowPage genre="drama" />;
}

export default TeenPage;
