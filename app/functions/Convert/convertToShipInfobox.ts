import { InfoField } from "../../models/types/structure/layouts/Infobox";
import { Relationship } from "../../models/types/structure/Relationship";
import { seriesBetaWithSlug } from "\.\./WithSlug/allSeriesWithSlug";

const isInfoField = (x: InfoField | null): x is InfoField => x !== null;

export function convertToShipInfobox(ship: Relationship) {
  const fields: InfoField[] = [
    ship.name?.length ? { label: "Name", info: ship.name } : null,
    ship.shortDesc?.length ? { label: "Short Description", info: ship.shortDesc } : null,
  ].filter(isInfoField);

  return {
    ...ship,
    infobox: [
      {
        name: ship.name,
        posterSrc: ship.imgUrl,
        fields,
      },
    ],
  };
}

export const dramaSeriesWithInfobox = {
  items: seriesBetaWithSlug.items.map((show) => ({
    ...show,
    characters: (show.mainCharacters ?? []).map((c) => (c.relationships)),
  })),
};
