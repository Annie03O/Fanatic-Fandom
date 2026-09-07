"use client"

import { EpisodeBreakdown as Episode } from "@/app/models/types/EpisodeBreakdown"

type Props = {
    episode: Episode;
}

export const EpisodeBreakdown = ({episode} : Props) => {
    return <section className="flex flex-col border-b p-2">
                                     <section>
                                      <h1 className="text-2xl">{episode.episodeTitle}</h1>
                                     </section>
                                     <section className="w-full flex flex-col bg-white text-black">
                                      <section className="w-full border">
                                         <ul className="flex w-full">
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Original Release Date:</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Season</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Episode</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Directed by:</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Written by:</b></li>
                                         </ul>
                                         <ul className="flex w-full">
                                          <li className="w-1/5 flex justify-center items-center gap-2">{episode.releaseDate}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{episode.seasonNumber}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{episode.episodeNumber}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"> {episode.director}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{episode.writer}</li>
                                         </ul>
                                      </section>
                                      <section className="w-full h-[200px] border flex">
                                        <span className="w-4/5 p-1">{episode.plot}</span>
                                        <section className="h-full border flex bg-black w-1/5  overflow-hidden ">
                                          <img className="  flex   object-cover object-center" src={episode.imageUrl} alt="" />
                                        </section>
                                      </section>
                                       
                                     </section>
                                  </section>
}