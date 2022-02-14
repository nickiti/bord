import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";

export function ResultDisplay(props) { 
    let b = ""
    if (!props.businesses || !props.businesses.length) {
        return (<div>HOWDY IT DID NOT LOAD</div>);
    }  
    
    if (props.businesses.length > 0){
         b = props.businesses[Math.floor(Math.random() * props.businesses.length)];
    }

    const restaraunt = b.name;
    const tags = b.categories.map(category => (<span key={b.id + category.title}>{category.title}, </span>));
    const pic = b.image_url;
    const addressp1 = b.location.address1;
    const city = b.location.city;
    const state = b.location.state;
    const zip = b.location.zip_code;
    const url = b.url;
    const distance = (Math.round(b.distance/1609));

    return ( 
                <div>
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <a href={url}>
                            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={pic} alt='business'/>
                        </a>
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{restaraunt}</h5>
                        <div className="text-gray-700 text-base mb-4">
                            {tags} <br/>
                            {addressp1} <br/>
                            {city}, {state} {zip}
                            <p>{distance} miles</p>
                        </div>
                        <div className='flex '>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.location.reload(false)}>Redo</button>
                            <a href={url} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><button target="_blank" rel="noopener noreferrer">Yelp it</button></a>
                            <LinkContainer to="/food" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                <button>Start Over</button>
                            </LinkContainer>
                        </div>
                    </div>
            </div>
            </div>
        )

}
export default ResultDisplay;