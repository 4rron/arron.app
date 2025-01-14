import { useMemo } from 'react';
import BackButton from '../back-button/back-button';
import './nav-bar.scss';
import { useLocation } from 'react-router-dom';
import HomeButton from '../home-button/home-button';

export default function NavBar() {
    const location = useLocation();

    // Hide home button on main menu
    const isMainMenu = useMemo(() => {
        return window.location.pathname == '/';
    }, [location, window]);

    // Hide back button if no history or on main menu
    const hasNoHistory = useMemo(() => {
        return history.length == 0 || window.location.pathname == '/';
    }, [history, location]);

    return (
        <div className="nav-bar">
            {!hasNoHistory && <BackButton />}
            {!isMainMenu && <HomeButton />}
        </div>
    );
}
