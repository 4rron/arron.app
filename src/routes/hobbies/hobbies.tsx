import Card from '../../components/card/card';
import Keypoints from '../../utils/key-points.json';

export default function Hobbies() {
    return (
        <div className="hobbies">
            <h1>Hobbies</h1>
            <Card
                title="Photography"
                subtitle=""
                aside="Real Estate | Landscape | Automotive | Portrait | Wildlife"
                keypoints={Keypoints.hobbies.photography}
            />
            <Card
                title="Automotive"
                subtitle=""
                aside="Yes, I played 'Need for Speed' as a kid"
                keypoints={Keypoints.hobbies.automotive}
            />
            <Card
                title="Technology"
                subtitle=""
                aside="I know, I know, but hear me out"
                keypoints={Keypoints.hobbies.technology}
            />
            <Card
                title="Odds & Ends"
                subtitle=""
                aside="There's a lot here..."
                keypoints={Keypoints.hobbies.odds}
            />
        </div>
    );
}
