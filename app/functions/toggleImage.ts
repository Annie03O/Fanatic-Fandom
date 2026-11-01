export const toggleImage = (
  imgUrl: string,
  setChosenImage: (imgUrl: string) => void,
) => {
  setChosenImage(imgUrl);
  console.log(imgUrl);
  
};