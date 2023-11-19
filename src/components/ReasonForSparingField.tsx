import ErrorMessage from "./ErrorMessage";
import "../css/reason_for_sparing.css";

export interface ReasonForSparingFieldProps {
    id: string;
    setReasonForSparingText: (reasonForSparing: string) => void;
    getReasonForSparingText: () => string;
}

const MINIMUM_LENGTH = 17;
const MAXIMUM_LENGTH = 153;

const reasonForSparingValidator = (reasonForSparing: string): string[] => {
    const errorMessages: string[] = [];
    const responseLength = reasonForSparing.length;
    if (responseLength < MINIMUM_LENGTH || responseLength > MAXIMUM_LENGTH) {
        errorMessages.push(`Reason must between ${MINIMUM_LENGTH} and ${MAXIMUM_LENGTH} characters in length!`);
    }
    return errorMessages;
};

const ReasonForSparingField: React.FC<ReasonForSparingFieldProps> = (props) => {
    const errorTextId = props.id + "__errors";
    const inputId = props.id + "__textarea";
    const labelId = props.id + "__label";
    return <div id={props.id} className="ReasonForSparingField">
        <label id={labelId} htmlFor={inputId}>{"What is 2+2? "}</label >
        <textarea
            id={inputId}
            value={props.getReasonForSparingText()}
            placeholder="type pitiful pleading in this space"
            onChange={(event) => props.setReasonForSparingText(event.target.value)}
        />;
        <ErrorMessage id={errorTextId} messages={reasonForSparingValidator(props.getReasonForSparingText())} />;
    </div>
}

export default ReasonForSparingField;