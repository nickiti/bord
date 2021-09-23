import React from 'react'
import './App.css';
import PageFiller from './PageFiller';
import {
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Search} from './search/Search';
import useReactRouter from 'use-react-router';


function App() {

    const {history} = useReactRouter();

    function search(location, radius, term) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    const encodedRadius = encodeURI(radius)
    history.push(`/search?find_desc=${encodedTerm}&find_radius=${encodedRadius}&find_loc=${encodedLocation}`);
    } 

    return (
          <Switch>
            <Route path="/search" component={Search}/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"}}>
              <PageFiller search={search}/> 
            </div>
          </Switch>
  );
}

export default App;