import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import CharacterPageClient from "./CharacterPageClient";

export async function generateStaticParams() {
    return teenSeriesTop50WithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}

export default function AllCharacterPage() {
    return <CharacterPageClient />
}