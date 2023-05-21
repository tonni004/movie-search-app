// import classNames from "classnames";
import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Raiting.module.scss'

class RatingDiv extends Component {
    state = {
        raiting_class: '',
    }


    componentDidMount() {
        this.updateRatingClass();
    }

    updateRatingClass = () => {
        const value = this.props.rating;
        const rating = value <= 4 ? "bad" : value <= 6 ? "meh" : "good";
        this.setState({
            rating_class: rating,
        });
    }


    render() {
        const { rating_class } = this.state;
        const { rating } = this.props;

        return (
            <div className={styles.RatingDiv}>
                <div className={styles[`${rating_class}`]}><span>{rating}</span></div>
            </div>

        );
    }
}

RatingDiv.propTypes = {
    rating: PropTypes.number,
}

export default RatingDiv;