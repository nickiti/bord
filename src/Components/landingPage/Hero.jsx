import React from 'react'


const Hero = ({tagLine, description, mainActionText, extraActionText}) => {


    return (
            <div>
                <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 hero lg:pt-10 lg:pb-20 lg:bg-cover lg:bg-hero">
                    <div>
                        <p className="p-2 text-4xl font-bold text-center text-white lg:mx-auto lg:text-5xl ">
                            {tagLine}
                        </p>
                    </div>
                    <div>
                        <p className="p-4 pt-6 font-sans text-2xl text-white leading-10 text-center ">
                            {description}
                        </p>
                    </div>
                    <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                        <button className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-black transition-all bg-blue-100 rounded-full shadow-2xl lg:ml-5 hover:bg-blue-500 focus:outline-none ring-4 ring-black lg:ring-2 lg:font-medium ">
                            {mainActionText}
                        </button>

                        <button className="pt-3 pb-3 text-2xl font-semibold text-center text-white 
                                            transition-all rounded-full shadow-2xl lg:mr-5 hover:text-blue-900 hover:bg-blue-50 
                                            pl-11 pr-11 bg-black focus:outline-none ring-4 ring-white lg:font-medium lg:text-black
                                            lg:bg-opacity-0 lg:ring-2 lg:ring-white">
                            {extraActionText}
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Hero
