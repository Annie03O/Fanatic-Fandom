"use client";
<<<<<<< HEAD

import { Character } from "@/app/models/types/Character";
import { useMemo, useState } from "react";

export const CharacterArc = ({ character }: { character: Character }) => {
  const characterArcs = character.characterArc ?? [];

  // null = ingen vald => visa alla
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  // håller koll på vilka säsonger som är "expanded"
  const [expandedBySeason, setExpandedBySeason] = useState<Record<number, boolean>>({});

  const seasons = useMemo(() => {
    const unique = Array.from(new Set(characterArcs.map((a) => a.seasonNumber)));
    return unique.sort((a, b) => a - b);
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
    <section className="flex flex-col gap-10 ">
      {/* Dropdown */}
      <div className="flex flex-col gap-2 top-2 relative">
        <select
          className="w-fit rounded-md border bg-black px-3 py-2"
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

      {/* Render */}
      {visibleArcs.map((arc) => {
        const season = arc.seasonNumber;
        const isExpanded = expandedBySeason[season] ?? false;

        return (
          <section key={season} className="flex flex-col gap-3 ">
            <h2 className="text-2xl font-semibold">Season {season}</h2>
            <span>{arc.summary}</span>

          </section>
        );
      })}
    </section>
  );
};
=======
import { useState, useMemo } from "react";
import { Character } from "@/app/models/types/Character";


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
        <section className="flex flex-col gap-10 ">
          {/* Dropdown */}
          <div className="flex flex-col gap-2 top-2 relative">
            <select
              className="w-fit rounded-md border bg-black px-3 py-2"
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
    
          {/* Render */}
          {visibleArcs.map((arc) => {
            const season = arc.seasonNumber;
            const isExpanded = expandedBySeason[season] ?? false;
    
            return (
              <section key={season} className="flex flex-col gap-3 ">
                <h2 className="text-2xl font-semibold">Season {season}</h2>
                <span>{arc.summary}</span>
    
              </section>
            );
          })}
        </section>
      );
    };
>>>>>>> 4b79439 (Cleaning worktree)
