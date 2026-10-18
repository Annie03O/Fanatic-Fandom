import { catalog } from "@/app/functions/Layout/catalog";


export const createShowsCatalog = (normalizedQuery: string) => {
    const showsCatalog = catalog.filter(({ show }) => {
            const searchableText = [
                show.title,
                ...(show.seasons ?? []).map((season) => season.title),
            ];

            return searchableText.some((text) =>
                text?.toLowerCase().includes(normalizedQuery)
            );
        });

    
    return showsCatalog
}