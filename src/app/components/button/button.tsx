import "./button.scss";

export interface ButtonProps {
    children: string;
    onClick: Function;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="aButton" onClick={() => props.onClick()}>
            {props.children}
        </button>
    );
}
