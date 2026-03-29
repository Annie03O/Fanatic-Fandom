import ShowPage from "@/app/components/ShowPage";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";

export async function generateStaticParams() {
    return teenSeriesTop50WithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}

function TeenPage() {
    
    return (
        <ShowPage/>
    )
}
export default TeenPage;