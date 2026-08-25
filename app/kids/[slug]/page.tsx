import ShowPage from "@/app/components/ShowPage";
import { kidsSeriesWithSlug } from "@/app/functions/WithSlug/kidsSeriesWithSlug";



export function generateStaticParams() {
    return kidsSeriesWithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}


function KidsPage() {
    
    return (
        <ShowPage genre="kids"/>
    )
}
export default KidsPage;