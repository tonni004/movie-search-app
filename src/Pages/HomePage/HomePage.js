import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from './HomePage.module.scss';


export default function HomeView() {
    const navigate = useNavigate();

    const onFormSubmit = () => {
        return navigate("/movie-search-app/movies");
    }
    const visible = { opacity: 1, x: 0, transition: { duration: 0.8 } };

    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 1 } }}
                className={styles.Overlay}>

                <div className="container">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 130 },
                            visible
                        }}>
                        <h1
                            className={styles.HomeTitle} >Find what to watch </h1>
                        <p className={styles.HomeTitleSpan}>...in seconds</p>
                    </motion.div>

                    <div className={styles.HomeViewComponent}>

                        <button type="button" className={styles['glow-on-hover']} onClick={onFormSubmit}>
                            GO!
                        </button>

                    </div>

                </div>
            </motion.div>

        </>

    )
}