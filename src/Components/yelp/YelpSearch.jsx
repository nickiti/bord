import React from 'react';
import ResultDisplay from './ResultDisplay';
import { useBusinessSearch } from '../../API_Files/useBusinessSearch';
import { useLocation } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'bootstrap-react';


export function Search(props) { 
    
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let locationParam = params.get("find_loc");
    let radius = params.get("find_radius");
    let term = params.get("find_term");
    let [businesses] = useBusinessSearch(locationParam, radius, term);
    

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
            alignItems: "center"}} className='root'>
                <ResultDisplay key={businesses.id} businesses={businesses}/>
            </div>
        )
    
}

