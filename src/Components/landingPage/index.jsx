import React from 'react'
import Hero from './Hero'
import Step from './Step'
import BottomLead from './BottomLead'

const LandingPage = () => {
    const data = {
        hero:{
            appType: 'Food app',
            tagLine: 'Why stay hungry when you can order from Bella Onojie',
            description: 'Download the bella onoje’s food app now on',
            mainActionText: 'Playstore',
            extraActionText: 'App Store',
        },

        step1:{

        },

        step2:{

        },

        step3:{

        },

        bottomLead:{

        }
    }


    return (
        <>
            <div className="landing-page_container">
                <div>
                    <Hero   appType={data.hero.appType}
                            tagLine={data.hero.tagLine}
                            description={data.hero.description}
                            mainActionText={data.hero.mainActionText}
                            extraActionText={data.hero.extraActionText}
                    />

                    {/* <div id='divider'></div>

                    <div id='faq'> What we do</div>

                    <Step/>
                    <Step/>
                    <Step/>

                    <BottomLead/> */}
                </div>
            </div>
        </>
    )
}

export default LandingPage
