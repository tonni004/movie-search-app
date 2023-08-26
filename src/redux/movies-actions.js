import { createAction } from "@reduxjs/toolkit"

export const fetchMoviesRequest = createAction('movies/fetchMoviesRequest');
export const fetchMoviesSuccess = createAction('movies/fetchMoviesSuccess', (movies, append) => ({
    payload: {
        movies,
        append,
    },
}));
export const fetchMoviesError = createAction('movies/fetchMoviesError');

export const fetchMovieDetailsRequest = createAction('movieDetails/fetchMovieDetailsRequest');
export const fetchMovieDetailsSuccess = createAction('movieDetails/fetchMovieDetailsSuccess');
export const fetchMovieDetailsError = createAction('movieDetails/fetchMovieDetailsError');

export const fetchCurrentTrendsRequest = createAction('trends/fetchCurrentTrendsRequest');
export const fetchCurrentTrendsSuccess = createAction('trends/fetchCurrentTrendsSuccess');
export const fetchCurrentTrendsError = createAction('trends/fetchCurrentTrendsError');

export const fetchCastRequest = createAction('cast/fetchCastRequest');
export const fetchCastSuccess = createAction('cast/fetchCastSuccess');
export const fetchCastError = createAction('cast/fetchCastError');

export const fetchReviewsRequest = createAction('cast/fetchReviewsRequest');
export const fetchReviewsSuccess = createAction('cast/fetchReviewsSuccess');
export const fetchReviewsError = createAction('cast/fetchReviewsError');