import React from 'react'
import { useHistory } from 'react-router';
import EventForm from './EventForm';

const EventSearch = () => {
    const history = useHistory();

    function search(event) {

        const encodedEvent = encodeURI(event);

        history.push(`events/search?find_event=${encodedEvent}`);

    } 
    
    return (
        <div className='flex justify-center items-center mt-auto'>
            <EventForm search={search}/>
        </div>
    )
}

export default EventSearch