import ShowPage from "@/app/components/ShowPage";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";


export function generateStaticParams() {
    return dramaSeriesWithSlug.items.flatMap((series) => [
        { slug: series.slug },
        ...(series.id === series.slug ? [] : [{ slug: series.id }]),
    ]);
}


function TeenPage() {
    return <ShowPage genre="drama" />;
}

export default TeenPage;
