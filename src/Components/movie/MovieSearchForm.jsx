import React, {useState} from 'react'

export default function MovieSearchForm(props) {
    const [title, setTitle] = useState('');
    
    function submit(e) {
        props.search(title);
        console.log(title);
        e.preventDefault();   
    }    

    return (
        <div className='flex justify-center items-center card page-filler__form-container h-fit pt-10 pb-10' >
            <h1 className='text-4xl font-medium leading-tight mt-0 mb-2 text-black'>Find a movie</h1>
                    <form onSubmit={submit}>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                    Similar to
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                 onChange={(e)=>{setTitle(e.target.value)}}/>
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
}
