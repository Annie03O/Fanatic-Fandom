import {fantasySeries} from "../../models/objects/fantasySeries"
import { toRouteSlug } from "../toRouteSlug";


export const fantasySeriesWithSlug = {
  ...fantasySeries,
  items: fantasySeries.map((series) => ({
    ...series,
    slug: toRouteSlug(series.title ?? series.id),
  })),
};

