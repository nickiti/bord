import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export default function PageFiller(props) {
    const [location, setLocation] = useState(props.location || '');
    const [distance, setDistance] = useState(props.distance || '');
    const [category, setCategory] = useState(props.category || '');

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(location, distance, category);
        }
        console.log(location, distance, category);
    }
    


    return (
            <form onSubmit={submit}>    
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
                    <input type='number' name='distance' min='0' max='50' placeholder="0 to 50 mi" onChange={(e) => setDistance(e.target.value)}/>
                    <p>
                        Anything we feeling ?
                    </p>
                    <input type='text' name='category' onChange={(e) => setCategory(e.target.value)} />
                    <Link to='/components/Results/ResultDisplay' onClick={submit}>Randomize</Link>
                </div>
            </form>
    )
};
