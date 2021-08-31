import React from 'react'
import './App.css';
import PageFiller from './PageFiller';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ResultDisplay from './components/Results/ResultDisplay';


function App() {

    return (
      <Router>
        <Switch>
          <Route exact path="/components/Results/ResultDisplay" component={ResultDisplay} /> 
          < PageFiller />
        </Switch>
      </Router>
  );
}

export default App;