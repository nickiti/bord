import React from 'react';
import { useHistory } from 'react-router';
import YelpForm from './YelpForm';


export default function FoodSearch() {
    
    const history = useHistory();

    function search(location, radius, term) {

        const encodedLocation = encodeURI(location);
        const encodedRadius = encodeURI(radius)
        const encodedTerm = encodeURI(term);

        history.push(`/search?find_loc=${encodedLocation}&find_radius=${encodedRadius}&find_term=${encodedTerm}`);

    } 


        return ( 
            <div style={{display: 'flex', 
                justifyContent: "center",
                alignItems: "center"}}>
                <YelpForm search={search}/>
            </div>) 
            

}
