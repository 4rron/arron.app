import Logo from "../components/logo";
import "./landing.scss";
import Button from "../components/button/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    function onEnter() {
        navigate("/selection");
    }

    return (
        <div className="landing">
            <Logo />
            <h1>Arron.app</h1>
            <h2>Where creativity and critical thinking collide</h2>
            <Button onClick={onEnter}>Enter</Button>
        </div>
    );
};

export default Landing;
