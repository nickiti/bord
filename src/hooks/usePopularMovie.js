import {useState, useEffect} from 'react'
import * as tmdb from '../API_Files/getPopularMovies';

export function usePopularMovie() {
    const [movies,setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const rawData = await tmdb.get();
                const resp = await rawData.json();
                setMovies(resp.results)
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [movies] );
    
    return [movies]
}
