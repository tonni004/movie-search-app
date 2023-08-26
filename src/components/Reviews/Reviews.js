import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { filmReviews } from "redux/movies-selectors";
import RatingDiv from "../../components/Raiting/Raiting";

import styles from './Reviews.module.scss';



export default function Reviews() {
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState(null);
    const reviews = useSelector(filmReviews);

    useEffect(() => {
        reviews.forEach(({ author_details }) => {
            if (author_details.avatar_path === null) {
                setAvatar('https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg')
            } else {
                setAvatar(`https://image.tmdb.org/t/p/w300/${author_details.avatar_path}`)
            }
        });
    }, [dispatch, reviews])

    return (
        <>
            {reviews.length === 0
                ? <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 1 } }

                    }}
                    className={styles.NoReviewsField}>
                    <h5>No Reviews Yet</h5>
                    <p>Be the first to share what you think!</p>
                </motion.div>
                : <motion.ul
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1 } }

                    }}
                    className={styles.ReviewsSection}>
                    {reviews.map(({ id, author, content, author_details }) => (
                        <li key={id} className={styles.ReviewCard}>
                            <div className={styles.ReviewImgField}>
                                <img src={avatar} alt={author} width='100' height='100'
                                    className={styles.ReviewImg}
                                />
                                <RatingDiv rating={author_details.rating} />

                            </div>
                            <div className={styles.ReviewsField}>

                                <h3 className={styles.ReviewTitle}>{author}</h3>

                                <p className={styles.ReviewText}>{content}</p>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            }

        </>
    )
}

