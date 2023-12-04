import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { Image, selectImageCarouselImages, setImageCarouselImages } from "../../reducers/image-carousel-slice";
import goose from "./images/Goose.jpeg"
import emily from "./images/Wedding-Emily.jpeg"
import mitch from "./images/Wedding-Mitch.jpeg"
import wives from "./images/Wedding-Wives.jpeg"
import maddie from "./images/Wedding-Maddie.jpeg"
import hannah from "./images/Wedding-Hannah.jpeg"
import "./image-carousel.css"

function ImageCarousel() {
    
    const dispatch = useDispatch();
    const images = useAppSelector(selectImageCarouselImages);

    const imageArray: Array<Image> = [
        {file: goose, 
        iso: 10,
        aperture: 1.8,
        shutter: "1/125" },
        {file: emily,
        iso: 400,
        aperture: 2.8,
        shutter: "1/60"}
        // emily,
        // mitch,
        // wives,
        // maddie,
        // hannah,
    ]

    if (images === undefined) {
        dispatch(setImageCarouselImages(imageArray));
    }

    return(
        <div id="image-carousel">
            {/* <img alt="test" src={goose} /> */}
            {images !== undefined && images.map((e) => {
                return(
                    <picture>
                        <source srcSet={e.file} 
                            media="(max-width: 766px)" />
                        <img key={e.file} src={e.file} alt="decorative" width="720px" height="auto" />
                    </picture>
                        
                )
            })}
            {images === undefined && <p>Images failed to load.</p>}
        </div>
    )
}

export default ImageCarousel;