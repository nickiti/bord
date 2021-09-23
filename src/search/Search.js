import React from 'react';
import ResultDisplay from './Results/ResultDisplay';
// import {useReactRouter} from 'use-react-router'
// import { useBusinessSearch } from '../API_Files/useBusinessSearch';

export function Search() { 
    
    
    // const {location,history} = useReactRouter();
    // const params = new URLSearchParams(location.search);
    // const locationParam = params.get('find_loc');
    // const radius = params.get('find_radius');
    // const term = params.get('find_desc');
    // const [businesses, amountResults, searchParams, performSearch] = useBusinessSearch(locationParam, radius, term);
  
   
    return (
            <div>
                <ResultDisplay /*businesses={businesses} amountResults={amountResults} searchParams={searchParams} performSearch={performSearch}*/ />
            </div>
        )
    
}

