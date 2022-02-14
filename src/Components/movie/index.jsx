import React from 'react'
import { useHistory } from 'react-router';
import MovieSearchForm from './MovieSearchForm';

const MovieSearch =() => {
    const history = useHistory();

    function search(title) {

        const encodedTitle = encodeURI(title);

        history.push(`movies/search?find_title=${encodedTitle}`);

    } 
    
    return (
        <div className='flex justify-center items-center mt-auto'>
            <MovieSearchForm search={search}/>
        </div>
    )
}

export default MovieSearch
