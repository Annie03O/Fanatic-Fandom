"use client"
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { convertToShowInfobox } from "../../functions/Convert/convertToShowInfobox";
import { Show } from "../../models/types/structure/Show"
import { useState } from "react";
import { createImages } from "@/app/models/objects/images";
import { toggleImage } from "@/app/functions/toggleImage";
import { InfoField } from "@/app/models/types/structure/InfoboxCategory";

type Props = {
    type: "Show" | "Character" | "Season" | "Episode" | "Actor";
    show: Show ;
    posterUrl: string;
}

export const ShowInfobox = ({type, show, posterUrl}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState<string>("");
  
  if (show === null) return null;

  const images = createImages(show) ?? [];
  const modalImages = images.some((image) => image.src === posterUrl)
    ? images
    : [{ src: posterUrl, alt: show.title, pageId: [show.id] }, ...images];
  
  const convertedShow = convertToShowInfobox(show);
  if (!convertedShow) return null;

  const fields: InfoField[] = convertedShow.infobox.fields;

  const openModal = () => {
      console.log("Du klickade på openModal");
      
      if (posterUrl) {
        toggleImage(posterUrl, setChosenImage)
      } else {
        console.error("Couldn't find posterUrl");
        
      };
      setIsModalOpen(true);
      
   }

   const fieldsByCategory = new Map<string, InfoField[]>();

    for (const field of fields) {
    if (!field) continue;

    const category = field.category ?? "General";
    const group = fieldsByCategory.get(category) ?? [];
    group.push(field);
    fieldsByCategory.set(category, group);
  }


  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-center">{show.title}</h2>

      {posterUrl ? (
        <button
          type="button"
          className="cursor-pointer"
          onClick={openModal}
          aria-label={`View ${show.title ?? show.title +  " poster"}`}
        >
          <img className="w-full h-auto" src={posterUrl} alt={show.title ?? ""} />
        </button>
      ) : null}

      <section className=" text-lg">
        {/* {box.fields.map((f) => (
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
        ))} */}
        {Array.from(fieldsByCategory, ([category, fields]) => (
          <section key={category}>
            <h3 className="border-b border-gray-500 px-2 py-1 text-xl font-bold text-center text-[#d1c3e3] bg-black">
              {category}
            </h3>
            {fields.map((f) => (
              <section className="grid grid-cols-10 gap-2 p-2 border-b border-gray-400" key={f!.label}>
                <span className="col-span-3 font-semibold">{f!.label}</span>
                <span className="col-span-7">
                  {Array.isArray(f!.info)
                    ? f!.info.map((item, i) => (
                        <span key={i}>
                          {String(item)}
                          <br />
                        </span>
                      ))
                    : f!.info}
                </span>
              </section>
            ))}
          </section>
        ))
        }
      </section>
      {isModalOpen && posterUrl ? (
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