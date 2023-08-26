import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { searchMovies } from "redux/movies-operations";
import { allSearchMovies } from '../../redux/movies-selectors';
import styles from './MoviesView.module.scss'

// components
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import BackButton from "components/BackButton/BackButton";

export default function MoviesView() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const movies = useSelector(allSearchMovies);

    const onFetchMovies = useCallback((searchValue) => {
        setCurrentPage(1);

        setSearchQuery(searchValue);

        const search = {
            query: searchValue,
            page: 1,
        }

        dispatch(searchMovies(search, false))
    }, [dispatch])

    const onLoadMoreClick = useCallback(() => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);

        const search = {
            query: searchQuery,
            page: nextPage,
        }

        dispatch(searchMovies(search, true))
    }, [dispatch, currentPage, searchQuery]);


    return (

        <div className={styles.BodyPage} >
            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="container">
                <SearchForm onSubmit={onFetchMovies} />

                <div className={styles.BackBtnDiv}><BackButton /></div>

                <MoviesList />
                {movies.length > 19 &&
                    <div className={styles.LoadMoreField}>
                        <button type='button' className={styles.LoadMoreBtn} onClick={onLoadMoreClick}>Load more</button>
                    </div>
                }

                {movies.length === 0 && (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 1 } },
                        }}
                        className={styles.MoviesNotFoundField}>
                        <div className={styles.TextField}>
                            <div className={styles.SmallText}>
                                <span >Movies</span>
                                <span>found</span>
                            </div>

                            <span className={styles.NoText}>not</span>


                        </div>

                    </motion.div>
                )
                }
            </motion.div >

        </div >

    )
}
