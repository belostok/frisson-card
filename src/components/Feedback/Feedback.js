import FeedbackItem from './FeedbackItem';
import imgFrisson from '../../images/avatar_small.svg';
import imgUser from '../../images/user-avatar.png';
import imgNoFeedback from '../../images/no-feedback.svg';
import {urlForImageId} from "../../api";

const Feedback = ({ reviews = [] }) => {
	/*const items = [
		// {
		// 	id: 'feed1',
		// 	image: imgFrisson,
		// 	name: 'Frisson',
		// 	date: '4 месяца назад',
		// 	feedback: 'Прекрасное пребывание! Безупречное обслуживание, уютные номера и отличные удобства. Мы обязательно вернёмся сюда, и ещё не раз. Рекомендуем'
		// },
		// {
		// 	id: 'feed2',
		// 	image: imgUser,
		// 	name: 'Марина Клюковкина',
		// 	date: '3 дня назад',
		// 	feedback: 'Внезапно, некоторые особенности внутренней политики освещают чрезвычайно интересные картины в целом, однако конкретные меры принимать мы не можем'
		// }
	];*/

	return (
		<div className="f-feedback">
			<div className="f-feedback__title-container">
				<h2 className="f-feedback__title f-heading-2">Отзывы</h2>
			</div>
			{ reviews?.length ?
				<>
					<div className="f-feedback__items flex fdc">
						{ reviews.map( ( item ) => (
							<FeedbackItem
								key={ item.id }
								image={ item.image }
								name={ item.name }
								date={ item.date }
								feedback={ item.feedback }
							/>
						) )
						}
					</div>
					<div className="f-feedback__more-container flex">
						<span className="f-feedback__more">Больше отзывов в приложении Frisson.</span>
						<a href="#" className="f-feedback__more-link f-hover">Посмотреть</a>
					</div>
				</> :
				<>
					<div className="f-feedback__empty-container img-contain">
						<img src={ imgNoFeedback } alt=""/>
					</div>
					<div className="f-feedback__more-container flex">
						<span className="f-feedback__empty-text">У активности пока нет ни одного отзыва.</span>
					</div>
				</>
			}
		</div>
	);
}

export default Feedback;
