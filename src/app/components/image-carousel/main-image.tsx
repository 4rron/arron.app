import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import {
    addImageCarouselImage,
    selectImageCarouselCurrentImage,
    selectImageCarouselImages,
    setImageCarouselCurrentImage,
    setImageCarouselImages,
} from "../../reducers/image-carousel-slice";
import goose from "./images/Goose.jpeg";
import emily from "./images/Wedding-Emily.jpeg";
import mitch from "./images/Wedding-Mitch.jpeg";
import wives from "./images/Wedding-Wives.jpeg";
import maddie from "./images/Wedding-Maddie.jpeg";
import hannah from "./images/Wedding-Hannah.jpeg";
import { useEffect } from "react";
import { current } from "@reduxjs/toolkit";
import ImageCarouselDot from "./image-carousel-dot";

const ImageCarouselMainImage = () => {
    const dispatch = useDispatch();
    const currentImage = useAppSelector(selectImageCarouselCurrentImage);
    const imageArray = useAppSelector(selectImageCarouselImages);
    useEffect(() => {
        dispatch(
            setImageCarouselImages([
                { file: goose, iso: 800, aperture: 3.2, shutter: "1/200" },
                { file: emily, iso: 400, aperture: 2.8, shutter: "1/60" },
            ])
        );
    }, []);

    const onIncrement = () => {
        dispatch(setImageCarouselCurrentImage(currentImage + 1));
    };

    const onDecrement = () => {
        if (currentImage === 0) {
            dispatch(setImageCarouselCurrentImage(imageArray!.length - 1));
        } else {
            dispatch(setImageCarouselCurrentImage(currentImage - 1));
        }
    };

    if (imageArray) {
        return (
            <div className="image-carousel">
                <button onClick={onDecrement}>Left</button>
                <picture>
                    <source media="(max-width: 766px)" />
                    <img
                        src={imageArray[currentImage].file}
                        alt="decorative"
                        width="720px"
                        height="auto"
                    />
                </picture>
                <button onClick={onIncrement}>Right</button>
                <div className="image-carousel-dots">
                    {imageArray.map((element) => {
                        if (imageArray.indexOf(element) === currentImage) {
                            return <ImageCarouselDot selected={true} />;
                        } else {
                            return <ImageCarouselDot selected={false} />;
                        }
                    })}
                </div>
            </div>
        );
    } else {
        return <p>Error loading images.</p>;
    }
};

export default ImageCarouselMainImage;
