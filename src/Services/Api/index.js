// import qs from 'querystring'
const _api = 'https://api.tvmaze.com/search/shows?q='
const _apiOne = 'https://api.tvmaze.com/shows/'
function getAllMoviesBySearch (query) {
     return fetch(_api + query)
}

function getMovieById (id) {
     return fetch(_apiOne + id)
}

export default { getAllMoviesBySearch, getMovieById }
