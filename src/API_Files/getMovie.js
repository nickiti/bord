import queryString from 'query-string';


export function get(path, queryParams){
    const API_URL = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/550?";
    const API_KEY = "d456da079140215e827d17b4eb594e36"
    const query = queryString.stringify(queryParams);

    return fetch(`${API_URL}${path}?${query}` ,{
        headers: {
            bearer: 
        }

    });



}