import { useNavigate } from "react-router-dom";
import Button from "../components/button/button";

const TopicSelection = () => {
    const navigate = useNavigate();
    return (
        <div className="topic-selection" style={{ textAlign: "center" }}>
            <h1>Hello</h1>
            <h3>Which side of me are you interested in learning more about?</h3>
            <Button onClick={() => navigate("/left-brain")}>Left Brain</Button>
            <Button onClick={() => navigate("/right-brain")}>
                Right Brain
            </Button>
        </div>
    );
};

export default TopicSelection;
