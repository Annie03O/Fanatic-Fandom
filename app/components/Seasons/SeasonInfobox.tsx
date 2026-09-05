"use client";
import { Season } from "@/app/models/types/Season";
import { convertToCharacterInfobox } from "../../functions/Convert/convertToCharacterInfobox";
import { convertToSeasonInfobox } from "@/app/functions/Convert/convertToSeasonInfobox";

type Props = { season: Season };


export const SeasonInfobox = ({ season }: Props) => {
  const seasonWithInfobox = convertToSeasonInfobox(season);
  const box = seasonWithInfobox?.infobox;

  if (!box) return null;


  return (
    <aside>
      <h2 className="text-3xl text-center">{box.name}</h2>

      <img src={box.posterSrc} alt={box.name} />

      <section className="border text-lg">
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
      </section>
    </aside>
  );
};