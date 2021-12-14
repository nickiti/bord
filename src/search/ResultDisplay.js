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
    const tags = b.categories.map(category => (<span key={b.id + category.title}>{category.title}<br/></span>));
    const pic = b.image_url;
    const addressp1 = b.location.address1;
    const city = b.location.city;
    const state = b.location.state;
    const zip = b.location.zip_code;
    const url = b.url;
    const distance = (Math.round(b.distance/1609));

    return ( 
            <div style={{display: "flex",justifyContent: "center",alignItems: "center", backgroundColor:'#CFEEFA'}} className='card result-display__container'>
                
                <LinkContainer to="/" className='home-button'>
                    <Button variant='primary' >Start Over</Button>
                </LinkContainer>


                <div className='card result-display__card' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <h3 className='result-display__title' > {restaraunt} </h3>
                    <div style={{display: "flex", flexDirection: "horizontal"}}>
                        <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                            <p> {tags} </p>
                        </div>
                        <div style={{marginLeft: "40px"}} >
                            {addressp1} <br/>
                            {city}, {state} {zip}
                            <p>{distance} miles</p>
                        </div>
                    </div>

                    <img src={pic} width='200' height='200' alt="business_pic"/> 
                    
                    <div style={{marginTop:"25px"}}>
                        <Button onClick={() => window.location.reload(false)}>Redo</Button>
                        <a style={{marginLeft:"25px"}} href={url} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Yelp it</a>
                    </div>
                    
                   
                </div>
                

            
            </div>
        )

}
export default ResultDisplay;