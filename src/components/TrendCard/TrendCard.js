import React from "react";
// import styles from './TrendCard.module.scss'
import PropTypes from 'prop-types';

const TrendCard = ({ title, url, overview, release_date, vote_average }) => {
    function rating() {
        return vote_average.toFixed(1)
    }
    return (
        <div className="card mb-3 bg-dark bg-gradient text-white bg-opacity-75" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w300/${url}`} className="img-fluid rounded-start pt-3 pb-3 ps-3" alt={title} width="250" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-warning">Rating: {rating()}</p>
                        <p className="card-text">{overview}</p>
                        <p className="card-text"><small className="text-wgite">Release date: {release_date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

TrendCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
}

export default TrendCard;