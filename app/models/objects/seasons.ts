import { catalog } from "@/app/functions/Layout/catalog";

export const seasons = catalog.flatMap(({ show, genre }) => {
        if (genre !== "comedy" && genre !== "drama" && genre !== "fantasy") return [];

        return (show.seasons ?? []).map((season) => ({
          id: `${show.id}-${season.id}`,
          label: `Season ${season.seasonNumber}`,
          context: show.title,
          image: season.posterUrl ?? show.posterUrl,
          href: `/${genre}/${show.slug}/seasons/${season.id}`,
        }));
      });
