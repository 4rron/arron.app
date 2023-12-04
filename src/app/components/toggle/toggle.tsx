import "./toggle.scss";

export interface ToggleProps {
    id: string;
    checked: boolean;
    textOn?: string;
    textOff?: string;
}

export default function Toggle(props: ToggleProps) {
    return (
        <div className="toggle">
            <input
                type="checkbox"
                className="toggle-checkbox"
                name={props.id}
            ></input>
            <label className="toggle-label" htmlFor={props.id}>
                <span
                    className="toggle-inner"
                    data-yes={props.textOn ?? "On"}
                    data-no={props.textOff ?? "Off"}
                />
                <span className="toggle-switch" />
            </label>
        </div>
    );
}
