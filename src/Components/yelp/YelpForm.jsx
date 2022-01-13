import React,{useState} from 'react';
import Button from "react-bootstrap/Button";


export default function YelpForm(props) {
    let [location, setLocation] = useState(props.location || '');
    let [radius, setRadius] = useState(props.radius || '');
    let [term, setTerm] = useState(props.term || '');
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    if (location === 'Current location'){
        if (!navigator.geolocation) {
            console.log('The browser does not accept Geolocation')
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            }, () => {
            console.log('Geolocation was successful')
            console.log(lat)
            console.log(lng)
            });
            location = (lat + `,` + lng)
        }
    }


    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(location, radius, term);
        }

        console.log(location, radius, term);
        e.preventDefault();   
    }      


    return (
            <div className='card page-filler__form-container' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <h2>Find a place to eat</h2>
                    <a href='https://cors-anywhere.herokuapp.com/corsdemo'>Click here to start server</a>
                    <form onSubmit={submit}>    
                        <div>
                            <input type='text' name='location' className='form-input' onChange={(e) => setLocation(e.target.value)} placeholder='Where are we?'/>
                            <br/>
                            <input type='number' name='radius' className='form-input' min='0' max='25' placeholder="0 to 25 mi" onChange={(e) => setRadius((e.target.value)*1609)}/>
                            <br/>
                            <input type='text' name='term' className='form-input' onChange={(e) => setTerm(e.target.value)} placeholder='Craving anything?'/>
                        </div>
                    </form>
                <div className='form-input'><Button variant="primary" onClick={submit}>Randomize</Button></div>
            </div>
    )
};

