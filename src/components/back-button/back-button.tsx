import IconBack from '../../assets/icon-back';
import './back-button.scss';
import { useEffect, useState } from 'react';

export default function BackButton() {
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

    function checkKey(e: React.KeyboardEvent) {
        if (e.key == 'enter') {
            history.back();
        }
    }

    return (
        <div className={headerClass}>
            <button
                aria-label="Back Button"
                className="back-button"
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
                onClick={() => history.back()}
                onKeyDown={checkKey}
            >
                <IconBack
                    fillColor={mouseOver ? 'white' : '#242424'}
                    strokeColor={mouseOver ? '#242424' : 'white'}
                    strokeWidth="1em"
                    size="2em"
                />
            </button>
        </div>
    );
}
