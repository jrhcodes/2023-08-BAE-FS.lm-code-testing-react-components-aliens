import ErrorMessage from "./ErrorMessage";

export interface TextInputProps {
    id: string;
    label: string;
    setContent: (input: string) => void;
    getContent(): string;
    validator: (value: string) => string[];
    placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
    const inputId = props.id + "__input";
    const labelId = props.id + "__label";
    const errorTextId = props.id + "__errors";
    return <>
        <label id={labelId} htmlFor={inputId}>{props.label}</label>
        <input id={inputId} type="text"
            placeholder={props.placeholder}
            value={props.getContent()}
            onChange={(event) => {
                const value = event.target.value;
                props.setContent(value);
            }}

        />
        <ErrorMessage id={errorTextId} messages={props.validator(props.getContent())} />;
    </>;
}

export default TextInput;