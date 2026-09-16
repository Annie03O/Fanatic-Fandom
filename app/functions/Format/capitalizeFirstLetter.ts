// Source - https://stackoverflow.com/a/1026087
// Posted by Steve Harrison, modified by community. See post 'Timeline' for change history
// Retrieved 2026-09-08, License - CC BY-SA 4.0
export function capitalizeFirstLetter(val: string) {
    return String(val)
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase())
        .replace(/([a-z])'([a-z])/gi, (_, before, after) => {
            return `${before}'${after.toLowerCase()}`;
        });
}
