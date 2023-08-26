import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss'

export default function MovieCard({ title, url }) {
    const [poster, setPoster] = useState();

    useEffect(() => {
        if (url === null) {
            setPoster('https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg')
        } else {
            setPoster(`https://image.tmdb.org/t/p/w300/${url}`)
        }
    }, [url])
    return (

        <article className={styles.Article} >

            <img src={poster} className='card-img-top' alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>

        </article>
    )
}

MovieCard.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
}
