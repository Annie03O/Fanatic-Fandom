import Link from "next/link";
import { Show } from "../models/types/Show";

type Props = {
    show: Show; 
    genre: string;
    title: string;
}

export const ShowPortal = ({show, genre, title}: Props) => {  
  const tags = show.tags?.slice(0, 3) ?? [];
    
    return (
          <Link key={genre} href={`/${genre}/${title}`}>
            <section className="flex justify-center items-center ">
              <article className="w-[300px] h-[555px] border rounded-xl bg-purple-300 flex flex-col justify-center gap-2">
                <h1 className="text-xl whitespace-nowrap text-center">
                  {show.title}</h1>
                  
                <section className="border border-2 w-full h-[430px] overflow-hidden">
                {show.posterUrl && (
                  <img
                    className="w-full h-full object-cover object-center"
                    src={show.posterUrl}
                    alt={show.title}
                  />
                )}
                </section>
                <ul className="flex flex-col gap-0 pl-2">
                  <li>
                    {show.firstAirDate && show.lastAirDate
                      ? `${show.firstAirDate.slice(-4)} - ${show.lastAirDate.slice(-4)}` 
                      : show.firstAirDate?.slice(-4) ?? ""
                      }
                    
                  </li>

                  {/* Tags */}
                  <li className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {tags.length > 2 ? tags
                          .filter((t) => t.length < 12)
                          .map((t, idx) => (
                            <span
                              key={`${t}-${idx}`}
                              className="bg-black text-white rounded-lg whitespace-nowrap px-2 py-0.5"
                            >
                              {t}
                            </span>
                          )) :
                          tags.map((t, idx) => (
                            <span
                              key={`${t}-${idx}`}
                              className="bg-black text-white rounded-lg whitespace-nowrap px-2 py-0.5"
                            >
                              {t}
                            </span>
                          ))
                        }

                    </div>
                  </li>

                </ul>
              </article>
            </section>
          </Link>
        );
      }

export default ShowPortal;