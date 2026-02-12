import { Education } from "./Occupation";
import { Show } from "./Show";

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

