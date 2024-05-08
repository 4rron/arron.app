import './icon.scss';

export type IconBackProps = {
    fillColor: string;
    strokeColor: string;
    strokeWidth: string;
    size: string;
};

export default function IconBack(props: IconBackProps) {
    //Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                id="OuterCircle"
                d="M20,1.011C30.48,1.011 38.989,9.52 38.989,20C38.989,30.48 30.48,38.989 20,38.989C9.52,38.989 1.011,30.48 1.011,20C1.011,9.52 9.52,1.011 20,1.011ZM17.718,21.617L30.59,21.617L30.59,18.383L17.718,18.383L17.718,13.532L9.41,20L17.718,26.468L17.718,21.617Z"
                fill={props.fillColor}
                stroke={props.strokeColor}
                strokeWidth={props.strokeWidth}
            />
            <g id="Arrow" transform="matrix(0.72504,0,0,1,0.0680387,1.19102)">
                <path
                    d="M23.609,19.811L23.609,22.817L12.15,18.809L23.609,14.801L23.609,17.807L41.363,17.807L41.363,19.811L23.609,19.811Z"
                    fill={props.strokeColor}
                    stroke={'none'}
                    strokeWidth={0}
                />
            </g>
        </svg>
    );
}
