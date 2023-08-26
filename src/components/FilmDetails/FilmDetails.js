import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { moviesDetails } from "redux/movies-selectors";
import styles from '../../Pages/FilmPage/FilmPage.module.scss'

// components
import GenresDiv from "../../components/GenresDiv/GenresDiv";
import ContriesProductionDiv from '../../components/CounrtiesProducrionDiv/CountriesProductionDiv';

export default function FilmDetails() {
    const movie = useSelector(moviesDetails);
    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.3 } }
                }}
                className={styles.Field}>
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} width="370" />
                <div className={styles.InformationField}>
                    <div>
                        <h2 className="mb-0">{movie.title}</h2>
                        <div className="mt-4 text-white-50">
                            <GenresDiv genres={movie.genres} />
                            <span className={styles.Span} >{movie.runtime} min</span>
                            <span className={styles.Span} >{movie.vote_average} rating</span>
                        </div>

                        <div className="mt-1 ">
                            <ContriesProductionDiv countries={movie.production_countries} />
                            <span className={styles.Span} >{movie.release_date}</span>
                        </div>

                        <p className="mt-5 mb-5">{movie.overview}</p>
                    </div>



                    <div className={styles.BtnField}>
                        <button className={styles['glowing-btn']} type="button">
                            <a href={movie.homepage}>
                                <span className={styles['glowing-txt']}>W<span className={styles['faulty-letter']}>A</span>TCH</span>
                            </a>
                        </button>
                    </div >

                </div >
            </motion.div >
        </>


    )
}

