import './icon-back.scss'

export type IconBackProps = {
    fillColor: string
    strokeColor: string
    strokeWidth: string
    size: string
}

export default function IconBack(props: IconBackProps) {
    //Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g data-name="Layer 2" id="Layer_2">
                <g
                    data-name="E421, Back, buttons, multimedia, play, stop"
                    id="E421_Back_buttons_multimedia_play_stop"
                >
                    <circle
                        className="cls-1"
                        fill={props.fillColor}
                        stroke={props.strokeColor}
                        strokeWidth={props.strokeWidth}
                        cx="256"
                        cy="256"
                        r="246"
                        z="1"
                    />

                    <line
                        className="cls-1"
                        fill={props.fillColor}
                        stroke={props.strokeColor}
                        strokeWidth={props.strokeWidth}
                        x1="352.26"
                        x2="200.43"
                        y1="256"
                        y2="256"
                        z="0"
                    />

                    <polyline
                        fill={props.strokeColor}
                        className="cls-1"
                        points="223.91 202.52 170.44 256 223.91 309.48"
                        z="0"
                    />
                </g>
            </g>
        </svg>
    )
}
