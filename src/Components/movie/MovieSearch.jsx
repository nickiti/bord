import React from 'react'
import MovieResults from './MovieResults'
import {useMovieSearch} from '../../hooks/useMovieSearch'
import useMovieRecommendation from '../../hooks/useMovieRecommendation'
import { useLocation } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'bootstrap-react';

export function MoviesSearch() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let titleParam = params.get("find_title");
    let id = useMovieSearch(titleParam)
    let [recommendations] = useMovieRecommendation(id)

    if (!recommendations || !recommendations.length) {
        return (<div className='flex justify-center items-center'> 

                    <img src='https://static.impression.co.uk/2018/05/loading1.gif' alt='loading' />

                    <LinkContainer to='/movies'>
                        <Button>Back</Button>
                    </LinkContainer>

                </div>)
    
    }

    return (
        <div className='flex justify-center items-center mt-auto'>
            <MovieResults key={recommendations.id} movies={recommendations}/>
        </div>
    )
}