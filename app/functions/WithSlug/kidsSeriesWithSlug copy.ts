import { toRouteSlug } from "../toRouteSlug";
import { crimeSeries } from "../../models/objects/crimeSeries";

export const crimeSeriesWithSlug = {
    ...crimeSeries,
    items: crimeSeries.map((s) => ({
        ...s,
        slug: toRouteSlug(s.title),
    })),
};