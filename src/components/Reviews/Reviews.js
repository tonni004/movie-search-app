import { number } from "prop-types";
import { Component } from "react";
import { reviewsSearch } from "services/api";
import PropTypes from 'prop-types';
import RatingDiv from "../../components/Raiting/Raiting";

import styles from './Reviews.module.scss';



class Reviews extends Component {
    state = {
        reviews: [{
            id: number,
            author: '',
            author_details: [{
                avatar_path: '',
                rating: number,
                username: '',
            }],

            content: '',
        }],

        rating_class: '',
    }


    componentDidMount() {
        this.fetchReviews();
    }

    fetchReviews = async () => {
        const id = this.props.id;
        const reviews = await reviewsSearch(id).then(res => res.data.results)
        this.setState({
            reviews: [...reviews],
        })

    }


    render() {
        const { reviews } = this.state;

        return (
            <>
                {reviews && <ul className={styles.ReviewsSection}>
                    {reviews.map(({ id, author, content, author_details }) => (
                        <li key={id} className={styles.ReviewCard}>
                            <div className={styles.ReviewImgField}>
                                <img src={`https://image.tmdb.org/t/p/w300/${author_details.avatar_path}`} alt={author} width='100'
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
                </ul>}
            </>
        )
    }
}

Reviews.propTypes = {
    id: PropTypes.string,
}

export default Reviews;