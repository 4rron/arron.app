import './card.scss'

export type CardProps = {
    title: string
    subtitle: string
    aside?: string
    keypoints: Array<string>
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subtitle}</div>
            {props.aside && <div className="aside">{props.aside}</div>}
            <ul className="key-points">
                {props.keypoints.map((point, index) => {
                    return (
                        <li key={index}>
                            <hr />
                            {point}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
