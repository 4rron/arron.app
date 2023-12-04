import Header from "../components/header/header";
import Logo from "../components/logo";
import "./landing.scss";
import Button from "../components/button/button";

const Landing = () => {
    function onEnter() {
        console.log("onEnter");
    }
    return (
        <div className="landing">
            <Header />
            <div className="content">
                <Logo />
                <h1>Arron.app</h1>
                <h2>Where creativity and critical thinking collide</h2>
                <Button onClick={onEnter}>Enter</Button>
            </div>
        </div>
    );
};

export default Landing;
