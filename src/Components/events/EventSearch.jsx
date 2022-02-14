import React, { useState } from 'react'
import EventResults from './EventResults'
import { useLocation } from 'react-router';

export default function EventSearch() {
    let location = useLocation()
    let params = new URLSearchParams(location.search);
    let eventParam = params.get("find_event");
    const [events, setEvents] = useState()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const rawData = await api.get(eventParam);
                const resp = await rawData.json();
                setEvents(resp)
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [events] );


    return (
        <div>
            <EventResults events={events}/>
        </div>
    )
}
