import { useEffect, useState, useCallback, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useRoutes } from "react-router-dom";
import { motion } from "framer-motion";
import { searchMovieDetails } from "redux/movies-operations";
import { searchCast, searchReviews } from "redux/movies-operations";
import { moviesDetails } from "redux/movies-selectors";

// components
import FilmDetails from "components/FilmDetails";
import SpinnerCircle from '../../components/Spinner/Spinner';
import BackButton from "components/BackButton/BackButton";
import styles from './FilmPage.module.scss';


// lazy routes
const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));


export default function FilmPage() {
    const dispatch = useDispatch();
    const movieDetails = useSelector(moviesDetails);
    const movieParams = useParams();
    const navigate = useNavigate();
    const [dataLoaded, setDataLoaded] = useState(false);

    const onFetchCast = useCallback(() => {
        dispatch(searchCast(movieParams.moviesId));
        navigate(`cast`, { replace: true });
    }, [dispatch, movieParams, navigate]);

    const onFetchReviews = useCallback(() => {
        dispatch(searchReviews(movieParams.moviesId));
        navigate(`reviews`, { replace: true });
    }, [dispatch, movieParams, navigate]);

    const element = useRoutes([
        {
            path: `cast`,
            element: < Cast />,
        },
        {
            path: `reviews`,
            element: <Reviews />,
        },
    ]);

    useEffect(() => {
        dispatch(searchMovieDetails(movieParams.moviesId)).then(() => {
            setDataLoaded(true);
        });
    }, [dispatch, movieParams]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="container text-white bg-opacity-75 bg-black mt-4 mb-4">
            <div className={styles.BtnDiv}>
                <BackButton />
            </div>

            {dataLoaded ? (
                <FilmDetails
                    title={movieDetails.title}
                    overview={movieDetails.overview}
                    poster_path={movieDetails.poster_path}
                    genres={movieDetails.genres}
                    release_date={movieDetails.release_date}
                    runtime={movieDetails.runtime}
                    production_countries={movieDetails.production_countries}
                    vote_average={movieDetails.vote_average}
                    homepage={movieDetails.homepage}
                />
            ) : (
                <SpinnerCircle />
            )}

            <div className={styles.SeeMoreField}>
                <h4 className={styles.SeeMoreTitle}>See more: </h4>
                <ul className={styles.BtnGroup}>
                    <li className={styles.SeeMoreBtn}>
                        <button type="button" onClick={onFetchCast} className='btn btn-outline-info'>
                            Cast
                        </button>
                    </li>
                    <li>
                        <button type="button" onClick={onFetchReviews} className='btn btn-outline-info'>
                            Reviews
                        </button>
                    </li>
                </ul>
            </div>

            <Suspense fallback={<SpinnerCircle />}>
                {element}
            </Suspense>
        </motion.div>
    );
}


