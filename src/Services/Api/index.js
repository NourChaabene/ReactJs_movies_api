// import qs from 'querystring'
const _api = 'https://api.tvmaze.com/search/shows?q='

function getAllMoviesBySearch (query) {
     return fetch(_api + query)
}

export default { getAllMoviesBySearch }
