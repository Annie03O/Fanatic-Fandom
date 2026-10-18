"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { createShowsCatalog } from "@/app/functions/Catalogs/createShowsCatalog";
import { createCharacterCatalog } from "@/app/functions/Catalogs/createCharacterCatalog";
import { SearchResultCard } from "./SearchResultsCard";
import { createSeasonCatalog } from "@/app/functions/Catalogs/createSeasonCatalog";

export const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query")?.trim() ?? "";

    const results = useMemo(() => {
        const normalizedQuery = query.toLowerCase();
        if (!normalizedQuery) return { shows: [], characters: [], seasons: [] };

        const shows = createShowsCatalog(normalizedQuery)
        const characters = createCharacterCatalog(normalizedQuery);
        const seasons = createSeasonCatalog(normalizedQuery);

        return { shows, characters, seasons };
    }, [query]);

    if (!query) {
        return <h2>Enter a search query to see results.</h2>;
    }

    if (results.shows.length === 0 && results.characters.length === 0 && results.seasons.length === 0) {
        return <h2>No results found for &quot;{query}&quot;.</h2>;
    }

    return (
        <section className="flex flex-col border w-full items-center min-h-[1000px] gap-2">
            {results.shows.length > 0 || results.characters.length > 0 || results.seasons.length > 0
                    ? <h1 className="text-3xl w-full ml-2">Results for &quot;{query}&quot;</h1> 
                    : ""
                }
            <section className="w-[80%] h-full border flex flex-col items-center">
                {results.shows.length > 0 && (
                    <section className=" border">
                        
                        <section>
                            {results.shows.map(({ show, genre }) => (
                                <SearchResultCard
                                    key={show.id}
                                    show={show}
                                    genre={genre}
                                />
                          ))}
                        </section>
                    </section>
                )}
                {results.characters.length > 0 ? (
                    
                    <section className="">
                        <section className="flex flex-col gap-[10px]">
                            {results.characters.map(({ show, genre, character }) => (
                                    <SearchResultCard
                                        key={`${show.id}-${character.id}`}
                                        show={show}
                                        character={character}
                                        genre={genre}
                                    />
                            ))}
                        </section>
                    </section>
                ) : ""}
                {results.seasons.length > 0 && (
                    <section className="flex flex-col gap-[10px]">
                        {results.seasons.map(({ show, genre, season }) => (
                            <SearchResultCard
                                key={`${show.id}-${season.id}`}
                                show={show}
                                season={season}
                                genre={genre}
                            />
                        ))}
                    </section>
                )}
            </section>
        </section>
    );
};