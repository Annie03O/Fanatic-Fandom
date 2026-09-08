import { comedySeries } from "../../models/objects/comedySeries";
import { toRouteSlug } from "../toRouteSlug";

export const comedySeriesWithSlug = {
  ...comedySeries,
  items: comedySeries.map((series) => ({
    ...series,
    slug: toRouteSlug(series.title),
  })),
};