import { catalog } from "@/app/functions/Layout/catalog";


export const createSeasonCatalog = (normalizedQuery: string) => {
    const seasonCatalog = catalog.flatMap(({ show, genre }) =>
        show.seasons
            ? show.seasons
                  .filter((season) => {
                      if (!season.plot?.trim()) {
                          return false;
                      }

                      const searchableNames = [
                          show.title,
                          ...(show.seasons ?? []).map((season) => season.title),
                      ];

                      return searchableNames.some((name) =>
                          name?.toLowerCase().includes(normalizedQuery)
                      );
                  })
                  .map((season) => ({ show, genre, season }))
            : []
    );

    return seasonCatalog;
};