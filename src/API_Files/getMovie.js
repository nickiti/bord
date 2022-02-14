
export function get(title){
    // const API_URL = "https://api.themoviedb.org/3/search/company?";
    const API_KEY = "d456da079140215e827d17b4eb594e36"
    const query = title.toLowerCase()

    return (
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
    )
}