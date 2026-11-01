"use client";
import { Season } from "@/app/models/types/seasons/Season";
import { convertToSeasonInfobox } from "@/app/functions/Convert/convertToSeasonInfobox";
import Link from "next/link";

type Props = { 
  season: Season 
  genre:  Genre;
  slug: string;
};


export const SeasonInfobox = ({ season, genre, slug }: Props) => {
  
  const seasonWithInfobox = convertToSeasonInfobox(season);
  const box = seasonWithInfobox?.infobox;

  if (!box) return null;


  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-center">Season {season.seasonNumber}</h2>

      {box.posterSrc.src ? (
        <img className="w-full h-auto" src={box.posterSrc.src} alt={box.posterSrc.alt} />
      ) : null}

      <section className="border-t border-gray-400 text-lg">
        {box.fields.map((f) => (
          <section className="grid grid-cols-2 w-full p-1" key={f!.label}>
            <section className=" cols-start-1 cols-span-2">{f!.label}</section>{" "}
            <section className="cols-span-1">
              {
              Array.isArray(f!.info) 
               ? f!.info.map((item, i) => ( 
                 <span key={i}>{ item}
                 
                 <br />
                 </span>
                 
               ))  
               : f!.info}
               </section>
          </section>
        ))}
        <section className="flex">
            <section className="flex flex-col w-1/2">
              {season.previousSeason ? (
                <section className="flex flex-col w-full">
                  <label className="font-bold flex justify-start">Previous</label>
                  <Link className="flex justify-start" href={`/${genre}/${slug}/seasons/${season.previousSeason.id}`}>
                    Season {season.previousSeason.seasonNumber}
                  </Link>
                </section>
              ) : ""}
  
          </section>
          <section className="flex flex-col w-1/2">
              {season.nextSeason ? (
                <section className="flex flex-col w-full">
                  <label className="font-bold flex justify-end">Next</label>
                  <Link className="flex justify-end underline hover:text-blue-500" href={`/${genre}/${slug}/seasons/${season.nextSeason.id}`}>
                    Season {season.nextSeason.seasonNumber}
                  </Link>
                </section>
              ) : ""}
  
          </section>
       </section>
      </section>
    </section>
  );
};