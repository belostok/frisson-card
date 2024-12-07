const OfferItem = ( { image, title, description, footerRef } ) => {

	const clickHandler = () => {
		footerRef.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className="f-offer-item f-offer__item">
			{image && <div className="f-offer-item__image-container img-cover" onClick={ clickHandler }>
				<img src={ image } alt={ title } className="f-offer-item__image"/>
			</div>}
			<div className="f-offer-item__text-container">
				<div className="f-offer-item__title-container">
					<h3 className="f-offer-item__title">{ title }</h3>
				</div>
				<div className="f-offer-item__description-container">
					<p className="f-offer-item__description">{ description }</p>
				</div>
			</div>
		</div>
	);
}

export default OfferItem;
