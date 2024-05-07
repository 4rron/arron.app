import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
import KeyPoints from '../../utils/key-points.json';

export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <Link to="maxix">
                <Card
                    title="Maxix Robotics"
                    subtitle="Technical Consultant"
                    aside="Belfrost Studios"
                    keypoints={KeyPoints.maxix}
                />
            </Link>
            <Link to="ritual">
                <Card
                    title="The Ritual"
                    subtitle="Team Lead/Level Designer"
                    aside="Bit Bridge Halloween Jam 2020"
                    keypoints={KeyPoints.ritual}
                />
            </Link>
            <Link to="demons">
                <Card
                    title="Delete the Demons"
                    subtitle="Solo Developer"
                    aside="2019 Week of Whitworth Game Jam"
                    keypoints={KeyPoints.demons}
                />
            </Link>
        </div>
    );
}
