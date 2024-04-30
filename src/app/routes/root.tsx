import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "./root.scss";

const Root = () => {
    return (
        <div className="root">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
