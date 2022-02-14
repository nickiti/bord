import React from 'react';
import { useHistory } from 'react-router';
import YelpForm from './YelpForm';


export default function FoodSearch() {
    
    const history = useHistory();

    function search(location, term) {

        const encodedLocation = encodeURI(location);
        const encodedTerm = encodeURI(term);

        history.push(`food/search?find_loc=${encodedLocation}&find_term=${encodedTerm}`);

    } 


        return ( 
            <div className='flex justify-center items-center mt-auto'>
                <YelpForm search={search}/>
            </div>) 
            

}
