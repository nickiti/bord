import React from 'react';

const Step = ({title, heading , description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end pb-10";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center pb-10";


    return (
        <div className={alternate ? row : rowReverse}>
            <div id="section" className="lg:w-2/6 lg:-ml-20 lg:-mt-10 lg:flex lg:flex-col lg:justify-center lg:items-start">
                <p className='text-4xl '> {title}</p>
                
                <p>{heading}</p>

                <p>{description}</p>
            </div>

            <div className="lg:flex lg:justify-start ml-10 lg:ml-0 lg:w-3/6 pr-20 pl-10">
                 <img className=" lg:-mt-24 lg:-mb-20" src={img} alt="phone"/>
            </div>
            
        </div>
    )
}

export default Step