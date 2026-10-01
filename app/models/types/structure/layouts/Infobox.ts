import { Occupation } from "../../characters/Occupation";

export type InfoField = {
  label: string;
  info: string | string[] | Occupation[];
} | null;

export type Infobox = {
  name: string;
  posterSrc: string;
  posterAlt?: string;
  fields: InfoField[];
};
