import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import SeasonsPageClient from "./SeasonsPageClient";

export async function generateStaticParams() {
    return teenSeriesTop50WithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}

export default function AllSeasonsPage() {
    return <SeasonsPageClient />
}