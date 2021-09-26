import React from 'react';
import ResultDisplay from './Results/ResultDisplay';
// import {useReactRouter} from 'use-react-router'
import { useBusinessSearch } from '../API_Files/useBusinessSearch';
import { useLocation } from 'react-router';
// import { useHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'bootstrap-react';

export function Search(props) { 
    
    const location = useLocation();
    // const history = useHistory();
    const params = new URLSearchParams(location.search);
    const locationParam = params.get("find_loc");
    const radius = params.get("find_radius");
    const term = params.get("find_term");
    const [businesses] = useBusinessSearch(locationParam, radius, term);

    if (!businesses || !businesses.length) {
        return (<div style={{display: 'flex', 
        justifyContent: "center",
        alignItems: "center"}}> 

                    <img src='https://static.impression.co.uk/2018/05/loading1.gif' alt='loading' />

                    <LinkContainer to='/'>
                        <Button>Home</Button>
                    </LinkContainer>

                </div>)
    }



    return (
            <div style={{display: 'flex', 
            justifyContent: "center",
            alignItems: "center"}}>
                <ResultDisplay key={businesses.id} businesses={businesses}/>
            </div>
        )
    
}

