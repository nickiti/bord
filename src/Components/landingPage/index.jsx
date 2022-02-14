import React from 'react'
import Hero from './Hero'
import Step from './Step'
import BottomLead from './BottomLead'
import burntout from '../../assets/burntout.png'
import couple from '../../assets/couple.png'

const LandingPage = () => {
    const data = {
        hero:{
            tagLine: 'Always bord?',
            description: 'Let us get you inspiration for tonight',
            mainActionText: 'Try it out',
            extraActionText: 'Learn more',
        },

        step1:{
            title: "What we can do for you",
            heading: "Get movie suggestions or events and restaraunts nearby!",
            description: "Random suggestions? or you can explore!",
            img: burntout,
            alternate:"true"

        },

        step2:{
            title: "What are you into?",
            heading:"Prefer to stay in?",
            description: "Find something every kind of night",
            img: couple,
            alternate:"false"

        },

        bottomLead:{
            tagLine: 'Have a great night out',
            mainActionText: 'Try it out',
            extraActionText: 'How to support',
        }
    }


    return (
            <div className='h-fit'>
                    <Hero   
                        appType={data.hero.appType}
                        tagLine={data.hero.tagLine}
                        description={data.hero.description}
                        mainActionText={data.hero.mainActionText}
                        extraActionText={data.hero.extraActionText}
                    />
                    <hr/>

                     <Step
                        title={data.step1.title}
                        heading={data.step1.heading}
                        description={data.step1.description}
                        img={data.step1.img}
                        alternate={true}
                    />
                    <Step
                        title={data.step2.title}
                        heading={data.step2.heading}
                        description={data.step2.description}
                        img={data.step2.img}
                        alternate={false}
                    
                    />

                    <BottomLead
                        tagLine = {'Have a great night out'}
                        mainActionText = {'Try it out'}
                        extraActionText = {'How to support'}
                    
                    />

            </div>
    )
}

export default LandingPage
