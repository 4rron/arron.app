import { Link } from 'react-router-dom'
import BackButton from '../../components/back-button/back-button'

export default function Maxix() {
    return (
        <div className="maxix">
            <BackButton targetUrl="/projects" />
            <h1>Maxix Robotics</h1>
            <Link to="https://store.steampowered.com/app/2289120/Maxix_Robotics/">
                Steam Page
            </Link>
        </div>
    )
}
