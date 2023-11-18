import TextInput from "./TextInput";

export interface PlanetNameFieldProps {
    id: string;
    setPlanetName: (planetName: string) => void;
    getPlanetName: () => string;
}

const planetNameValidator = (planetName: string): string[] => {
    const errorMessages: string[] = [];
    if (planetName.length < 2 || planetName.length > 49)
        errorMessages.push("Planet name must be between 2 and 49 characters in length!");
    if (!/^[a-zA-Z0-9 ]+$/.test(planetName))
        errorMessages.push("Planet name must contain numbers, letters and spaces only!");
    return errorMessages;
};

const PlanetNameField: React.FC<PlanetNameFieldProps> = (props) => <TextInput
    id={props.id}
    label="Planet Name: "
    placeholder="type planet name here"
    setContent={props.setPlanetName}
    getContent={props.getPlanetName}
    validator={planetNameValidator}
/>;

export default PlanetNameField;