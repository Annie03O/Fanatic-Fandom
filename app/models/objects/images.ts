import type { EpisodeBreakdown } from "../types/seasons/episode/EpisodeBreakdown";
import type { Image } from "../types/structure/Image";
import type { Show } from "../types/structure/Show";

type GalleryImage = Image & { episode?: EpisodeBreakdown };

export const findImageByPageId = (
  images: Image[],
  pageId: string,
): Image | undefined => {
  if (!pageId.trim()) return undefined;

  return images.find(
    (image) => image.src.trim() && image.pageId.includes(pageId),
  );
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

        const pageId = episodeImage.pageId;

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

  const relationshipImages = show.mainCharacters.flatMap((character) =>
    (character.relationships ?? []).flatMap((relationship) => {
      const image = relationship.imgUrl;
      if (!image?.src.trim()) return [];

      return [{
        ...image,
        alt: image.alt || relationship.name || "Relationship image",
      }];
    }),
  );

  return [...seasonImages, ...relationshipImages];
};