"use client"

import Link from "next/link";
import { catalog } from "@/app/functions/Layout/catalog";
import { characters } from "@/app/models/objects/characters";
import { SetStateAction, useState } from "react";

type Props = {
    genre: "drama" | "comedy" | "kids" | "fantasy" | "crime";
    subPage?: "characters" | "seasons" | "soundtrack"; 
}

function SearchFilter({genre, subPage}: Props) {
    const [searchInput, setSearchInput] = useState("");
    const [active, setActive] = useState(false);
   
    const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchInput(e.target.value);
        setActive(true);

        
    };

   
    const query = searchInput.trim().toLowerCase();
    const searchResults = [
        ...catalog.map(({ show, genre }) => ({
            id: `series-${show.id}`,
            title: show.title,
            type: "Series" as const,
            href: `/${genre}/${show.slug}`,
            context: "",
        })),
        ...characters.map((character) => ({
            id: `character-${character.id}`,
            title: character.label,
            type: "Character" as const,
            href: character.href,
            context: character.context,
        })),
    ];
    const filteredItems = query
        ? searchResults.filter((result) => result.title.toLowerCase().includes(query))
        : [];

    return (
        <form className=" w-[300px] relative">
            <section className="flex gap-2">
                <input className="border pl-2 pt-1 pb-1 w-full rounded-lg bg-white text-black" type="text" placeholder="Search..." value={searchInput} onChange={handleSearchChange} />
                    <button className="w-[100px] bg-purple-300 hover:bg-purple-400 text-white border rounded-lg">Search</button>
            </section>
            <ul className={`absolute w-full border bg-black ${active === true ? "block" : "hidden"}`}>
                                {filteredItems.map((result) => (
                                        <li key={result.id} className="hover:bg-white/10">
                                            <Link
                                                href={result.href}
                                                onClick={() => setActive(false)}
                                                className="flex justify-between gap-2 px-2 py-1"
                                            >
                                                <span>{result.title}</span>
                                                <span className="text-sm text-gray-400">
                                                    {result.type}{result.context ? ` · ${result.context}` : ""}
                                                </span>
                                            </Link>
                                             
                                        </li>
                ))}
            </ul>
        </form>
    )
}

export default SearchFilter;