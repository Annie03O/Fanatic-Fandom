"use client"
import { CharacterPortals } from "./Characters/CharactersPortals";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { kidsSeriesWithSlug } from "@/app/functions/WithSlug/kidsSeriesWithSlug";
import { useParams } from "next/navigation";
import { SeasonsPortals } from "./Seasons/SeasonsPortals";
import { SeriesInfobox as Infobox } from "./SeriesInfobox"; 
import { Show } from "../models/types/Show";
import 
SoundtrackPortals from "./Music/SoundtrackPortals";
import RelatedPortal from "./RelatedPortal";
import { EpisodeBreakdown } from "./Seasons/Episodes/EpisodeBreakdown";

type ShowPageProps = {
    genre: "drama" | "kids" | "crime" | "comedy";
}

const ShowPage = ({genre}: ShowPageProps) => {
    const {slug} = useParams<{slug: string}>();

    let series: Show | undefined;
    if (genre === "drama") {

        series = dramaSeriesWithSlug.items.find((s) => s.slug === slug || s.id === slug)

    } else if (genre === "kids") {
        series = kidsSeriesWithSlug.items.find((s) => s.slug === slug)
    }
    
    const cast = series?.cast ?? [];
    const related = series?.related?.[0];
    const relatedShow = related as { title?: string; id?: string } | undefined;
    const episodes = series?.seasons?.length === 1
        ? (series.seasons[0]?.episodeBreakdown ?? [])
        : [];
    
    console.log("Series", series);
    if (!series) return <section>Series not found</section>
    

    return (
        <main className="flex flex-col justify-center items-center">
            <article className="bg-black text-white md:w-[90%] p-1 flex flex-col">            
                
                <h1 className="text-2xl">{series.title}</h1>
                <section className=" flex flex-col-reverse md:flex-row border w-full ">
                    <section className="grid grid-cols-8 col-start-1 row-start-1 row-span-10 border h-fit md:col-span-8 w-full">
                       <section className="col-start-1  md:row-start-1 col-span-8">
                          <h2>Plot</h2>
                          <span>{series.plot}</span>
                       </section>
                       <section className="col-start-1 lg:row-start-3 lg:row-span-5 col-span-10 lg:col-span-4 w-full bg-blue-200 flex flex-col justify-center items-center gap-3">
                          <CharacterPortals genre={genre} show={series} page={false}/>
                           {series.seasons!.length > 1 ? <SoundtrackPortals genre="drama" page={false} type="soundtrack" show={series} /> : ""}
                       </section>
                              <section className="col-span-10 col-start-1 lg:col-start-5 lg:row-start-3 lg:row-span-5 lg:col-span-4 w-full">
                                  {series.seasons?.length === 1 ? (
                                      <>
                                          <RelatedPortal title={relatedShow?.title ?? relatedShow?.id ?? ""} show={series} page={true} />
                                          <SoundtrackPortals genre="drama" page={false} type="soundtrack" show={series} />
                                      </>
                                  ) : (
                                      <SeasonsPortals show={series} page={false} />
                                  )}
                              </section>
                       
                {episodes.length > 0 && (
                    <section className="col-span-10 col-start-1 lg:row-start-8 ">
                        <h1 className="text-3xl ml-2">Episodes</h1>
                        {episodes.map((episode) => (
                            <EpisodeBreakdown key={episode.id} episode={episode} />
                        ))}
                    </section>
                )}
                    </section>
                    <section className="border md:w-[50%] lg:w-[20%]">
                        <Infobox show={series} type="Show"/>
                    </section>
                       
                </section>
                <section>
                    <h1>Cast</h1>
                    <ul className="list-circle">
                        {cast.map((c) => (
                            <li key={String(c.actor)}>{c.actor} as {c.character}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </main>
    )
}
export default ShowPage;