import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";
import Rating from '../Rating.jsx'

export function MovieResults(props) {  
    let b = ''

    if (!props.movies || !props.movies.length) {
        return (<div>HOWDY IT DID NOT LOAD</div>);
    } 

    if (props.movies.length > 0){
        let b = props.movies[Math.floor(Math.random() * props.movies.length)];
        let title = b.title;
        let overview = b.overview;
        let date = b.release_date;
        let rating = b.vote_average;
        let img = `https://image.tmdb.org/t/p/w500/${b.poster_path}`
        return ( 
                    <div className='flex justify-center items-center mt-auto'>
                        <div className="flex flex-col md:flex-row md:max-w-xl justify-center items-center rounded-lg bg-white shadow-lg ">
                                <img src={img} style={{height:300,width:400}} alt='poster'/>
                                <div className="flex flex-col justify-start items-center content-center pl-4 pr-4">
                                    <h5 className="text-gray-900 font-bold p-6">{title}</h5>
                                    <div className="text-gray-700 text-base">
                                        {overview} <br/>
                                    </div>
                                    <Rating rating={rating}/><br/>
                                <div className='flex'>
                                    <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded pl-4 pr-4' onClick={() => window.location.reload(false)}>Redo</button>
                                    <LinkContainer to="/movies" className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>
                                        <Button>Start Over</Button>
                                    </LinkContainer>
                            </div>
                        </div>
                </div>
                </div>
            )
   }



    return ( 
        <>
            <div className='relative right-80 bottom-40'>
                <LinkContainer to="/movies" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    <Button variant='primary' >Start Over</Button>
                </LinkContainer>
            </div>

                <div>
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <p>It didn't load correctly try again...</p>
                    </div>
            </div>
            </>
        )

}
export default MovieResults;