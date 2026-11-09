import { Occupation } from "../characters/Occupation";

export type InfoboxCategory =
  | "Biography"
  | "Relationships"
  | "Career"
  | "Appearances"
  | "Backstage"
  | "General"
  | "Production"
  | "Original Release"
  | "Release"
  ;

export type InfoField = {
  label: string;
  info: string | string[] | Occupation[];
  category?: InfoboxCategory;
} | null;
