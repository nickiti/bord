import React from 'react'
import PageFiller from './PageFiller';
import ResultDisplay from './Results/ResultDisplay'

function RandomizeButton() {
    const [isShow, setIsShow] = React.useState(false);
    const [noShow, setNoShow] = React.useState(true);

    const handleClick = () => {
        setIsShow(!isShow);
        setNoShow(!noShow);
    };

        return (
            <>
                {noShow ?
                <PageFiller/>
                : 
                    <></>
                }
                {isShow ?
                <ResultDisplay/>
                : 
                    <></>
                }
                <button onClick={handleClick}>Randomize</button>
            </>
    
    );
}

export default RandomizeButton
