import React from 'react'
import axios from 'axios'

var dist = document.getElementById('distance');
var cat = document.getElementById('category');
var loc = document.getElementById('location');


export default function YelpFetch() {
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${loc}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
        params: {
        categories: `${cat}`,
        radius: `${dist}`
      }
      })
      .then((res) => {
      console.log(res)
      })
      .catch((err) => {
      console.log ('error')
      })
}
