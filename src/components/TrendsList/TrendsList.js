import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './TrendList.module.scss';
import TrendCard from "components/TrendCard/TrendCard";

const TrendList = ({ trends }) => {
    return (
        <>
            {trends && <ul className="mt-2 ps-0">
                {trends.map(({ id, title, poster_path, overview, release_date, vote_average }) => (
                    <li key={id} className={styles.TerndsListItem}>
                        <Link className='link-underline-light link-body-emphasis  text-white link-underline-opacity-0'
                            to={{
                                pathname: `/movies/${id}`,
                                state: `${id}`,
                            }}>
                            <TrendCard title={title} url={poster_path} id={id} overview={overview} release_date={release_date} vote_average={vote_average} />

                        </Link>

                    </li>
                ))}
            </ul>}
        </>
    )
}

TrendList.propTypes = {
    trends: PropTypes.arrayOf(PropTypes.object)
}

export default TrendList;