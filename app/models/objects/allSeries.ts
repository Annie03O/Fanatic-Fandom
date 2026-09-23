import { comedySeries } from "./comedySeries";
import { crimeSeries } from "./crimeSeries";
import { dramaSeries } from "./dramaSeries";
import { fantasySeries } from "./fantasySeries";
import { kidsSeries } from "./kidsSeries";

export const allSeries = comedySeries.concat(crimeSeries, dramaSeries, fantasySeries, kidsSeries)
