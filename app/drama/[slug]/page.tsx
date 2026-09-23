import ShowPage from "@/app/components/ShowPage";
import { allSeriesWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";


export function generateStaticParams() {
    return allSeriesWithSlug.items.flatMap((series) => [
        { slug: series.slug },
        ...(series.id === series.slug ? [] : [{ slug: series.id }]),
    ]);
}


function TeenPage() {
    return <ShowPage genre="drama" />;
}

export default TeenPage;
