export function get(id){
    const API_KEY = process.env.REACT_APP_TMDB_KEY
    return (
            fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&page=1`)
    )
}