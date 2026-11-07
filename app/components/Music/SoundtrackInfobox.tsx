"use client";
import { convertToSoundtrackInfobox } from "@/app/functions/Convert/convertToSoundtrackInfobox";
import { Soundtrack } from "@/app/models/types/music/Soundtrack";
import { useState } from "react";

type Props = { soundtrack: Soundtrack };


export const SoundtrackInfobox = ({ soundtrack }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const soundtrackWithInfobox = convertToSoundtrackInfobox(soundtrack);
  const box = soundtrackWithInfobox?.infobox;

  if (!box) return null;


  return (
    <section>
      <h2 className="text-3xl text-center">Season {box.name}</h2>

      <img className="w-full h-auto" src={box.posterSrc} alt={soundtrack.id} />

      <section className=" text-lg">
        {box.fields.map((f, fieldIndex) => (
          <section className="flex border gap-2 w-full  p-1" key={`${f!.label}-${fieldIndex}`}>
            <section className=" cols-start-1 cols-span-2 ">{f!.label}</section>{" "}
            <section className="cols-span-1 ">
              {Array.isArray(f!.info) ? (
                <>
                  {(showMore || f!.info.length <= 10
                    ? f!.info
                    : f!.info.slice(0, 9)
                  ).map((item, i) => (
                    <span className="" key={i}>
                      {item}
                      <br />
                    </span>
                  ))}
                  {f!.info.length > 10 && (
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="underline text-blue-500 hover:text-blue-300"
                    >
                      {showMore ? "Hide" : "View More"}
                    </button>
                  )}
                </>
              ) : (
                <span className=" flex gap-2">{f!.info}</span>
              )}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};