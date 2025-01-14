import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
import KeyPoints from '../../utils/key-points.json';

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="card-collection">
                <Link to="https://store.steampowered.com/app/2289120/Maxix_Robotics/">
                    <Card
                        title="Maxix Robotics"
                        subtitle="Technical Consultant"
                        aside="Belfrost Studios"
                        keypoints={KeyPoints.maxix}
                    />
                </Link>
                <Link to="https://peck2703.itch.io/the-ritual">
                    <Card
                        title="The Ritual"
                        subtitle="Team Lead/Level Designer"
                        aside="Bit Bridge Halloween Jam 2020"
                        keypoints={KeyPoints.ritual}
                    />
                </Link>
                <Link to="https://air272.itch.io/delete-the-demons">
                    <Card
                        title="Delete the Demons"
                        subtitle="Solo Developer"
                        aside="2019 Week of Whitworth Game Jam"
                        keypoints={KeyPoints.demons}
                    />
                </Link>
            </div>
        </div>
    );
}
