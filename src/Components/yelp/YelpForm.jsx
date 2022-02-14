import React,{useState} from 'react';


export default function YelpForm(props) {
    const [location, setLocation] = useState('');
    const [term, setTerm] = useState('');  
    const [loading, setLoading] = useState(false) 

    function getPosition(){
            setLoading(true)
            navigator.geolocation.getCurrentPosition((pos) => {
                setLocation(`${pos.coords.latitude},${pos.coords.longitude}`)
                setLoading(false)
            },
                (reject) => {
                    console.error('Location services denied')
                }
            )
    }

    function submit(e) {
        if(typeof props.search === 'function') {
            props.search(location, term);
        }

        console.log(location, term);
        e.preventDefault();   
    }    


    return (
            <div className='flex justify-center items-center card page-filler__form-container h-fit pt-10 pb-10'>
                    <h1 className='text-4xl font-medium leading-tight mt-0 mb-2 text-black'>Find a place to eat</h1>
                    <a href='https://cors-anywhere.herokuapp.com/corsdemo'>Load</a>
                    <button onClick={getPosition}>
                        {loading ? 'getting location...' : 'Use Current Location'}
                    </button>
                    <br/>
                    <form onSubmit={submit} className=''>
                        <div className="md:flex md:items-center mb-6">

                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                    Location
                                </label>
                            </div>

                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={(e) => setLocation(e.target.value)} placeholder='Where are we?'/>
                            </div>

                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                    Food
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={(e) => setTerm(e.target.value)} placeholder='Craving anything?'/>
                            </div>
                        </div> 
                        
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={submit}>
                                Randomize
                            </button>
                            </div>
                        </div>

                        
                    </form>
            </div>
    )
};

