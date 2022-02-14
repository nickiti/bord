import { useState, useEffect } from "react";
import * as api from '../API_Files/getMovie';

export function useMovieSearch(title) {
    let [searchTitle, setSearchTitle] = useState(title);
    let [movieId, setMovieId] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            let rawData = await api.get(searchTitle)
            let resp = await rawData.json()
            setMovieId(resp.results[0].id)
        };
        fetchData();
    }, [searchTitle]);

    return movieId

}