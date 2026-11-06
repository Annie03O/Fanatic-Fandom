import { Character } from "../types/characters/Character";
import type { EpisodeBreakdown } from "../types/seasons/episode/EpisodeBreakdown";
import type { Image } from "../types/structure/Image";
import type { Relationship } from "../types/structure/Relationship";
import type { Show } from "../types/structure/Show";

type GalleryImage = Image & { episode?: EpisodeBreakdown };

export const toImage = (
  value: Image | string | undefined,
  alt: string,
  pageId?: string,
): Image | undefined => {
  const src = typeof value === "string" ? value : value?.src;
  if (typeof src !== "string" || !src.trim()) return undefined;

  if (typeof value === "string") {
    return { src: src.trim(), alt, pageId: pageId ? [pageId] : [] };
  }
  if (!value) return undefined;

  return {
    ...value,
    src: src.trim(),
    alt: value.alt || alt,
    pageId: pageId && value.pageId.length === 0 ? [pageId] : value.pageId,
  };
};

export const relationshipImages = (relationships: Relationship[]): Image[] =>
  relationships.flatMap((relationship) => {
    const image = toImage(
      relationship.imgUrl,
      relationship.name ?? "Relationship image",
      relationship.id,
    );
    return image ? [image] : [];
  });

export const findImageByPageId = (
  images: Image[],
  pageId: string,
): Image | undefined => {
  if (!pageId.trim()) return undefined;

  return images.find(
    (image) => image.src.trim() && image.pageId.includes(pageId),
  );
};

export const findSecondPageId = (
  characters: Pick<Character, "id" | "label">[]
  ,
  character: Character,
) => {
  console.log("findSecondPageId: ", character);
  
  const secondCharacter = characters.find((i) => i.id !== character.id);
  
  return secondCharacter;
};

export const createImages = (show: Show): GalleryImage[] | null => {
  if (show.seasons === undefined) return null;

  const seasonImages = show.seasons.flatMap((season) => {
    const episodes = Array.isArray(season.episodeBreakdown)
      ? season.episodeBreakdown
      : [];

    const seasonPoster = season.posterUrl;
    const seasonPosterSrc = typeof seasonPoster?.src === "string"
      ? seasonPoster.src.trim()
      : "";
    const seasonPosterPageId = Array.isArray(seasonPoster?.pageId)
      ? seasonPoster.pageId
      : typeof seasonPoster?.pageId === "string"
        ? [seasonPoster.pageId]
        : [];

    return [
      ...(seasonPosterSrc
        ? [{
            src: seasonPosterSrc,
            alt: season.title ?? `Season ${season.seasonNumber}`,
            pageId: seasonPosterPageId,
          }]
        : []),
      ...episodes.flatMap((episode) => {
        const episodeImage = episode.imageUrl;
        const src = episodeImage?.src;

        if (typeof src !== "string" || !src.trim()) return [];

        const pageId = episodeImage!.pageId;

        return [{
          src,
          alt: Array.isArray(episode.episodeTitle)
            ? episode.episodeTitle.join(", ")
            : episode.episodeTitle,
          episode,
          pageId: Array.isArray(pageId)
            ? pageId
            : typeof pageId === "string"
              ? [pageId]
              : [],
        }];
      }),
    ];
  });

  const relatedImages = show.mainCharacters.flatMap((character) =>
    relationshipImages(character.relationships ?? []),
  );

  return [...seasonImages, ...relatedImages];
};