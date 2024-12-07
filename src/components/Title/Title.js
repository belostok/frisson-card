import TitleTags from './TitleTags';
import TitleRating from './TitleRating';
import TitleCost from './TitleCost';
import TitleDistance from './TitleDistance';

const Title = ({title, subTitle, rating, count, cost}) => {
	return (
		<div className="f-title">
			<TitleTags/>
			<div className="f-title__title-container">
				<h1 className="f-title__title">{title}</h1>
			</div>
			<div className="f-title__description-container">
				<p className="f-title__description">{subTitle}</p>
			</div>
			<div className="f-title__footer flex fwrap aic">
				<div className="f-title__rating-container flex fwrap aic">
					<TitleRating rating={ rating } count={ count }/>
				</div>
				<div className="f-title__cost-container flex fwrap aic">
					<TitleCost
						cost={ cost } // Can be 1-4
					/>
				</div>
			</div>
		</div>
	);
}

export default Title;
