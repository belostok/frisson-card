import TitleTag from './TitleTag';
import imgNew from '../../images/tag-new.svg';
import imgFrisson from '../../images/tag-frisson.svg';

const titleTags = ({ isNew = false, frissonReviewed = false }) => {
	if (!isNew && !frissonReviewed) {
		return <></>
	}
	return (
		<div className="f-title__tags flex">
			{isNew && <TitleTag image={imgNew} />}
			{frissonReviewed && <TitleTag image={imgFrisson} />}
		</div>
	);
}

export default titleTags;
