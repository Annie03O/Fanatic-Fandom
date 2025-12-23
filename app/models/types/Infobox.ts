export type InfoField = {
  index: number;
  label: string;
  info: string;
};

export type Infobox = {
  name: string;
  posterSrc: string;
  posterAlt?: string;
  fields: InfoField[];
};

