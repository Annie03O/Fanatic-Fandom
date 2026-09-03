"use client"
<<<<<<< HEAD
import { CharacterPortals } from "@/app/components/Characters/CharacterPortals";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import { useParams } from "next/navigation";
import { SeasonsPortals } from "./SeasonsPortals";
import { SeriesInfobox as Infobox } from "./SeriesInfobox";
import { teenSeriesTop50WithInfobox } from "../functions/Convert/convertToSeriesInfobox";

function ShowPage() {
    const {slug} = useParams<{slug: string}>();

    const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug)
    
    const cast = series?.cast ?? [];

    

    if (!series) return <section>Series not found</section>

    return (
        <main className="flex flex-col justify-center items-center">
            <section className="bg-black md:w-[90%] p-1 flex flex-col">            
=======
import { CharacterPortals } from "./Characters/CharactersPortals";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";
import { useParams } from "next/navigation";
import { SeasonsPortals } from "./SeasonsPortals";
import { SeriesInfobox as Infobox } from "./SeriesInfobox"; 
import { teenSeriesWithInfobox } from "../functions/Convert/convertToSeriesInfobox";
import { Show } from "../models/types/Show";
import 
SoundtrackPortals from "./Music/SoundtrackPortals";
import RelatedPortal from "./RelatedPortal";

type ShowPageProps = {
    genre: "teen" | "kids" | "crime" | "comedy";
}

const ShowPage = ({genre}: ShowPageProps) => {
    const {slug} = useParams<{slug: string}>();

    let series: Show | undefined;
    if (genre === "teen") {

        series = teenSeriesWithSlug.items.find((s) => s.slug === slug)

    } else if (genre === "kids") {
        series = teenSeriesWithSlug.kids.find((s) => s.slug === slug)
    }
    
    const cast = series?.cast ?? [];

    if (!series) return <section>Series not found</section>


    return (
        <main className="flex flex-col justify-center items-center">
            <section className="bg-black text-white md:w-[90%] p-1 flex flex-col">            
>>>>>>> 4b79439 (Cleaning worktree)
                
                <h1 className="text-2xl">{series.title}</h1>
                <section className=" flex flex-col-reverse md:flex-row border w-full ">
                    <section className="grid grid-cols-8 col-start-1 row-start-1 row-span-10 border h-fit md:col-span-8 w-full">
                       <section className="col-start-1  md:row-start-1 col-span-8">
                          <h2>Plot</h2>
                          <span>{series.plot}</span>
                       </section>
<<<<<<< HEAD
                       <section className="col-start-1 xl:row-start-3 xl:row-span-5 col-span-10 xl:col-span-4 w-full">
                          <CharacterPortals show={series} page={false}/>
                       </section>
                       <section className="col-span-10 col-start-1 xl:col-start-5 xl:row-start-3 xl:row-span-5 xl:col-span-4 w-full">
                          <SeasonsPortals show={series} page={false}/>
                       </section>
                    </section>
                    <section className="border md:w-[50%] xl:w-[20%]">
=======
                       <section className="col-start-1 lg:row-start-3 lg:row-span-5 col-span-10 lg:col-span-4 w-full bg-blue-200 flex flex-col justify-center items-center gap-3">
                          <CharacterPortals genre={genre} show={series} page={false}/>
                            <SoundtrackPortals genre="teen" page={false} type="soundtrack" show={series}/>
                       </section>
                       <section className="col-span-10 col-start-1 lg:col-start-5 lg:row-start-3 lg:row-span-5 lg:col-span-4 w-full">
                          <SeasonsPortals show={series} page={false}/>
                          {
                            series.related ?<RelatedPortal show={series} page={false}/> : ""
                        }
                       </section>
                    </section>
                    <section className="border md:w-[50%] lg:w-[20%]">
>>>>>>> 4b79439 (Cleaning worktree)
                        <Infobox show={series} type="Show"/>
                    </section>
                       
                </section>
                <section>
                    <h1>Cast</h1>
                    <ul className="list-circle">
                        {cast.map((c) => (
                            <li key={c.actor}>{c.actor} as {c.character}</li>
                        ))}
                    </ul>
                </section>
            </section>
        </main>
    )
}
export default ShowPage;