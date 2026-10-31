import { capitalizeFirstLetter } from "./Format/capitalizeFirstLetter";

export const generateLabel = (firstName?:string, lastName?: string, id?: string) => {
    let label = "";   
    
    if (firstName && lastName) {
        label = firstName + " " + lastName;

            return label;
    } else if (id) {
        const labelContent = id.split("-").join(" ");

        label = capitalizeFirstLetter(labelContent);

        return label;
    };
}