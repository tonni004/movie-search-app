import React from "react";
import PropTypes from 'prop-types';
import styles from '../../Pages/FilmPage/FilmPage.module.scss'

const GenresDiv = ({ genres }) => {
    return (
        genres.map(({ name, id }) => {
            return <span className={styles.Span} key={id}>{name}</span>
        })
    )

}

GenresDiv.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })),
}

export default GenresDiv;