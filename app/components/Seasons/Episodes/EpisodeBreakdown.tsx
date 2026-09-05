"use client"

import { EpisodeBreakdown as Episode } from "@/app/models/types/EpisodeBreakdown"

type Props = {
    episode: Episode;
}

export const EpisodeBreakdown = ({episode} : Props) => {
    return <section>
        <section>
            <span>{episode.episodeTitle}</span>
        </section>
    </section>
}