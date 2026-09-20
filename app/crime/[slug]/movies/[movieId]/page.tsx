import { Movie } from "@/app/components/Movies/Movie";
import { crimeSeriesWithSlug } from "@/app/functions/WithSlug/crimeSeriesWithSlug";
import { toRouteSlug } from "@/app/functions/toRouteSlug";

export const dynamicParams = false;

export function generateStaticParams() {
    return crimeSeriesWithSlug.items.flatMap((series) =>
        (series.movies ?? []).map((movie) => ({
            slug: series.slug,
            movieId: toRouteSlug(movie.base.id),
        }))
    );
}

export default function MoviePage() {
    return (
        <Movie/>
    )
}