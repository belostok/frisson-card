import {useRef, useState} from "react";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import {isMobile} from "../helpers/helpers";
import GalleryPopup from "../components/GalleryPopup";
import {urlForImageId} from "../api";
import imgEmpty from '../images/placeholder@2x.png';

function PlaceCard({place, reviews = []}) {
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

    let images = place.image_ids?.map((id) => {
        return urlForImageId(id);
    });

    if (!images?.length) {
        images = [imgEmpty]
    }

    const activityName = place.activity_type_name || place.activity_type_id;
    let workTime = [];
    const parsedWorkTime = JSON.parse(place.work_time)

    if (Array.isArray(parsedWorkTime)) {
        workTime = parsedWorkTime
    } else {
        workTime.push(parsedWorkTime ?? "Не указано")
    }

    const discounts = place.discounts.map(v => ({
        id: v.id,
        image: urlForImageId(v.image_id),
        title: v.name,
        description: v.short_description || v.full_description || ""
    }));

    const amenities = place.amenities.map(v => ({
        id: v.id,
        time: v.name,
        description: v.description,
        price: v.cost_value + v.cost_currency,
    }));

    return (
        <>
            <main className="f-main f-outer">
                <div className="f-wrapper">
                    <div className="f-container flex jcspb">
                        <Content place={place} reviews={reviews} footerRef={footerRef} activityName={activityName}
                                 workTime={workTime} amenities={amenities} discounts={discounts}/>
                        <Gallery images={images} onSlideClick={handleSlideClick}/>
                    </div>
                </div>
            </main>

            <Footer ref={footerRef}/>

            {isPopupOpen && isMobile &&
                <GalleryPopup
                    activeSlideIndex={activeSlideIndex}
                    onClose={closePopup}
                    images={images}
                />
            }
        </>
    );
}


export default PlaceCard;
