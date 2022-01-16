import React from 'react';

const Step = ({title, heading , description, img, alternate}) => {
    const row = "lg:items-center lg:flex lg:flex-row lg:justify-end";
    const rowReverse = "lg:items-center lg:flex lg:flex-row-reverse lg:justify-center";


    return (
        <div className={alternate ? row : rowReverse}>
            <div id="section" style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-black-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
                <div> 
                    <p>{title}</p> 
                </div>
                
                <div>
                    {heading}
                </div>

                <div>
                    {description}
                </div>

                <div>{img}</div>
            </div>
        </div>
    )
}

export default Step