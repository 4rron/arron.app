interface ImageCarouselProps {
    selected: boolean;
}

const ImageCarouselDot = (props: ImageCarouselProps) => {
    if (props.selected) {
        return (
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="White" />
            </svg>
        );
    } else {
        return (
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="Grey" />
            </svg>
        );
    }
};

export default ImageCarouselDot;
