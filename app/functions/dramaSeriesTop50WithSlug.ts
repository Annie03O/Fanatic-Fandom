
import { seriesBeta } from "../models/objects/allSeries";
import { toRouteSlug } from "./toRouteSlug";

export const allSeriesWithSlug = {
  ...seriesBeta,
  items: seriesBeta.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title ?? s.id),
  })),
};
