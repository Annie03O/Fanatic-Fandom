import { dramaSeries } from "../models/objects/dramaSeries";
import { toRouteSlug } from "./toRouteSlug";

export const dramaSeriesWithSlug = {
  ...dramaSeries,
  items: dramaSeries.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title),
  })),
};
