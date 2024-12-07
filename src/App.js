import {useEffect, useState} from 'react';
import './App.scss';
import PlaceCard from "./pages/PlaceCard";
import {fetchAndSetData, getPlaceByID, getReviewsByPlaceID, urlForImageId} from "./api";
import {useParams} from "react-router-dom";

function App() {
	let params = useParams();

	const [place, setPlace] = useState(null);
	const [reviews, setReviews] = useState(null);

	useEffect(() => {
		fetchAndSetData(getPlaceByID(params.id), setPlace)
		fetchAndSetData(getReviewsByPlaceID(params.id), setReviews)

	}, [params.id]);

	if (!place || !reviews) {
		return <>Loading...</>
	}

	const mappedReviews = reviews?.map((v) =>
		({
			id: v.id,
			image: urlForImageId(v.user_avatar_id),
			name: v.user_name,
			date: v.date,
			feedback: v.text,
		})
	)

	return <PlaceCard place={place} reviews={mappedReviews}/>;
}

export default App;
