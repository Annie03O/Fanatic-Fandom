import { catalog } from "@/app/functions/Layout/catalog";

export const shows = catalog.map(({ show, genre }) => ({
        id: show.id,
        label: show.title,
        context: "Show",
        image: show.posterUrl,
        href: `/${genre}/${show.slug}`,
      }));
