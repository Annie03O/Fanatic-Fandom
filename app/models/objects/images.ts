import { Season } from "../types/seasons/Season";

export const createImages = (season: Season) => {
  const images = [
    ...(season.posterUrl?.trim()
      ? [{
          src: season.posterUrl,
          alt: season.title ?? `Season ${season.seasonNumber}`,
        }]
      : []),
    ...season.episodeBreakdown.flatMap((episode) => {
      episode.episodeImageUrl.src ?? episode.episodeImageUrl.src
        ? [{
            src: episode.episodeImageUrl.src,
            alt: Array.isArray(episode.episodeTitle)
              ? episode.episodeTitle.join(", ")
              : episode.episodeTitle,
            episode,
            pageId: episode.episodeImageUrl.pageId
            
          }]
        : []
      }
    ),
  ];

  return  images;
};

