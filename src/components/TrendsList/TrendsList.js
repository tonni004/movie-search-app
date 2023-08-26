import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { filmTrends } from "redux/movies-selectors";
import styles from './TrendList.module.scss';
import TrendCard from "components/TrendCard/TrendCard";

export default function TrendList() {
    const trends = useSelector(filmTrends);

    return (
        <>
            {trends && <motion.ul
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="mt-5 ps-0">
                {trends.map(({ id, title, poster_path, overview, release_date, vote_average }) => (
                    <li key={id} className={styles.TerndsListItem}>
                        <Link className='link-underline-light link-body-emphasis  text-white link-underline-opacity-0'
                            to={`/movie-search-app/movies/${id}`}>
                            <TrendCard title={title} url={poster_path} id={id} overview={overview} release_date={release_date} vote_average={vote_average} />

                        </Link>

                    </li>
                ))}
            </motion.ul>}
        </>
    )
}

