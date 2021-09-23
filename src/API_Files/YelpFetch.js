import queryString from 'query-string';

// var dist = document.getElementById('distance');
// var cat = document.getElementById('term');
// var loc = document.getElementById('location');


// export default function YelpFetch() {
//     axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${loc}`, {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//       },
//         params: {
//         categories: `${cat}`,
//         radius: `${dist}`
//       }
//       })
//       .then((res) => {
//       console.log(res)
//       })
//       .catch((err) => {
//       console.log ('error')
//       })
// }


export function get(path, queryParams){
  const API_URL = "https://api.yelp.com/v3"
  const query = queryString.stringify(queryParams);
  return fetch(`${API_URL}${path}${query}`, {
    headers: {
                 Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                 Origin: 'localhost',
                 withCredentials: true,


            },
  });

}