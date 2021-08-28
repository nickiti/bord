import React from 'react'
import './App.css';
import PageFiller from './PageFiller'
import YelpFetch from './YelpFetch'

function App() {
  return (
    <>
    <PageFiller />
    <button onClick={(event) => { YelpFetch(event); /*YelpPrint()*/}}>Randomize</button>
    </>
  );
}

export default App;
