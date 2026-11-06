import { Modal } from "@/app/components/Layout/Modal";
import { ReactElement } from "react";
import { Image } from "../types/structure/Image";
import { Category } from "../types/structure/Category";
import { GalleryImage } from "./images";

export const ModalComponent = Modal as unknown as (props: {
  title: string;
  imgUrl: string;
  onClose: () => void;
  images: string | Image[] ;
  toggleImage: (imgUrl: string) => void;
  id: string;
  type: Category;
}) => ReactElement;