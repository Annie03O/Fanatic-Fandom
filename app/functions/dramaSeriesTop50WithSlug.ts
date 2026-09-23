import { allSeries } from "../models/objects/allSeries";
import { dramaSeries } from "../models/objects/dramaSeries";
import { toRouteSlug } from "./toRouteSlug";

export const allSeriesWithSlug = {
  ...allSeries,
  items: allSeries.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title ?? s.id),
  })),
};
