import { InfoField } from "../../models/types/Infobox";
import { Relationship } from "../../models/types/Relationship";
import { teenSeriesWithSlug } from "../WithSlug/teenSeriesWithSlug";

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

export const teenSeriesWithInfobox = {
  items: teenSeriesWithSlug.items.map((show) => ({
    ...show,
    characters: (show.mainCharacters ?? []).map((c) => (c.relationships)),
  })),
};
