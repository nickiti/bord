import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";

export function ResultDisplay() { 
    
    return ( 
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"}} >
                <div>
                    <h1> Restaraunt </h1>
                    <p> food type </p>
                    <p>Rating</p>
                    <img src="https://via.placeholder.com/150" alt="question mark"/>
                    <p>Address</p>
                    <p>distance</p> 
                </div>
                <LinkContainer to="/">
                    <Button variant='primary'>Redo</Button>
                </LinkContainer>
            </div>
        )

}
export default ResultDisplay;