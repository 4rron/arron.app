import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconHome from '../../assets/icon-home';

export default function HomeButton() {
    const [mouseOver, setMouseOver] = useState(false);
    const [headerClass, setHeaderClass] = useState('header');

    function checkScroll() {
        if (window.screenY > 1) setHeaderClass('header');
        else setHeaderClass('header small');
    }

    // Attach event listener for scroll on component mount
    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', checkScroll);
        }
        watchScroll();
        // Remove listener (like componentWillUnmount)
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <div className={headerClass}>
            <NavLink
                to="/"
                aria-label="Home Button"
                className="home-button"
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
            >
                <IconHome
                    fillColor={!mouseOver ? 'white' : '#242424'}
                    strokeColor={!mouseOver ? '#242424' : 'white'}
                    strokeWidth="2px"
                    size="2.5em"
                />
            </NavLink>
        </div>
    );
}
