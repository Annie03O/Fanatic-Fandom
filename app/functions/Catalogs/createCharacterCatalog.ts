import { catalog } from "../Layout/catalog";

export const createCharacterCatalog = (normalizedQuery: string) => {
    const characters = catalog.flatMap(({ show, genre }) =>
                show.mainCharacters
                    .filter((character) => {
                        if (!character.personality?.trim()) {
                            return false;
                        }

                        const searchableNames = [
                            character.label,
                            [
                                character.firstName,
                                character.middleName,
                                character.lastName,
                            ]
                                .filter(Boolean)
                                .join(" "),
                        ];
    
                        return searchableNames.some((name) =>
                            name?.toLowerCase().includes(normalizedQuery)
                        );
                    })
                    .map((character) => ({ show, genre, character }))
            );
    return characters
}