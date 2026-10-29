import { comedySeries } from "./comedySeries";
import { crimeSeries } from "./crimeSeries";
import { dramaSeries } from "./dramaSeries";
import { fantasySeries } from "./fantasySeries";
import { kidsSeries } from "./kidsSeries";

export const allSeries = comedySeries.concat(crimeSeries, dramaSeries, fantasySeries, kidsSeries)

export const seriesBelowHundred = allSeries.filter(i => i.numberOfEpisodes < 100);

export const seriesBeta = seriesBelowHundred.filter(i => i.mainCharacters && i.seasons && i.soundtrack);
