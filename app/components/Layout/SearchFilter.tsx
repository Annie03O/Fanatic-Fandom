"use client";

import Link from "next/link";
import { catalog } from "@/app/functions/Layout/catalog";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
    genre?: "drama" | "comedy" | "kids" | "fantasy" | "crime";
    subPage?: "characters" | "seasons" | "soundtrack";
};

function SearchFilter({ genre, subPage }: Props) {
    const [searchInput, setSearchInput] = useState("");
    const [active, setActive] = useState(false);
    const router = useRouter()

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value);
        setActive(true);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActive(false);
        router.push(`/search?query=${encodeURIComponent(searchInput)}`);
    };

    const searchTerms = searchInput
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);

    const seenResultIds = new Set<string>();
    const searchResults = catalog
    .filter(({ genre: itemGenre }) => !genre || itemGenre === genre)
    .flatMap(({ show, genre }) => [
        {
            id: `series-${show.id}`,
            title: show.title,
            type: "Series" as const,
            href: `/${genre}/${show.slug}`,
            context: "",
        },

        ...(show.mainCharacters ?? []).map((character) => ({
            id: `character-${show.id}-${character.id}`,
            title:
                character.label ??
                (
                    [character.firstName, character.lastName]
                        .filter(Boolean)
                        .join(" ") || character.id
                ),
            type: "Character" as const,
            href:
                genre === "crime"
                    ? `/crime/${show.slug}/${character.id}`
                    : genre === "kids"
                        ? `/kids/${show.slug}/characters`
                        : `/${genre}/${show.slug}/characters/${character.id}`,
            context: show.title,
        })),
    ])
    .filter(({ id }) => {
        if (seenResultIds.has(id)) {
            return false;
        }

        seenResultIds.add(id);
        return true;
    });

    const filteredItems = searchTerms.length > 0
        ? searchResults.filter((result) => {
              const titleWords = result.title
                  .toLowerCase()
                  .split(/[\s\p{P}\p{S}]+/u)
                  .filter(Boolean);
              return searchTerms.every((term) =>
                  titleWords.some((word) => word.startsWith(term))
              );
          })
        : [];

    return (
        <form className="h-full w-[300px] relative" onSubmit={handleSearchSubmit}>
            <section className="flex flex-col h-full gap-2 relative">
                <section className="flex  h-full">
                <input
                    className="border pl-2 pt-1 pb-1 h-full w-full rounded-lg bg-white text-black"
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    suppressHydrationWarning
                />

                <button type="submit" className="w-[100px] bg-purple-300 hover:bg-purple-400 text-white border rounded-lg">
                    Search
                </button>
                </section>

            </section>
            <section
                className={`absolute w-[225px] border bg-white text-black z-[10]  ${
                    active && filteredItems.length > 0
                        ? "block"
                        : "hidden"
                }`}
            >
                {filteredItems.map((result) => (
                    <section
                        key={result.id}
                    >
                        <Link
                            href={result.href}
                            onClick={() => setActive(false)}
                            className="flex justify-between gap-2 px-2 py-1"
                        >
                            <span>{result.title}</span>
                            
                        </Link>
                    </section>
                ))}
            </section>

        </form>
    );
}

export default SearchFilter;
