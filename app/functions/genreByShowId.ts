import { comedySeries } from "../models/objects/comedySeries";
import { crimeSeries } from "../models/objects/crimeSeries";
import { dramaSeries } from "../models/objects/dramaSeries";
import { fantasySeries } from "../models/objects/fantasySeries";
import { kidsSeries } from "../models/objects/kidsSeries";

export const genreByShowId = new Map<string, Genre>([
  ...comedySeries.map(({ id }) => [id, "comedy"] as const),
  ...crimeSeries.map(({ id }) => [id, "crime"] as const),
  ...dramaSeries.map(({ id }) => [id, "drama"] as const),
  ...fantasySeries.map(({ id }) => [id, "fantasy"] as const),
  ...kidsSeries.map(({ id }) => [id, "kids"] as const),
]);
