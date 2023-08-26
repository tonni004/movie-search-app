import React from "react";
import BackButton from "components/BackButton/BackButton";
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
    return (
        <>
            <div className="container text-center">
                <h1 className="mt-5">Ooops! </h1>
                <p>Something went wrong. Try again!</p>
                <div className={styles.BtnDiv}>
                    <BackButton title="Go Home" link="/movie-search-app" />
                </div>
            </div>
        </>
    )
}
