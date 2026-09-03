<<<<<<< HEAD
import { Education } from "./Occupation";
import { Show } from "./Show";
=======
import { Education } from "./Occupation"; 
>>>>>>> 4b79439 (Cleaning worktree)

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
<<<<<<< HEAD

=======
>>>>>>> 4b79439 (Cleaning worktree)
