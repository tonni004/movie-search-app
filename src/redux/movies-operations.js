import {
    fetchMovies,
    fetchMovieDetail,
    fetchTrends,
    fetchCast,
    fetchReviews
} from '../services/api';

import {
    fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMoviesError,
    fetchMovieDetailsRequest,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
    fetchCurrentTrendsRequest,
    fetchCurrentTrendsSuccess,
    fetchCurrentTrendsError,
    fetchCastRequest,
    fetchCastSuccess,
    fetchCastError,
    fetchReviewsRequest,
    fetchReviewsSuccess,
    fetchReviewsError,
} from './movies-actions';

export const searchMovies = (value, append) => async dispatch => {
    dispatch(fetchMoviesRequest());
    try {
        const movies = await fetchMovies(value);
        return dispatch(fetchMoviesSuccess(movies, append));
    } catch (error) {
        return dispatch(fetchMoviesError(error.message));
    }
}

export const searchMovieDetails = (id) => async dispatch => {
    dispatch(fetchMovieDetailsRequest());

    try {
        const movieDetails = await fetchMovieDetail(id);
        return dispatch(fetchMovieDetailsSuccess(movieDetails))
    } catch (error) {
        return dispatch(fetchMovieDetailsError(error.message))
    }
}

export const currentTrends = () => async dispatch => {
    dispatch(fetchCurrentTrendsRequest());

    try {
        const trends = await fetchTrends();
        return dispatch(fetchCurrentTrendsSuccess(trends));
    } catch (error) {
        return dispatch(fetchCurrentTrendsError(error.message))
    }
}

export const searchCast = (id) => async dispatch => {
    dispatch(fetchCastRequest());

    try {
        const cast = await fetchCast(id);
        return dispatch(fetchCastSuccess(cast));
    } catch (error) {
        return dispatch(fetchCastError(error.message));
    }
}

export const searchReviews = (id) => async dispatch => {
    dispatch(fetchReviewsRequest());

    try {
        const cast = await fetchReviews(id);
        return dispatch(fetchReviewsSuccess(cast));
    } catch (error) {
        return dispatch(fetchReviewsError(error.message));
    }
}