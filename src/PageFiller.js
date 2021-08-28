import { getElementError } from '@testing-library/react'
import React from 'react'

export default function PageFiller() {
    return (
        <div>
            <p>
                Yay for being indecisive !
            </p>
            <p>
                Where are we ?
            </p>
            <input type='text' name='location'/>
            <p>
                How far are we willing to go ?
            </p>
            <input type='range' name='distance' min='0' max='50'/>
            <p>
                Anything we feeling ?
            </p>
                <input type='text' name='category'/>
        </div>
    )
}

