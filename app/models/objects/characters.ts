import { catalog } from "@/app/functions/Layout/catalog";

export const characters = catalog.flatMap(({ show, genre }) =>
        (show.mainCharacters ?? []).map((character) => ({
          id: `${show.id}-${character.id}`,
          label: character.label ?? (
            [character.firstName, character.lastName].filter(Boolean).join(" ") || character.id
          ),
          context: show.title,
          image: character.posterUrl ?? character.imageUrl,
          href: genre === "crime"
            ? `/crime/${show.slug}/${character.id}`
            : genre === "kids"
              ? `/kids/${show.slug}/characters`
              : `/${genre}/${show.slug}/characters/${character.id}`,
        })),
      );
