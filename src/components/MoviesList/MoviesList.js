import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { allSearchMovies } from "redux/movies-selectors";
import classNames from "classnames";
import styles from './MoviesList.module.scss'

// components
import MovieCard from "components/MovieCard";

export default function MoviesList() {
    const movies = useSelector(allSearchMovies);

    return (
        <>
            {movies && <motion.ul
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } }
                }}
                className={styles.MoviesList}>
                {movies.map(({ id, title, poster_path }) =>
                (<li className={classNames(styles.MovieCard, "card shadow p-3 mb-3 bg-dark bg-opacity-75 rounded ")} key={id} >
                    <Link className='link-underline-light link-body-emphasis  text-white link-underline-opacity-0'
                        to={`/movie-search-app/movies/${id}`}>
                        <MovieCard title={title} url={poster_path} />
                    </Link>
                </li>))}
            </motion.ul>}
        </>
    )
}


