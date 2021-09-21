import React from 'react'
import './App.css';
import PageFiller from './PageFiller';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ResultDisplay from './Results/ResultDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <Router>
          <Switch>
            <Route exact path="/Results/ResultDisplay" component={ResultDisplay} /> 
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"}}>
                <Route exact path="/Results/ResultDisplay" component={ResultDisplay} /> 
                <PageFiller/>
            </div>
          </Switch>
        </Router>
  );
}

export default App;