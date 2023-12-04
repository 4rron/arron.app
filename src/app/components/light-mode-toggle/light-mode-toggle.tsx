import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectDarkMode, setDarkMode } from "../../reducers/theme-slice";
import "./light-mode-toggle.scss";

export default function LightModeToggle() {
    const darkMode = useAppSelector(selectDarkMode);
    const dispatch = useAppDispatch();
    function darkModeToggle() {
        dispatch(setDarkMode(!darkMode));
    }

    return (
        <div className="lightModeToggle" onClick={darkModeToggle}>
            <p className={!darkMode ? "selected" : ""}>Light</p>
            <p className={darkMode ? "selected" : ""}>Dark</p>
        </div>
    );
}
