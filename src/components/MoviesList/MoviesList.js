import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import MovieCard from "components/MovieCard";
import classNames from "classnames";
import styles from './MoviesList.module.scss'


const MoviesList = ({ movies }) => {
    return (
        <>
            {movies && <ul className={styles.MoviesList}>
                {movies.map(({ id, title, poster_path }) =>
                (<li className={classNames(styles.MovieCard, "card shadow p-3 mb-5 bg-dark bg-opacity-75 rounded ")} key={id}>
                    <Link className='link-underline-light link-body-emphasis  text-white link-underline-opacity-0'
                        to={{
                            pathname: `/movies/${id}`,
                            state: `${id}`,
                        }}>
                        <MovieCard title={title} url={poster_path} id={id} />
                    </Link>
                </li>))}
            </ul>}
        </>




    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
    })),
}



export default withRouter(MoviesList);