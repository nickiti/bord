import React from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Search} from './search/Search';
import LandingPage from './Landing/LandingPage';


function App() {
 

    return (
          <Switch>
            <Route path="/search" component={Search}/>
            <Route path="/" component={LandingPage}/>
          </Switch>
  );
}

export default App;