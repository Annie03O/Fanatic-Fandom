"use client";
"use client";

import { convertToCharacterInfobox } from "../../functions/Convert/convertToCharacterInfobox";
import type { Character } from "../../models/types/Character";
import type { Education, Occupation } from "@/app/models/types/Occupation";

type Props = { character: Character };

// More specific guard: Occupation has "title"
const isOccupation = (v: unknown): v is Occupation =>
  !!v && typeof v === "object" && "title" in v && "started" in v;

// Education typically has "place" (and not "title")
const isEducation = (v: unknown): v is Education =>
  !!v && typeof v === "object" && "place" in v && "started" in v;

export const CharacterInfobox = ({ character }: Props) => {
  const characterWithInfobox = convertToCharacterInfobox(character);
  const box = characterWithInfobox?.infobox?.[0];

  if (!box) return null;

  const displayName =
    characterWithInfobox.goesByNickname && characterWithInfobox.nickname?.length
      ? characterWithInfobox.nickname[0]
      : characterWithInfobox.firstName;

  return (
    <aside>
      <h2 className="text-3xl text-center">{displayName}</h2>

      <img
        src={characterWithInfobox.imageUrl}
        alt={characterWithInfobox.firstName}
        className="w-full h-auto"
      />

      <section className="border text-lg mt-3">
        {box.fields.map((item) => {
          if (!item) return null;

          return (
            <section
              key={item.label}
              className="grid grid-cols-10 gap-2 p-2 border-b"
            >
              <span className="col-span-3 font-semibold">{item.label}</span>

              <span className="col-span-7">
                {Array.isArray(item.info) ? (
                  <ul className="flex flex-col gap-2">
                    {item.info.map((line: unknown, i: number) => {
                      // 1) Occupation first (prevents it being caught by Education)
                      if (isOccupation(line)) {
                        return (
                          <li
                            key={`${item.label}-${line.title}-${line.started}-${i}`}
                            className="leading-snug"
                          >
                            <div className="font-medium">
                              {line.title}
                              {line.place ? ` — ${line.place}` : ""}
                            </div>
                            <div className="text-sm opacity-80">
                              {line.started} –{" "}
                              {line.hasEnded ? line.ended ?? "" : "Present"}
                            </div>
                          </li>
                        );
                      }

                      // 2) Education
                      if (isEducation(line)) {
                        return (
                          <li
                            key={`${item.label}-${line.place}-${line.started}-${i}`}
                            className="leading-snug"
                          >
                            <div className="font-medium">{line.place}</div>
                            <div className="text-sm opacity-80">
                              {line.started} –{" "}
                              {line.hasEnded ? line.ended ?? "" : "Present"}
                            </div>
                          </li>
                        );
                      }

                      // 3) string[] fallback
                      return (
                        <li key={`${item.label}-${i}`} className="leading-snug">
                          {String(line)}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <span>{String(item.info)}</span>
                )}
              </span>
            </section>
          );
        })}
      </section>
    </aside>
  );
};
