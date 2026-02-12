"use client";

import React from "react";
import { ShipCard } from "./ShipCard";
import { Relationship } from "@/app/models/types/Relationship";

type Props = {
  relationships: Relationship[];
};

function normalizeType(type?: string) {
  const t = (type ?? "").trim().toLowerCase();

  // Mappa varianter till dina tre buckets
  if (["romance", "romances", "romantic", "relationship", "relationships"].includes(t))
    return "Romance";

  if (["friendship", "friendships", "friend"].includes(t)) return "Friendship";

  if (["family", "families"].includes(t)) return "Family";

  return "Other";
}

export const RelationshipsSection = ({ relationships }: Props) => {
  const grouped = relationships.reduce<Record<string, Relationship[]>>(
    (acc, r) => {
      const key = normalizeType(r.type);
      (acc[key] ??= []).push(r);
      return acc;
    },
    { Romance: [], Friendship: [], Family: [], Other: [] }
  );

  const sections: Array<{ key: "Friendship" | "Romance" | "Family" | "Other"; title: string }> = [
    { key: "Friendship", title: "Friendships" },
    { key: "Romance", title: "Romances" },
    { key: "Family", title: "Family" },
    // { key: "Other", title: "Other" }, // slå på om du vill se allt som inte matchar
  ];

  return (
    <section className="flex flex-col gap-6">
      {sections.map(({ key, title }) => {
        // OBS: om du vill kräva card===true, behåll första raden.
        // Om du misstänker att Romance saknar card, använd den andra raden istället (debug).
        const items = (grouped[key] ?? []).filter((r) => r.card === true);
        // const items = grouped[key] ?? []; // debug: visa alla oavsett card

        if (items.length === 0) return null;

        return (
          <section key={key}>
            <h2 className="text-3xl">{title}</h2>

            <section className="mt-3 flex flex-col gap-3">
              {items.map((r) => (
                <ShipCard key={r.id} item={r} />
              ))}
            </section>
          </section>
        );
      })}
    </section>
  );
};
