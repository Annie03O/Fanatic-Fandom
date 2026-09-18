import ShowPage from "@/app/components/ShowPage";
import { crimeSeriesWithSlug } from "@/app/functions/WithSlug/crimeSeriesWithSlug";


export function generateStaticParams() {
    return crimeSeriesWithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}


function CrimePage() {
    return <ShowPage genre="crime" />;
}

export default CrimePage;
