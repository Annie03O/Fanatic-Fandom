import ShowPage from "@/app/components/ShowPage";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";


export function generateStaticParams() {
    return comedySeriesWithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}


function ComedyPage() {
    return <ShowPage genre="comedy" />;
}

export default ComedyPage;
