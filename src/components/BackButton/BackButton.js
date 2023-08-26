import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './BackButton.module.scss';

export default function BackButton({ title = 'Go back', link }) {
    const navigate = useNavigate();

    const goHome = () => {
        if (link) {
            navigate(link)
        } else {
            navigate(-1)
        }

    }
    return (
        <button type="button"
            onClick={goHome}
            className={styles['button-perspective']}>{title}</button>

    )
}

BackButton.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
}
