import { crimeSeries } from "../../models/objects/crimeSeries";
import { toRouteSlug } from "../toRouteSlug";

export const crimeSeriesWithSlug = {
  ...crimeSeries,
  items: crimeSeries.map((series) => ({
    ...series,
    slug: toRouteSlug(series.title),
  })),
};