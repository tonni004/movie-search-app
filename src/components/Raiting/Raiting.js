// import classNames from "classnames";
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import styles from './Raiting.module.scss'

export default function RatingDiv({ rating }) {

    const [reviewRating, setReviewRating] = useState();
    useEffect(() => {
        updateRatingClass()
    })

    const updateRatingClass = useCallback(() => {
        if (rating === null) {
            return setReviewRating(null);
        } else {
            const ratingColor = rating <= 4 ? "bad" : rating <= 6 ? "meh" : "good";
            return setReviewRating(ratingColor);
        }
    }, [rating])

    return (
        <div className={styles.RatingDiv}>
            <div className={styles[`${reviewRating}`]}><span>{rating}</span></div>
        </div>

    );
}


RatingDiv.propTypes = {
    rating: PropTypes.number,
}
