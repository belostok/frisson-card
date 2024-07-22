import QR from './QR/QR';
import Tag from './Tag';
import Title from './Title/Title';
import Feedback from './Feedback/Feedback';
import Details from './Details/Details';
import Offer from './Offer/Offer';
import imgInfo from '../images/Info-circle.svg';
import imgLightning from '../images/lightning.svg';
import Prices from './Prices/Prices';

const Content = ( { footerRef, place } ) => {

	const activityName = place.activity_type_id;
	let workTime = [];

	const parsedWorkTime = JSON.parse(place.work_time)
	if (Array.isArray(parsedWorkTime)) {
		workTime = parsedWorkTime
	} else {
		workTime.push(parsedWorkTime)
	}

	console.log(workTime)

	return (
		<div className="f-container__side f-container__side_content">

			<QR classes='f-qr_header'/>
			<Tag title="О месте" icon={ imgInfo }/>
			<Title title={place.name} subTitle={place.address} rating={place.rating_average} count={place.rating_count} cost={place.price}/>
			<Feedback/>
			<Details description={place.description} activityName={activityName} feature={place.feature} workTime={workTime} address={place.address}/>
			<Tag title="Услуги" icon={ imgLightning }/>
			<Offer footerRef={ footerRef }/>
			<Prices/>

		</div>
	);
}

export default Content;
