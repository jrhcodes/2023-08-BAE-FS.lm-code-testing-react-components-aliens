import ErrorMessage from "./ErrorMessage";

export interface ArithmeticTestFieldProps {
    id: string;
    setArithmeticTestValue: (arithmeticTest: string) => void;
    getArithmeticTestValue: () => string;
}

const arithmeticTestValidator = (arithmeticTestValue: string): string[] => {
    const errorMessages: string[] = [];

    if (arithmeticTestValue !== "4")
        errorMessages.push("arithmetic deviation will not be tolerated!");

    return errorMessages;
};

const arithmeticTestOptions = [
    "Not 4",
    "4"
];

const ArithmeticTestField: React.FC<ArithmeticTestFieldProps> = (props) => {
    const errorTextId = props.id + "__errors";
    const inputId = props.id + "__select";
    const labelId = props.id + "__label";
    return <>
        <label id={labelId} htmlFor={inputId}>{"What is 2+2? "}</label >
        <select
            id={inputId}
            onChange={(event) => props.setArithmeticTestValue(event.target.value)}
            value={props.getArithmeticTestValue()}
        >
            {arithmeticTestOptions.map((value) => <option>{value}</option>)}
        </select>;
        <ErrorMessage id={errorTextId} messages={arithmeticTestValidator(props.getArithmeticTestValue())} />;
    </>
}

export default ArithmeticTestField;