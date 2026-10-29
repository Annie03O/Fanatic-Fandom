import { EpisodeBreakdown } from "@/app/components/Seasons/Episodes/EpisodeBreakdown";
import { ComponentType } from "react";

export const EpisodeBreakdownComponent = EpisodeBreakdown as ComponentType<Parameters<typeof EpisodeBreakdown>[0]>;