import PricesItem from './PricesItem';

const Prices = ({amenities}) => {
	return (
		<div className="f-prices">
			<div className="f-prices__title-container">
				<h2 className="f-prices__title f-heading-2">Услуги и цены</h2>
			</div>
			<div className="f-prices__items flex fdc">
				{ amenities.map( ( item ) => (
					<PricesItem
						key={ item.id }
						time={ item.time }
						description={ item.description }
						price={ item.price }
					/>
				) )
				}
			</div>
		</div>
	);
}

export default Prices;
