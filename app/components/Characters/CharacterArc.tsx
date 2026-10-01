"use client";
import { useState, useMemo } from "react";
import { Character } from "@/app/models/types/characters/Character";


export const CharacterArc = ({ character }: { character: Character }) => {
    const characterArcs = character.characterArc ?? [];

    const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

    const [expandedBySeason, setExpandedBySeason] = useState<Record<number, boolean>>({});

    const seasons = useMemo(() => {
       const uniqueSeasons = Array.from(new Set(characterArcs.map(arc => arc.seasonNumber)));
         return uniqueSeasons.sort((a, b) => a - b);
    }, [characterArcs]);

 
    const visibleArcs = useMemo(() => {
        if (selectedSeason === null) return characterArcs;
        return characterArcs.filter((a) => a.seasonNumber === selectedSeason);
      }, [characterArcs, selectedSeason]);
    
      const toggleExpanded = (seasonNumber: number) => {
        setExpandedBySeason((prev) => ({
          ...prev,
          [seasonNumber]: !prev[seasonNumber],
        }));
      };
    
      return (
        <section className="flex flex-col border-gray-600 gap-10 text-black p-2 w-[90%]">

          {/* Dropdown */}
          <div className="flex flex-col  gap-2 top-2 relative">
            <select
              className="w-fit rounded-md border bg-[#f2e8ff] px-3 py-2"
              value={selectedSeason ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                setSelectedSeason(v === "" ? null : Number(v));
              }}
            >
              <option value="">All seasons</option>
              {seasons.map((s) => (
                <option key={s} value={s}>
                  Season {s}
                </option>
              ))}
            </select>
          </div>
          <section className="flex flex-col gap-3 bg-[#f2e8ff] rounded-md p-2 inset-shadow-sm inset-shadow-gray-400">
          {/* Render */}
          {visibleArcs.map((arc) => {
            const season = arc.seasonNumber;
            const isExpanded = expandedBySeason[season] ?? false;
    
            return (
              <section key={season} className="flex flex-col gap-3 border-b border-gray-600 p-2 ">
                <h2 className="text-2xl font-semibold">Season {season} {arc.toSeason ? "-" + arc.toSeason : ""}</h2>
               <div className="flex flex-col gap-2  scrollbar-thin overflow-auto ">
                      {arc.summary.map((summary, index) => (
                        <span key={index}>{summary}</span>
                      ))}
                    </div>
                    
    
              </section>
            );
          })}
          </section>
        </section>
      );
    };
