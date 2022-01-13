import React from 'react'
import Button from 'react-bootstrap/Button'

const MovieSearchForm = () => {
    return (
        <div className='card page-filler__form-container' style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
            <h2>Let us find you a movie</h2>
            <form>    
                <div>
                    <input type='text' name='location' className='form-input' placeholder='Genre'/>
                    <br/>
                    <input type='text' name='term' className='form-input' placeholder='age'/>
                </div>
            </form>
            <div className='form-input'><Button variant="primary" >Randomize</Button></div>
        </div>
    )
}

export default MovieSearchForm
