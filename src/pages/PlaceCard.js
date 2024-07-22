import {useRef, useState} from "react";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import {isMobile} from "../helpers/helpers";
import GalleryPopup from "../components/GalleryPopup";
import {urlForImageId} from "../api";


function PlaceCard({ place }) {
    const footerRef = useRef(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideClick = (index) => {
        setActiveSlideIndex(index);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    if (!place) {
        // TODO: loader
        return <></>;
    }

    let images = place.image_ids.map((id) => {
        return urlForImageId(id);
    });

    return (
        <>
            <main className="f-main f-outer">
                <div className="f-wrapper">
                    <div className="f-container flex jcspb">
                        <Content place={place} footerRef={footerRef}/>
                        <Gallery images={images} onSlideClick={handleSlideClick}/>
                    </div>
                </div>
            </main>

            <Footer ref={footerRef}/>

            {isPopupOpen && isMobile &&
                <GalleryPopup
                    activeSlideIndex={activeSlideIndex}
                    onClose={closePopup}
                />
            }
        </>
    );
}


export default PlaceCard;
