import { Link } from 'react-router-dom'
import BackButton from '../../components/back-button/back-button'

export default function Ritual() {
    return (
        <div className="Ritual">
            <BackButton targetUrl="/projects" />
            <h1>The Ritual</h1>
            <Link to="https://peck2703.itch.io/the-ritual">Itch.io</Link>
        </div>
    )
}
