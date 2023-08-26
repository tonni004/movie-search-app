
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { currentTrends } from "redux/movies-operations";
import TrendsList from '../../components/TrendsList/TrendsList';
import BackButton from '../../components/BackButton/BackButton';
import styles from './TrandsPage.module.scss'

export default function TrendsPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentTrends())
    }, [dispatch])


    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="container">
            <div className={styles.BackBtnDiv}>
                <BackButton />
            </div>
            <TrendsList />/
        </motion.div>
    )
}

