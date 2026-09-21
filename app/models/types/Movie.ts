import { CastMember } from "./dramaSeriesEntry";
import { Show } from "./Show";
import { Soundtrack } from "./Soundtrack";

export type Movie = {
  base: {
    id: string;
    posterUrl: string;
    title: string;
    plot?: string | string[];
    country?: string;
    language?: string;
    firstAirDate?: string;
    status?: string;
    cast?: CastMember[];
    director?: string | string[];
    creator?: string | string[];
    prodCompanies?: string | string[];
    basedOn?: boolean;
    adapter?: string | string[];
    writtenBy?: string | string[];
    producer?: string | string[];
    soundtrack?: Soundtrack[];
    related?: Pick<Show, "title" | "id" | "posterUrl">[];
    genre?: string[];
    previousMovie?: Pick<Show, "title" | "id">;
    nextMovie?: Pick<Show, "title" | "id">;
  };
  season: number;
  number: number;
}