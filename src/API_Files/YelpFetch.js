import queryString from 'query-string';

export function get(path, queryParams){
  const API_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"
  const API_KEY = process.env.REACT_APP_YELP_KEY
  const query = queryString.stringify(queryParams);
  return fetch(`${API_URL}${path}?${query}`, {
            headers: {
                 Authorization: `Bearer ${API_KEY}`,
                 Origin: 'localhost',
                 withCredentials: true,
            },
  });

}