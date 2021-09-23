import { useState, useEffect } from "react";
import * as api from './YelpFetch';


export function useBusinessSearch(location, radius, term){
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState(location, radius, term);


    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e)
            }
        };
        fetchData();
        }, [location, radius, term] );
        return [businesses, amountResults, searchParams, setSearchParams]

}