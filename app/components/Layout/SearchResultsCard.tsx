
import type { Character } from "@/app/models/types/characters/Character";
import type { Show } from "@/app/models/types/structure/Show";
import Link from "next/link";
import { truncateWords } from "./truncateWords";
import type { Season } from "@/app/models/types/seasons/Season";

type Props = {
    show: Show & { slug: string };
    genre: Genre;
    character?: Character;
    season?: Season;
};

export const SearchResultCard = ({ show, genre, character, season }: Props) => {
    const href = character
        ? genre === "crime" || genre === "kids"
            ? `/${genre}/${show.slug}/characters`
            : `/${genre}/${show.slug}/characters/${character.id}`
        : season
            ? `/${genre}/${show.slug}/seasons/${season.id}`
            : `/${genre}/${show.slug}`;
    const title = character
        ? character.label ??
          ([
              character.firstName,
              character.middleName,
              character.lastName,
          ]
              .filter(Boolean)
              .join(" ") ||
              character.id)
         : season 
         ? season.title ?? `Season ${season.seasonNumber}`
        : show.title;
    const description = character
        ? character.personality
        : season
            ? season.plot
            : Array.isArray(show.plot)
                ? show.plot.join(" ")
                : show.plot;

    return (
        <section className="border bg-white text-black">
            <section className="flex flex-col gap-3">
                <Link href={href}>
                    <h2 className="text-2xl">{title}</h2>
                </Link>
                {description && <span>{truncateWords(description, 50)}</span>}
            </section>
        </section>
    );
};