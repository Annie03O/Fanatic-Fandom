export const toggleImage = (
  imgUrl: string,
  setChosenImage: (imgUrl: string) => void,
) => {
  console.log("toggleImage anropas");
  
  setChosenImage(imgUrl);

  console.log("imgUrl:", imgUrl);
  
};
