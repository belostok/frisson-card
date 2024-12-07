import DetailsItem from './DetailsItem';

const Details = ({ description, activityName, feature, workTime, address, lat, long }) => {

	const items = [
		{
			id: 'd1',
			title: 'Описание',
			description: <p>{description}</p>
		},
		{
			id: 'd2',
			title: 'Направление',
			description: <p>{activityName}</p>
		},
		{
			id: 'd3',
			title: 'Особенности',
			description: <p>{feature || "Не указано"}</p>
		},
		{
			id: 'd4',
			title: 'Часы работы',
			description: <ul>{workTime.map(v => <li>{v}</li>)}</ul>
		},
		{
			id: 'd5',
			title: 'Адрес',
			description: <p>{address}</p>,
			button: { link: `https://yandex.ru/maps/?rtext=~${lat}%2C${long}`, name: 'Проложить маршрут' }
		}
	]

	return (
		<div className="f-details">
			<div className="f-details__items">
				{ items && items.map( ( item ) => (
					<DetailsItem
						key={ item.id }
						title={ item.title }
						description={ item.description }
						button={ item.button }
					/>
				) )
				}
			</div>
		</div>
	);
}

export default Details;
