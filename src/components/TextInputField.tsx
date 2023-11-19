import ErrorMessage from "./ErrorMessage";
import "../css/text_input.css";

export interface TextInputFieldProps {
    id: string;
    label: string;
    setContent: (input: string) => void;
    getContent(): string;
    validator: (value: string) => string[];
    placeholder?: string;
}

const TextInputField: React.FC<TextInputFieldProps> = (props) => {
    const inputId = props.id + "__input";
    const labelId = props.id + "__label";
    const errorTextId = props.id + "__errors";
    return <>
        <div className="TextInputField" id={props.id}>
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
        </div>
    </>;
}

export default TextInputField;