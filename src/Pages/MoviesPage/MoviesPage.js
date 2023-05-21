import { Component } from "react";
import { fetchMovies } from "../../services/api";
import styles from './MoviesView.module.scss'

// components
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import BackButton from "components/BackButton/BackButton";

class MoviesView extends Component {
    state = {
        value: '',
        movies: [],
        currentPage: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        const { value } = this.state;
        if (prevState.value !== value) {
            this.fetchMovies();
        }

    }

    onFormSubmit = (value) => {
        this.setState({
            value: value,
            currentPage: 1,
            movies: [],
        })
    }

    fetchMovies = async () => {
        const { value } = this.state;

        try {
            const results = await fetchMovies(value).then(response => response.data.results);

            this.setState(prevState => ({
                movies: [...prevState.movies, ...results],
            }))

        } catch (error) {
            console.log('Error');
        }
    }


    render() {
        const { movies } = this.state;
        const { history } = this.props;
        return (

            <div className={styles.BodyPage} >

                <div className="container">
                    <SearchForm onSubmit={this.onFormSubmit} />

                    <div className={styles.BackBtnDiv}><BackButton history={history} /></div>

                    <MoviesList movies={movies} />
                    {movies.length === 0 && (
                        <p className="text-center mt-3 fw-medium">Movies not found.</p>
                    )}
                </div>

            </div>

        )
    }
}

export default MoviesView;