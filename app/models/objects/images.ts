import type { EpisodeBreakdown } from "../types/seasons/episode/EpisodeBreakdown";
import type { Image } from "../types/structure/Image";
import type { Show } from "../types/structure/Show";

type GalleryImage = Image & { episode?: EpisodeBreakdown };

export const createImages = (show: Show): GalleryImage[] | null => {
  if (show.seasons === undefined) return null;

  return show.seasons.flatMap((season) => {
    const episodes = Array.isArray(season.episodeBreakdown)
      ? season.episodeBreakdown
      : [];

    return [
      ...(season.posterUrl?.trim()
        ? [{
            src: season.posterUrl,
            alt: season.title ?? `Season ${season.seasonNumber}`,
            pageId: [],
          }]
        : []),
      ...episodes.flatMap((episode) => {
        const episodeImage = episode.episodeImageUrl;
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
};
