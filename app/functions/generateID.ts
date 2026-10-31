export const generateId = (name:string) => {
   const id = name.toLowerCase().split(" ").join("-");

   return id;
}