import { Link } from 'react-router-dom';
import './home.scss';

export default function Home() {
    return (
        <div id="home">
            <h1>Arron Baker</h1>
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="mailto:hello@arron.app" target="_blank">
                    Contact
                </Link>
            </div>
        </div>
    );
}
