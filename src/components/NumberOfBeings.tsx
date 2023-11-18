import TextInput from "./TextInput";

export interface NumberOfBeingsFieldProps {
    id: string;
    setNumberOfBeings: (numberOfBeings: string) => void;
    getNumberOfBeings: () => string;
}

const MINIMUM_BEINGS = 1000000;

const numberOfBeingsValidator = (numberOfBeings: string): string[] => {
    const errorMessages: string[] = [];
    const beingCount = +numberOfBeings;
    if (!isNaN(beingCount) && beingCount < MINIMUM_BEINGS) {
        errorMessages.push("Number of beings must be over 1 million to be worthy of consideration!");
    }
    if (!/^[0-9]+$/.test(numberOfBeings)) {
        errorMessages.push("Number of beings must be an integer!");
    }
    return errorMessages;
};


const NumberOfBeingsField: React.FC<NumberOfBeingsFieldProps> = (props) => <TextInput
    id={props.id}
    label="Number of Beings: "
    placeholder="type number of beings here"
    setContent={props.setNumberOfBeings}
    getContent={props.getNumberOfBeings}
    validator={numberOfBeingsValidator}
/>;

export default NumberOfBeingsField;