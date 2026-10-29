"use client"
import { CharacterPortals } from "../Characters/CharactersPortals";
import { useParams } from "next/navigation";
import { SeasonsPortals } from "../Seasons/SeasonsPortals";
import { SeriesInfobox as Infobox } from "./SeriesInfobox"; 
import { Show } from "../../models/types/structure/Show";
import SoundtrackPortals from "../Music/SoundtrackPortals";
import RelatedPortal from "../RelatedPortal";
import { useState } from "react";
import { SoundtrackBreakDown } from "../Music/SoundtrackBreakdown";
import { MoviePortal } from "../Movies/MoviePortal";
import { EpisodeBreakdownComponent } from "@/app/models/objects/EpisodeBreakdownComponent";
import { slugCatalog } from "@/app/models/objects/slugCatalog";

type ShowPageProps = {
    genre:  Genre;
}

const ShowPage = ({genre}: ShowPageProps) => {
    const {slug} = useParams<{slug: string}>();
    const [showEpisodes, setShowEpisodes ] = useState(false);
    const [showSoundtrack, setShowSoundtrack ] = useState(false);

    let series: Show | undefined;

    slugCatalog.map((i) => {
        if (genre === i.genre) {
            series = i.item.items.find((s) => s.slug === slug)
        }
    })

    if (series === undefined) return null;
    
    const relatedShow = series?.related?.[0] as { title?: string; id?: string } | undefined;

    const seasons = series?.seasons ?? [];
    const season = seasons.find((s) => s.id);
    if (seasons === undefined) return console.error("Season is undefined");
    
    const movies = series?.movies ?? [];
    const episodes = seasons.length === 1
        ? (seasons[0]?.episodeBreakdown ?? [])
        : [];
    
    
    if (!series) return <section>Series not found</section>
    
    

    return (
        <main className="flex flex-col ">
            <article className=" text-[#d1c3e3] md:w-full p-1 flex flex-col">            
                
                <h1 className="text-4xl">{series.title}</h1>
                <section className="flex flex-col-reverse md:flex-row w-full ml-2">
                    <section className="grid grid-cols-12 col-start-1 col-span-12 row-start-1 row-span-10  h-fit  w-full">
                       <section className="col-start-1 md:row-start-1 col-span-10">
                          <h2 className="text-3xl">Plot</h2>
                          <span className="block">{series.plot}</span>
                       </section>
                       <section className="col-start-1 lg:row-start-3 lg:row-span-5  col-span-10 lg:col-span-7 w-full flex flex-col justify-center items-center gap-3">
                          <CharacterPortals genre={genre} show={series} page={false}/>
                           {seasons.length > 1 ? <SoundtrackPortals genre={genre} page={false} type="soundtrack" show={series} /> : ""}
                       </section>
                              <section className="col-span-10 col-start-1 lg:col-start-8 lg:row-start-3 lg:row-span-5  lg:col-span-5 w-full">
                                  {seasons.length === 1 ? (
                                      <>
                                          <RelatedPortal title={relatedShow?.title ?? relatedShow?.id ?? ""} show={series} page={true} />
                                      </>
                                  ) : (
                                    <section className="flex flex-col">
                                      {seasons.length > 0 ?  <SeasonsPortals show={series} page={false} genre={genre}/> : movies.length > 0 ? <MoviePortal show={series} page={false} genre={genre}/> : ""}
                                      <RelatedPortal title={relatedShow?.title ?? relatedShow?.id ?? ""} show={series} page={true} />
                                    </section>
                                  )}
                              </section>
                       
                {episodes.length > 0 && (
                    <section className="col-span-10 col-start-1 lg:row-start-8 ">
                        <span className="flex gap-3 items-center">
                            <h1 className="text-3xl ml-2">Episodes</h1>
                            {showEpisodes === true ? <button className="text-blue-300 underline" onClick={() =>setShowEpisodes(false)}>Collapse</button> : <button className="tex<t-blue-300 underline" onClick={() =>setShowEpisodes(true)}>Expand</button> }
                        </span>
                        <section className={`${showEpisodes === false ? " h-1/3 overflow-y-scroll" : "block"} border-b`}>
                            {season?.episodeBreakdown.map((episode) => (
                                <EpisodeBreakdownComponent
                                  key={episode.id}
                                  episode={episode}
                                />
                            ))}
                        </section>
                        <span className="flex gap-3 items-center">
                            <h1 className="text-3xl ml-2">Soundtrack</h1>
                            {showSoundtrack === true ? <button className="text-blue-300 underline" onClick={() =>setShowSoundtrack(false)}>Collapse</button> : <button className="tex<t-blue-300 underline" onClick={() =>setShowSoundtrack(true)}>Expand</button> }
                        </span>
                        <section className={`${showSoundtrack === false ? " h-1/6 overflow-y-scroll" : "block"} border-b`}>
                            {series.soundtrack !== undefined ? series.soundtrack.map((s) => (
                                <SoundtrackBreakDown key={s.id} songs={s.songs}/>
                            )) : undefined}
                        </section>

                    </section>
                )}
                    </section>
                    <section className="md:w-[50%] lg:w-[25%]">
                        <Infobox show={series} type="Show" posterUrl={series.posterUrl.src}/>
                    </section>
                       
                </section>
                <section>
                    <h1>Cast</h1>
                    <ul className="list-circle">
                        {series.cast.map((c) => (
                            <li key={String(c.actor)}>{c.actor} as {c.character}</li>
                        ))}
                    </ul>
                </section>
            </article>

        </main>
    )
}
export default ShowPage;