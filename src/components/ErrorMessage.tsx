export interface ErrorMessageProps {
    id: string;
    messages: string[];
}

const randomAlienTalk = (): string => {
    const message = [
        "RESISTANCE IS FUTILE!",
        "EXTERMINATE!",
        "PUNY APPLICANT!",
        "PREPARE FOR ASSIMILATION!",
        "YOU WILL OBEY!",
        "COMPLY OR FACE OBLITERATION!",
        "CHARGING WEAPONS!",
        "YOU TYPE WITHOUT HONOUR!",
        "RAISE YOUR SHEILDS!",
    ];

    return message[Math.floor(message.length * Math.random())];
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
    const fullMessages = props.messages.map(message => `${randomAlienTalk()} ${message}`);
    console.log({ props, fullMessage: fullMessages });

    return <div id={props.id} data-testid={props.id} className="ErrorMessage">
        {fullMessages.map(errormessage => <p>{errormessage}</p>)}
    </div>
}

export default ErrorMessage;