import { useState, useEffect } from "react";
import * as api from '../API_Files/getRecommendedMovie';

export default function useMovieRecommendation(id) {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies([]);
        const fetchData = async () => {
            let rawData = await api.get(id)
            let resp = await rawData.json()
            setMovies(resp.results)
        };
        fetchData();
    }, [id] );

    return [movies];

}