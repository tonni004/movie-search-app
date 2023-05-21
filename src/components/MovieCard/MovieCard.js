import React from "react";
import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg'
import styles from './MovieCard.module.scss'

const MovieCard = ({ title, url }) => {
    return (

        <article className={styles.Article} >

            <img src={`https://image.tmdb.org/t/p/w300/${url}`} className='card-img-top' alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>

        </article>
    )
}

MovieCard.defaultProps = {
    url: defaultImage,
};

MovieCard.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}

export default MovieCard;