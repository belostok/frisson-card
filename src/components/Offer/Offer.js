import OfferItem from './OfferItem';
import imgOffer1 from '../../images/offer-1.webp';
import imgOffer2 from '../../images/offer-2.webp';

const Offer = ( { footerRef, discounts } ) => {
	return (
		<div className="f-offer">
			<div className="f-offer__title-container">
				<h2 className="f-offer__title f-heading-2">Специальные предложения</h2>
			</div>
			<div className="f-offer__items">
				{ discounts.map( ( item ) => (
					<OfferItem
						key={ item.id }
						image={ item.image }
						title={ item.title }
						description={ item.description }
						footerRef={ footerRef }
					/>
				) )
				}
			</div>
		</div>
	);
}

export default Offer;
