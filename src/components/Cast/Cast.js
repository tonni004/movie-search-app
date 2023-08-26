import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { filmCast } from "redux/movies-selectors";
import styles from './Cast.module.scss'
import CastCard from "components/CastCard/CastCard";

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

                        <CastCard name={name} character={character} profile_path={profile_path} />
                    </li>
                ))}
            </motion.ul>
        </>
    )
}
