"use client";
import { convertToSoundtrackInfobox } from "@/app/functions/Convert/convertToSoundtrackInfobox";
import { Soundtrack } from "@/app/models/types/Soundtrack";

type Props = { soundtrack: Soundtrack };


export const SoundtrackInfobox = ({ soundtrack }: Props) => {
  const soundtrackWithInfobox = convertToSoundtrackInfobox(soundtrack);
  const box = soundtrackWithInfobox?.infobox;

  if (!box) return null;


  return (
    <aside>
      <h2 className="text-3xl text-center">Season {box.name}</h2>

      <img className="w-full h-auto" src={box.posterSrc} alt={soundtrack.id} />

      <section className="border text-lg">
        {box.fields.map((f, fieldIndex) => (
          <section className="grid grid-cols-2 w-full p-1" key={`${f!.label}-${fieldIndex}`}>
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