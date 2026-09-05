import { Education } from "./Occupation";

export type InfoField = {
  label: string;
  info: string | string[] | Education[];
} | null;

export type Infobox = {
  name: string;
  posterSrc: string;
  posterAlt?: string;
  fields: InfoField[];
};
