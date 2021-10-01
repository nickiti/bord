import React,{useState} from 'react';
import Button from "react-bootstrap/Button";

export default function PageFiller(props) {
    const [location, setLocation] = useState(props.location || '');
    const [radius, setRadius] = useState(props.radius || '');
    const [term, setTerm] = useState(props.term || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(location, radius, term);
        }
        console.log(location, radius, term);
        e.preventDefault();   
    }      


    return (
        <div>
            <h1>MEG AND NICKS GRAND ADVENTURE</h1> 
            <div style={{display:"flex", justifyContent: "center",alignItems:"center"}}>
                <form onSubmit={submit}>    
                    <div>
                        <p>
                            Where are we ?
                        </p>
                            <input type='text' name='location' onChange={(e) => setLocation(e.target.value)}/>
                        <p>
                            How far are we willing to go ?
                        </p>
                            <input type='number' name='radius' min='0' max='25' placeholder="0 to 25 mi" onChange={(e) => setRadius((e.target.value)*1609)}/>
                        <p>
                            Anything we feeling ?
                        </p>
                            <input type='text' name='term' onChange={(e) => setTerm(e.target.value)}/>
                        <p></p>
                    </div>
                </form>
            </div>
            <Button variant="primary" onClick={submit}>Randomize</Button>
        </div>
    )
};

