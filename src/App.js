import {useEffect, useState} from 'react';
import './App.scss';
import PlaceCard from "./pages/PlaceCard";
import {getPlaceByID} from "./api";
import {useParams} from "react-router-dom";

function App() {
	let params = useParams();

	const [place, setPlace] = useState(null);

	useEffect(() => {
		const fetchPlace = async () => {
			const result = await getPlaceByID(params.id);
			setPlace(result);
		};

		fetchPlace();
	}, []);

	return (<PlaceCard place={place}/>);
}

export default App;
