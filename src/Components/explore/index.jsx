import React,{useState,useEffect} from 'react'
import {usePopularMovie} from '../../hooks/usePopularMovie'
import {useBusinessSearch} from '../../hooks/useBusinessSearch'

const ExplorePage = () => {
    let [movies] = usePopularMovie()
    let location = 'arlington'
    let popular = 'popular'

    // let [businesses] = useBusinessSearch(location, popular);


    return (
        <div>
            <div>
                <h1 className='flex justify-center items-center mt-10 text-3xl'>Popular Movies</h1>
                <div className='row'>
                    <div className='row-posters'>
                        {movies.map((movie, i)=>{
                            return(
                            <img
                                key={i}
                                className="row-movie"
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                            />)
                            })}
                    </div>
                </div>
            </div>
            {/* <div>
                <h1 className='flex justify-center items-center mt-10 text-3xl'>Popular Restaraunts</h1>
                <div className='row'>
                    <div className='row-posters'>
                        {businesses.map((business, i) => {
                            return(
                                <img key={i} className='row-movie' src={business.image_url}/>
                            )
                        })}

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ExplorePage