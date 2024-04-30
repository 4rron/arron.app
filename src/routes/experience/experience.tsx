import BackButton from '../../components/back-button/back-button'
import Card from '../../components/card/card'
import KeyPoints from '../../utils/key-points.json'

export default function Experience() {
    return (
        <div className="experience">
            <BackButton targetUrl="/" />
            <h1>Experience</h1>
            <Card
                title="Genesys Telecommunications"
                subtitle="Software Engineer"
                keypoints={KeyPoints.genesys}
            />
            <Card
                title="Solontek"
                subtitle="UI Engineer"
                keypoints={KeyPoints.solontek}
            />
            <Card
                title="UPMC HealthPlan Insurance Division"
                subtitle="Software Engineer"
                keypoints={KeyPoints.upmc}
            />
            <Card
                title="Belfrost Studios - Maxix Robotics"
                subtitle="Technical Consultant"
                keypoints={KeyPoints.maxix}
            />
        </div>
    )
}