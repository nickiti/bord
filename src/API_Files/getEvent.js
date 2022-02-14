
export function get(){

    let query = ''

    return(
        fetch(`https://api.yelp.com/v3/events${query}`)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        })
    )

}