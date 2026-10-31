"use client";
import React, { useState } from "react";
import { ShipCard } from "./ShipCard";
import { Relationship } from "@/app/models/types/structure/Relationship";
import type { Show } from "@/app/models/types/structure/Show";

type Props = {
  relationships: Relationship[];
  show: Show;
};

type SectionKey = "Friendship" | "Romance" | "Family" | "Other";

const RenderableShipCard = ShipCard as unknown as React.ComponentType<{
  item: Relationship;
  show: Show;
}>;

function normalizeType(type?: string) {
  const t = (type ?? "").trim().toLowerCase();

  // Mappa varianter till dina tre buckets
  if (["romance", "romances", "romantic", "relationship", "relationships"].includes(t))
    return "Romance";

  if (["friendship", "friendships", "friend"].includes(t)) return "Friendship";

  if (["family", "families"].includes(t)) return "Family";

  return "Other";
}

export const RelationshipsSection = ({ relationships, show }: Props) => {
  const [expandedSections, setExpandedSections] = useState<
    Partial<Record<SectionKey, boolean>>
  >({});

  const grouped = relationships.reduce<Record<string, Relationship[]>>(
    (acc, r) => {
      const key = normalizeType(r.type);
      (acc[key] ??= []).push(r);
      return acc;
    },
    { Romance: [], Friendship: [], Family: [], Other: [] }
  );

  const sections: Array<{ key: SectionKey; title: string }> = [
    { key: "Friendship", title: "Friendships" },
    { key: "Romance", title: "Romances" },
    { key: "Family", title: "Family" },
    // { key: "Other", title: "Other" }, // slå på om du vill se allt som inte matchar
  ];


  return (
    <section className="flex w-[90%] flex-col gap-6">
      {sections.map(({ key, title }) => {
        // OBS: om du vill kräva card===true, behåll första raden.
        // Om du misstänker att Romance saknar card, använd den andra raden istället (debug).
        const items = (grouped[key] ?? []).filter((r) => r.card === true);
        // const items = grouped[key] ?? []; // debug: visa alla oavsett card

        if (items.length === 0) return null;

        const isExpanded = expandedSections[key] ?? false;

        return (
          <section key={key} className={`flex flex-col gap-3 w-[90%] ${isExpanded ? "" : "max-h-[400px] overflow-y-hidden"} p-2`}>
            <header className="flex border-b border-gray-600 relative items-center">
              <h2 className="text-3xl justify-start">{title}</h2>
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedSections((current) => ({
                    ...current,
                    [key]: !isExpanded,
                  }))
                }
                className="absolute right-1 underline hover:text-blue-500"
              >
                {isExpanded ? "Hide" : "Expand"}
              </button>
            </header>
            <section key={title} className="mt-3 flex flex-col gap-3">
              {items.map((r, index) => (
                <RenderableShipCard
                  key={`${r.id ?? r.name ?? "relationship"}-${index}`}
                  item={r}
                  show={show}
                />
              ))}
            </section>
          </section>
        );
      })}
    </section>
  );
};
