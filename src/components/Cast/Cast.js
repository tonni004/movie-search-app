import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { filmCast } from "redux/movies-selectors";
import styles from './Cast.module.scss'

export default function Cast() {
    const dispatch = useDispatch();
    const cast = useSelector(filmCast);

    useEffect(() => {
    }, [dispatch, cast])

    return (

        <>
            <motion.ul
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } }

                }}
                className={styles.CastBlock}>
                {cast.map(({ id, name, character, profile_path }) => (
                    <li key={id} className={styles.Card} >

                        <div className="me-3">
                            <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={name} width="80" />
                        </div>

                        <div className="card-body ">
                            <h5 className="card-title mb-2 mt-2 fs-6">{name}</h5>
                            <p className="card-text text-secondary">{character}</p>
                        </div>


                    </li>
                ))}
            </motion.ul>
        </>
    )
}
