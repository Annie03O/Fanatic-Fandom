"use client"

import { crimeSeriesWithSlug } from "@/app/functions/WithSlug/crimeSeriesWithSlug";
import { toRouteSlug } from "@/app/functions/toRouteSlug";
import { useParams } from "next/navigation"

export const Movie = () => {
    const { slug, movieId } = useParams<{ slug: string, movieId: string}>();

    const moviesList = crimeSeriesWithSlug.items.find((m) => m.slug === slug);

    if (!moviesList) return <section>MovieList not found</section>;

    const movie = moviesList.movies?.find((m) => toRouteSlug(m.base.id) === movieId)
    const plot = movie?.base.plot;

    return (
        <section className="flex flex-wrap border w-[60%] min-h-[800px] pl-2">    
            <section className="flex flex-col border w-[70%] gap-2">
                <section>   
                    <h1 className="text-3xl">{movie?.base.title}</h1>
                </section>
                <section className="border w-3/4">
                    <h2 className="text-2xl">Plot</h2>
                    <span className="space-y-4">
                        {Array.isArray(plot) ? (
                            plot.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                        ) : (
                            <p>{plot}</p>
                        )}
                    </span>
                </section>
            </section>
            <section className="w-[20%]">
                Info
            </section>
        </section>
    )
}
