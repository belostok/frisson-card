const PricesItem = ( { time, description, price } ) => {

	return (
		<div className="f-prices-item f-prices__item">
			<div className="f-prices-item__text-container">
				<div className="f-prices-item__title-container">
					<h3 className="f-prices-item__title">{ time }</h3>
				</div>
				{ description &&
					<div className="f-prices-item__description-container">
						<p className="f-prices-item__description">{ description }</p>
					</div>
				}
			</div>
			<div className="f-prices-item__price-container">
				<span className="f-prices-item__price">{ price }</span>
			</div>
		</div>
	);
}

export default PricesItem;
