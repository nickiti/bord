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
            <form>    
                <div>
                    <p>
                        Yay for being indecisive !
                    </p>
                    <p>
                        Where are we ?
                    </p>
                        <input type='text' name='location' onChange={(e) => setLocation(e.target.value)}/>
                    <p>
                        How far are we willing to go ?
                    </p>
                        <input type='number' name='radius' min='0' max='50' placeholder="0 to 50 mi" onChange={(e) => setRadius(e.target.value)}/>
                    <p>
                        Anything we feeling ?
                    </p>
                        <input type='text' name='term' onChange={(e) => setTerm(e.target.value)}/>
                    <p></p>
                </div>
            </form>
            <Button variant="primary" onClick={submit}>Randomize</Button>
        </div>
    )
};

