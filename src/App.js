import React from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Search} from './Components/yelp/YelpSearch';
import FoodSearch from './Components/yelp';
import MovieSearch from './Components/movie';
import NaviBar from './Components/NavBar';
import LandingPage from './Components/landingPage'
//https://cors-anywhere.herokuapp.com/corsdemo


function App() {


    return (
      <>
        <NaviBar/>
        <Switch>  
          <Route path="/search" component={Search}/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/food" component={FoodSearch}/>
          <Route path="/movies" component={MovieSearch}/>
        </Switch>
      </>
  );
}

export default App;