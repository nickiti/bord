import React from 'react'
import Hero from './Hero'
import Step from './Step'
import BottomLead from './BottomLead'

const LandingPage = () => {
    const data = {
        hero:{
            tagLine: 'Not sure what to do on your special date night?',
            description: 'Try out nyte and let us pick out your night',
            mainActionText: 'Try it out',
            extraActionText: 'Learn more',
        },

        step1:{
            title: "Create an account",
            heading: "Create an account and start planning your next datenight",
            description: "An account will be created using your email",
            img:"",
            alternate:"true"

        },

        step2:{
            title: "Find your spark",
            heading:"Explore eachothers interest",
            description: "Find a common ground or let us choose a night for you",
            img:"",

        },

        bottomLead:{

        }
    }


    return (
        <>
            <div className="landing-page_container">
                <div>
                    <Hero   
                        appType={data.hero.appType}
                        tagLine={data.hero.tagLine}
                        description={data.hero.description}
                        mainActionText={data.hero.mainActionText}
                        extraActionText={data.hero.extraActionText}
                    />

                    <Step
                        title={data.step1.title}
                        heading={data.step1.heading}
                        description={data.step1.description}
                        img={data.step1.img}
                    />
                    <Step
                        title={data.step2.title}
                        heading={data.step2.heading}
                        description={data.step2.description}
                        img={data.step2.img}
                    
                    />

                    {/* <BottomLead/> */}
                </div>
            </div>
        </>
    )
}

export default LandingPage
