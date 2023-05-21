import { number } from "prop-types";
import { Component, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { fetchMovieDetail } from "services/api";

// components
import FilmDetails from "components/FilmDetails";
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import Spinner from '../../components/Spinner/Spinner';
import BackButton from "components/BackButton/BackButton";
import styles from './FilmPage.module.scss'


class FilmPage extends Component {
    state = {
        title: '',
        genres: [{
            id: number,
            name: '',
        }],
        overview: '',
        poster_path: '',
        release_date: '',
        runtime: number,
        production_countries: [
            { name: '', }
        ],
        vote_average: number,
        homepage: '',

        // movie: {},

    }

    componentDidMount() {
        this.fetchMovieDetail()

    }

    fetchMovieDetail = async () => {
        const { moviesId } = this.props.match.params;

        try {
            const movie = await fetchMovieDetail(moviesId).then(response => response.data);
            this.setState({
                ...movie,
            })
            // console.log(this.state.movie);

        } catch {
            console.log('error');
        }
    }



    render() {
        const movieId = this.props.match.params.moviesId;
        const { url, path } = this.props.match;
        const { history } = this.props;
        // const { movie } = this.state.movie;
        const { title, overview, poster_path, genres, release_date, runtime, production_countries, vote_average, homepage } = this.state;


        return (

            <div className="container text-white bg-opacity-75 bg-black mt-4">

                <div className={styles.BtnDiv}>
                    <BackButton history={history} /></div>

                {title && (
                    <>
                        <FilmDetails
                            title={title}
                            overview={overview}
                            poster_path={poster_path}
                            genres={genres}
                            release_date={release_date}
                            runtime={runtime}
                            production_countries={production_countries}
                            vote_average={vote_average}
                            homepage={homepage}
                        // movie={movie}

                        />

                        <div className={styles.SeeMoreField}>
                            <h4 className={styles.SeeMoreTitle}>See more: </h4>
                            <ul className={styles.BtnGroup}>
                                <li className={styles.SeeMoreBtn}>
                                    <button type="button" className='btn btn-outline-info'>
                                        <Link to={`${url}/cast`}
                                            className='link-offset-2 link-underline link-underline-opacity-0 text-light'>Cast</Link>
                                    </button>

                                </li>
                                <li>
                                    <button type="button" className='btn btn-outline-info'>
                                        <Link to={`${url}/reviews`}
                                            className='link-offset-2 link-underline link-underline-opacity-0 text-light'>Reviews</Link>
                                    </button>

                                </li>
                            </ul>

                        </div>
                        <Suspense fallback={
                            <Spinner />
                        }>
                            <Switch>
                                <Route path={`${path}/cast`}>
                                    <Cast id={movieId} />
                                </Route>

                                <Route path={`${path}/reviews`}>
                                    <Reviews id={movieId} />
                                </Route>
                            </Switch>
                        </Suspense>

                    </>
                )}

            </div>


        )
    }
}


export default FilmPage;