import { Link } from 'react-router-dom'
import BackButton from '../../components/back-button/back-button'

export default function Demons() {
    return (
        <div className="demons">
            <BackButton targetUrl="/projects" />
            <h1>Delete the Demons</h1>
            <Link to="https://air272.itch.io/delete-the-demons">Itch.io</Link>
        </div>
    )
}
