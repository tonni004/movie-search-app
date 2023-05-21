import React from "react";
import PropTypes from 'prop-types';
import styles from './BackButton.module.scss';

const BackButton = ({ history, title = 'Go back' }) => {
    function goBack() {
        history.goBack()
    }

    return (

        <button type="button"
            onClick={goBack}
            className={styles['button-perspective']}>{title}</button>

    )
}

BackButton.propTypes = {
    title: PropTypes.string,
}

export default BackButton;