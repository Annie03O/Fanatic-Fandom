"use client";
import { Movie } from "@/app/models/types/Movie";
import { convertToMoviesInfobox } from "@/app/functions/Convert/convertToMoviesInfobox";

interface Props {
  movie: Movie;
}


export const MovieInfobox = ({ movie }: Props) => {
  const movieWithInfobox = convertToMoviesInfobox(movie);
  const box = movieWithInfobox?.infobox;

  if (!box) return null;


  return (
    <section className="w-full">
      <h2 className="text-2xl text-center">{box.name}</h2>

      <img className="w-full h-auto" src={box.posterSrc} alt={box.name} />

      <section className="border text-lg">
        {box.fields.map((f) =>
          f ? (
            <section className="grid grid-cols-2 w-full p-1" key={f.label}>
              <section className="cols-start-1 cols-span-2">{f.label}</section>{" "}
              <section className="cols-span-1">
                {Array.isArray(f.info)
                  ? f.info.map((item: string, i: number) => (
                      <span key={i}>
                        {item}
                        <br />
                      </span>
                    ))
                  : f.info}
              </section>
            </section>
          ) : null
        )}
        <section className="flex pl-2 pr-2 w-full">
           <section className="w-1/2">{movie.base.previousMovie ? "Previous" : ""}</section> 
           <section className="w-1/2 flex justify-end ">{movie.base.nextMovie ? "Next" : ""}</section> 
        </section>
        <section className="flex  pl-2 pr-2">
          <section className="w-1/2 flex justify-end" >{movie.base.previousMovie ? movie.base.previousMovie.title : ""}</section> 
          <section className="w-1/2 flex justify-end">{movie.base.nextMovie ? movie.base.nextMovie.title : ""}</section>
        </section>
      </section>
    </section>
  );
};