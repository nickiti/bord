import React from 'react'
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {YelpSearch} from './Components/yelp/YelpSearch';
import {MoviesSearch} from './Components/movie/MovieSearch'
import FoodSearch from './Components/yelp';
import MovieSearch from './Components/movie';
import NaviBar from './Components/NavBar';
import BottomBar from './Components/BottomBar'
import LandingPage from './Components/landingPage'
import EventSearch from './Components/events/'
import ExplorePage from './Components/explore';
//https://cors-anywhere.herokuapp.com/corsdemo


function App() {


    return (
      <div className='flex flex-col'>
        <NaviBar/>
        <Switch>  
          <Route path='/movies/search' component={MoviesSearch}/>
          <Route path="/food/search" component={YelpSearch}/>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/food" component={FoodSearch}/>
          <Route path="/movies" component={MovieSearch}/>
          <Route path='/events' component={EventSearch}/>
          <Route path='/explore' component={ExplorePage}/>
        </Switch>
        <BottomBar/>
      </div>
  );
}

export default App;