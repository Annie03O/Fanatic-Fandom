"use client"

import { capitalizeFirstLetter } from "@/app/functions/Format/capitalizeFirstLetter"
import { EpisodeSongInfo } from "@/app/models/types/Soundtrack"

type Props = {
    songs: EpisodeSongInfo[];
}

export const SoundtrackBreakDown = ({songs}: Props) => {
    return (
        <section className="bg-white text-black text-xl">
                                        <header className="flex text-center"> 
                                            <section className="flex border w-1/2 justify-center items-center ">Episode</section>
                                            <section className="flex border w-1/2 justify-center items-center">
                                               <section className="flex border w-1/2 justify-center items-center">Song</section>
                                               <section className="flex border w-1/2 justify-center items-center">Artist</section>
                                            </section>                                
                                        </header>
                                                                            {songs.map((s, episodeIndex) => {
        
                                                                                return <section key={`${s.episodeTitle}-${episodeIndex}`} className="flex border ">
                                                <section className="flex border justify-center items-center w-1/2">
                                                    {capitalizeFirstLetter(s.episodeTitle)}
                                                </section>
                                                <section className="flex flex-col border justify-center items-center w-1/2">
                                                    {!s.song ? "No songs featured in this episode": s.song.map((i, songIndex) => {
                                                        return <section key={`${i.id ?? `${i.title}-${i.artist}`}-${songIndex}`} className="flex w-full border-b">
                                                            <span className="w-full text-center flex  justify-center items-center">
                                                              {capitalizeFirstLetter(i.title)}
                                                            </span>
                                                            <span className="w-full text-center flex  justify-center items-center">
                                                                {capitalizeFirstLetter(i.artist)}
                                                            </span>
                                                        </section>
                                                    })}
                                                </section>
                                            </section>
                                          })}
                                      </section>
    )
}