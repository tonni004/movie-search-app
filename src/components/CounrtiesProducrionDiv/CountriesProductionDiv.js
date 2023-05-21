import React from "react";
import PropTypes from 'prop-types';
import styles from '../../Pages/FilmPage/FilmPage.module.scss'

const ContriesProductionDiv = ({ countries }) => {
    return (
        countries.map(({ name }) => {
            return <span className={styles.Span} key={name}>{name}</span>
        })
    )

}

ContriesProductionDiv.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    }))
}

export default ContriesProductionDiv;