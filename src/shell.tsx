import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import { useMemo } from 'react';

export default function Shell() {
    // Used to not show navbar/back button on main menu screen
    const location = useLocation();
    const isMainMenu = useMemo(() => {
        return window.location.pathname == '/';
    }, [location]);

    return (
        <>
            {!isMainMenu && <NavBar />}
            <div className="main-content">
                <Outlet />
            </div>
        </>
    );
}
