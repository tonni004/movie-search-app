import React from "react";
// import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../Pages/FilmPage/FilmPage.module.scss'

// components
import GenresDiv from "../../components/GenresDiv/GenresDiv";
import ContriesProductionDiv from '../../components/CounrtiesProducrionDiv/CountriesProductionDiv';

const FilmDetails = ({ title, overview, poster_path, genres, release_date, runtime, production_countries, vote_average, homepage }) => {

    return (
        <>
            <div className={styles.Field}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} width="370" />
                <div className={styles.InformationField}>
                    <div>
                        <h2 className="mb-0">{title}</h2>
                        <div className="mt-4 text-white-50">
                            <GenresDiv genres={genres} />
                            <span className={styles.Span} >{runtime} min</span>
                            <span className={styles.Span} >{vote_average} rating</span>
                        </div>

                        <div className="mt-1 ">
                            <ContriesProductionDiv countries={production_countries} />
                            <span className={styles.Span} >{release_date}</span>
                        </div>

                        <p className="mt-5 mb-5">{overview}</p>
                    </div>



                    <div className={styles.BtnField}>
                        <button className={styles['glowing-btn']} type="button">
                            <a href={homepage}>
                                <span className={styles['glowing-txt']}>W<span className={styles['faulty-letter']}>A</span>TCH</span>
                            </a>
                        </button>
                    </div >

                </div >
            </div >
        </>


    )
}

FilmDetails.defaultProps = {
    homepage: '/',
    // poster_path: '../../images/default.jpg',
}

FilmDetails.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })),
    release_date: PropTypes.string,

    production_countries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })),

    homepage: PropTypes.string,

}

export default FilmDetails;