import TextInput from "./TextInput";

export interface SpeciesNameFieldProps {
    id: string;
    setSpeciesName: (speciesName: string) => void;
    getSpeciesName: () => string;
}

const speciesNameValidator = (speciesName: string): string[] => {
    const errorMessages: string[] = [];
    if (speciesName.length < 3 || speciesName.length > 33)
        errorMessages.push("Species name must be between 3 and 33 characters in length!");
    if (!/^[a-zA-Z ]+$/.test(speciesName))
        errorMessages.push("Species name must contain letters and spaces only!");
    return errorMessages;
};

const SpeciesNameField: React.FC<SpeciesNameFieldProps> = (props) => <TextInput
    id={props.id}
    label="Species Name: "
    placeholder="type species name here"
    setContent={props.setSpeciesName}
    getContent={props.getSpeciesName}
    validator={speciesNameValidator}
/>;

export default SpeciesNameField;