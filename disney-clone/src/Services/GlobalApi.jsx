import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3'
const apiKey = 'a1c84153325bdec77d2e135e46de2703'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=a1c84153325bdec77d2e135e46de2703';

//https://api.themoviedb.org/3/trending/all/day?api_key=2a1c84153325bdec77d2e135e46de2703
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + apiKey)

const getMovieByGenreId = (id) => {
    return axios.get(movieByGenreBaseURL + "&with_genres" + id)
}

export default
    {
        getTrendingVideos,
        getMovieByGenreId
    };