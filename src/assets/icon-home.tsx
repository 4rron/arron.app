import './icon.scss';

export type IconHomeProps = {
    fillColor: string;
    strokeColor: string;
    strokeWidth: string;
    size: string;
};

export default function IconHome(props: IconHomeProps) {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M20,1.011C30.48,1.011 38.989,9.52 38.989,20C38.989,30.48 30.48,38.989 20,38.989C9.52,38.989 1.011,30.48 1.011,20C1.011,9.52 9.52,1.011 20,1.011ZM26.757,16.116L20,11.041L13.243,16.116L13.243,26.577L26.757,26.577L26.757,16.116Z"
                fill={props.fillColor}
                stroke={props.strokeColor}
                strokeWidth={props.strokeWidth}
            />
            <g transform="matrix(1.0422,0,0,0.822654,-0.843918,4.79036)">
                <path
                    d="M26.483,13.767L26.483,26.483L13.517,26.483L13.517,13.767L20,7.598L26.483,13.767Z"
                    fill={props.strokeColor}
                    stroke="none"
                    strokeWidth={0}
                />
            </g>
        </svg>
    );
}
