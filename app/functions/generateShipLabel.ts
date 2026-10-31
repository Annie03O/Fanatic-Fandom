import { capitalizeFirstLetter } from "./Format/capitalizeFirstLetter";

export const generateShipLabel = (firstPerson?:string, secondPerson?: string, id?: string) => {
    let label = "";   
    
    if (firstPerson && secondPerson) {
        label = firstPerson + " and " + secondPerson;

            return label;
    } else if (id) {
        const labelContent = id.split("-").join(" ");

        label = capitalizeFirstLetter(labelContent);

        return label;
    };
}