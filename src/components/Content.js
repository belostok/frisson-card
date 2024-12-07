import QR from './QR/QR';
import Tag from './Tag';
import Title from './Title/Title';
import Feedback from './Feedback/Feedback';
import Details from './Details/Details';
import Offer from './Offer/Offer';
import imgInfo from '../images/Info-circle.svg';
import imgLightning from '../images/lightning.svg';
import Prices from './Prices/Prices';

const Content = ( { footerRef, place, reviews, activityName, workTime, amenities, discounts } ) => {
	const showOffers = discounts?.length > 0;
	const showAmenities = amenities?.length > 0;

	return (
		<div className="f-container__side f-container__side_content">

			<QR classes='f-qr_header'/>
			<Tag title="О месте" icon={ imgInfo }/>
			<Title title={place.name} subTitle={place.address} rating={place.rating_average} count={place.rating_count} cost={place.price}/>
			<Feedback reviews={reviews} />
			<Details description={place.description} activityName={activityName} feature={place.feature} workTime={workTime} address={place.address} lat={place.latitude} long={place.longitude}/>
			{(!showOffers && !showAmenities) ? <></> : <Tag title="Услуги" icon={ imgLightning }/>}
			{showOffers ? <Offer footerRef={ footerRef } discounts={discounts}/> : <></>}
			{showAmenities ? <Prices amenities={amenities}/> : <></>}

		</div>
	);
}

export default Content;
