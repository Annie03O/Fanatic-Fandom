"use client"
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { convertToSeriesInfobox } from "../../functions/Convert/convertToSeriesInfobox";
import { Show } from "../../models/types/structure/Show"
import { useState } from "react";
import { createImages } from "@/app/models/objects/images";
import { toggleImage } from "@/app/functions/toggleImage";

type Props = {
    type: "Show" | "Character" | "Season" | "Episode" | "Actor";
    show: Show ;
    posterUrl: string;
}

export const SeriesInfobox = ({type, show, posterUrl}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState<string>("");
  
  if (show === null) return null;

  const images = createImages(show) ?? [];
  const modalImages = images.some((image) => image.src === posterUrl)
    ? images
    : [{ src: posterUrl, alt: show.title, pageId: [show.id] }, ...images];
  
  const showWithInfobox = convertToSeriesInfobox(show!);
  
  const box = showWithInfobox?.infobox;
  
  if (!box) return null;

  const openModal = () => {
      console.log("Du klickade på openModal");
      
      if (posterUrl) {
        toggleImage(posterUrl, setChosenImage)
      } else {
        console.error("Couldn't find posterUrl");
        
      };
      setIsModalOpen(true);
      
   }

  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-center">{box.name}</h2>

      {posterUrl ? (
        <button
          type="button"
          className="cursor-pointer"
          onClick={openModal}
          aria-label={`View ${show.title ?? show.title +  " poster"}`}
        >
          <img className="w-full h-auto" src={posterUrl} alt={box.name ?? ""} />
        </button>
      ) : null}

      <section className=" text-lg">
        {box.fields.map((f) => (
          <section className="grid grid-cols-2 w-full border-t p-2 border-gray-400" key={f!.label}>
            <section className=" cols-start-1 cols-span-2">{f!.label}</section>{" "}
            <section className="cols-span-1">
              {
              Array.isArray(f!.info) 
               ? f!.info.map((item, i) => ( 
                 <span key={i}>{ item}
                 
                 <br />
                 </span>
                 
               ))  
               : f!.info}
               </section>
          </section>
        ))}
      </section>
      {isModalOpen && box.posterSrc ? (
        <ModalComponent
          toggleImage={setChosenImage}
          images={modalImages}
          imgUrl={chosenImage}
          title={show.title ?? show.title}
          onClose={() => setIsModalOpen(false)}
          id={show.id}
          type="Show"      
        />
      ) : null}
    </section>
  );
}