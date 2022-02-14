export function get(){
    let API_KEY = process.env.REACT_APP_TMDB_KEY

    return (
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    )
}