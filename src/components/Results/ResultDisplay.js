import React from 'react';
import { Link } from 'react-router-dom';

const ResultDisplay = () => {  
    return ( 
            <div >
                <div>
                    <h1> Restaraunt </h1>
                    <p> food type </p>
                    <p>Rating</p>
                    <img src="https://via.placeholder.com/150" alt="question mark"/>
                    <p>Address</p>
                    <p>distance</p> 
                </div>
                <Link to="/App">Redo</Link>
            </div>
        )
}

export default ResultDisplay;