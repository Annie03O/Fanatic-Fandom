export type Box = {
 name: string | undefined;
 posterSrc: string | undefined;
 fields: ({
 label: string;
 info: string | string[];
 } | null)[];
}