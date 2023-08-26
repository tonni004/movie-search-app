import { createReducer, combineReducers } from "@reduxjs/toolkit";
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

const movies = createReducer([], {
    [fetchMoviesSuccess]: (state, { payload }) => {
        const { movies, append } = payload;
        if (append) {
            return [...state, ...movies];
        } else {
            return movies;
        }
    },
});

const movieDetails = createReducer([], {
    [fetchMovieDetailsSuccess]: (_, { payload }) => payload,
})

const reviews = createReducer([], {
    [fetchReviewsSuccess]: (_, { payload }) => payload,
})

const cast = createReducer([], {
    [fetchCastSuccess]: (_, { payload }) => payload,
})

const trends = createReducer([], {
    [fetchCurrentTrendsSuccess]: (_, { payload }) => payload,
})

export const isLoading = createReducer(false, {
    [fetchMoviesRequest]: true,
    [fetchMoviesSuccess]: false,
    [fetchMoviesError]: false,
    [fetchMovieDetailsRequest]: true,
    [fetchMovieDetailsSuccess]: false,
    [fetchMovieDetailsError]: false,
    [fetchCurrentTrendsRequest]: true,
    [fetchCurrentTrendsSuccess]: false,
    [fetchCurrentTrendsError]: false,
    [fetchCastRequest]: true,
    [fetchCastSuccess]: false,
    [fetchCastError]: false,
    [fetchReviewsRequest]: true,
    [fetchReviewsSuccess]: false,
    [fetchReviewsError]: false,
})

export default combineReducers({
    movies,
    movieDetails,
    trends,
    cast,
    reviews,
});