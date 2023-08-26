import { configureStore, combineReducers, } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from './movies-reducer';

const rootReduser = combineReducers({
    movies: moviesReducer,
})

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});
