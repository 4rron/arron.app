import { Link } from 'react-router-dom';
import IconBack from '../../assets/icon-back';
import './back-button.scss';
import { useEffect, useState } from 'react';

type BackButtonProps = {
    targetUrl: string;
};

export default function BackButton(props: BackButtonProps) {
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
            <Link
                to={props.targetUrl}
                aria-label="Back Button"
                className="back-button"
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
            >
                <IconBack
                    fillColor={mouseOver ? 'white' : '#242424'}
                    strokeColor={mouseOver ? '#242424' : 'white'}
                    strokeWidth="20px"
                    size="80px"
                />
            </Link>
        </div>
    );
}
