"use client"
import { CharacterPortals } from "@/app/components/CharacterPortals";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import { useParams } from "next/navigation";

function ShowPage() {
    const {slug} = useParams<{slug: string}>();

    const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug)
    
    if (!series) return <section>Series not found</section>

    return (
        <main className="flex flex-col justify-center items-center">
            <section className="bg-black w-[90%] p-1">            
                <h1 className="text-2xl">{series.title}</h1>
                <section className="flex border">
                    <section className="border w-[80%]">
                       <h2>Plot</h2>
                       <span>{series.plot}</span>
                       <section className="flex">
                          <CharacterPortals show={series}/>
                       </section>
                    </section>
                <section className="border"></section>
                </section>
                <section></section>
            </section>
        </main>
    )
}
export default ShowPage;