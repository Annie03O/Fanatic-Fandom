"use client";
import { Image } from "@/app/models/types/structure/Image";
import { faAngleLeft, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";


type ModalImage = Image & {
  episode?: {
    seasonNumber: number;
    episodeNumber: number | number[];
    episodeTitle: string | string[];
  };
};

type Props = {
  title: string;
  imgUrl: string;
  onClose: () => void;
  images: ModalImage[];
  toggleImage: (imgUrl: string) => void;
  type: "Show" | "Season" | "Character" | "Episode" | "Movie";
};

export const Modal = ({ title, imgUrl, onClose, images, type, toggleImage }: Props) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (images === undefined) return console.error("Images not found");
  
  const activeIndex = images.findIndex((i) => i.src === imgUrl);
  

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[activeIndex];
    if (!strip || !thumb) return;

    // Aktiv thumbnails högerkant ska hamna vid containerns högerkant
    const left = thumb.offsetLeft + thumb.offsetWidth - strip.clientWidth;
    strip.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        const next = (activeIndex + 1) % images.length;
        if (images[next]) toggleImage(images[next].src);
      } else if (event.key === "ArrowLeft") {
        const previous = (activeIndex - 1 + images.length) % images.length;
        if (images[previous]) toggleImage(images[previous].src);
      }
    };

    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images, onClose, toggleImage]);

  
  const image = images[activeIndex];
  
  if (!image) {
    console.error("Couldn't find image src");
    return null;
  }

  const toggleNext = () => {
    const next = (activeIndex + 1) % images.length;
    toggleImage(images[next].src);
  };

  const togglePrevious = () => {
    const previous = (activeIndex - 1 + images.length) % images.length;
    toggleImage(images[previous].src);
  };

  const episode = type === "Season" ? image.episode : undefined;
  const episodeTitle = Array.isArray(episode?.episodeTitle)
    ? episode.episodeTitle.join(", ")
    : episode?.episodeTitle;
  const episodeNumber = Array.isArray(episode?.episodeNumber)
    ? episode.episodeNumber.join(", ")
    : episode?.episodeNumber;

    
  console.log("Images", images);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close poster"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-10 w-8/10 rounded h-8/10 bg-white p-2 flex flex-col justify-center"
      >
        <section className="flex justify-center flex-col w-full h-full">
          <header className="flex items-center justify-between gap-4 w-full">
            <section className="flex flex-col">
                <h2 className="text-black text-2xl">{title}</h2>
                {episode ? (
                  <span className="flex">
                    Season {episode.seasonNumber}, Episode {episodeNumber}: {episodeTitle}
                  </span>
                ) : null}
            </section>
            <button type="button" onClick={onClose} aria-label="Close poster" className="text-4xl text-black">
              <FontAwesomeIcon icon={faClose} />
            </button>
          </header>

          <section className="w-full h-8/10 flex justify-center relative">
            <section className="absolute w-8/10 h-full flex justify-center">
              <section className="relative w-full  flex justify-center items-center">
                <button onClick={togglePrevious} className="absolute flex left-0 h-fit cursor-pointer">
                  <FontAwesomeIcon className="text-3xl text-gray-500 drop-shadow-[0_0_2px_gray]" icon={faAngleLeft} />
                </button>
                <button onClick={toggleNext} className="absolute flex right-0 cursor-pointer">
                  <FontAwesomeIcon className="text-3xl text-gray-500 drop-shadow-[0_0_2px_gray]" icon={faAngleRight} />
                </button>
              </section>
            </section>
            <img className="h-full w-auto shadow-xl shadow-gray-600" src={imgUrl} alt={title} />
          </section>

          <footer className="max-w-full shadow-lg shadow-gray-600">
            {/* Detta är scroll-containern */}
            <div ref={stripRef} className="relative flex h-[75px] overflow-hidden">
              {images.map((i, idx) => (
                <button
                  key={i.src}
                  ref={(el) => {
                    thumbRefs.current[idx] = el;
                  }}
                  className={`shrink-0 h-full w-[100px] ${idx === activeIndex ? "border-4 border-blue-400" : ""}`}
                  onClick={() => toggleImage(i.src)}
                >
                  <img className="h-full w-full object-cover" src={i.src} alt={i.alt} />
                </button>
              ))}
            </div>
          </footer>
        </section>
      </section>
    </section>
  );
};