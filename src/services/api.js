import axios from "axios";

const API_KEY = '8e127f53ae927fc22bd7f3abb16229a0';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTEyN2Y1M2FlOTI3ZmMyMmJkN2YzYWJiMTYyMjlhMCIsInN1YiI6IjY0NWJmYjBlMTU2Y2M3MDExZTAxYjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IS4ys1KMSa1SyeQ79-hzJTYaGcyl7jb10Lui4h4xIuA';


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {
    Authorization: `Bearer ${TOKEN}`,
    // accept: 'application/json',
}
axios.defaults.params = {
    api_key: API_KEY,
};

export const fetchMovies = ({ query, page = 1 }) => {
    return axios.get(`/search/movie`, { params: { query: query, page: page } }).then(response => response.data.results);
}

export const fetchMovieDetail = (id) => {
    return axios.get(`/movie/${id}`).then(response => response.data);
}

export const fetchTrends = () => {
    return axios.get('/trending/movie/week').then(response => response.data.results);
}

export const fetchCast = (id) => {
    return axios.get(`/movie/${id}/credits`).then(response => response.data.cast);

}

export const fetchReviews = (id) => {
    return axios.get(`/movie/${id}/reviews`).then(response => response.data.results);
}
