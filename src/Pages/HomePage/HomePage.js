import React, { Component } from "react";
import styles from './HomePage.module.scss';


class HomeView extends Component {

    onFormSubmit = () => {
        this.props.history.push('/movies');
    }


    render() {

        return (
            <>
                <div className={styles.Overlay}>

                    <div className="container">

                        <h1 className={styles.HomeTitle} >Find what to watch in seconds</h1>
                        <div className={styles.HomeViewComponent}>

                            {/* <SearchForm onSubmit={this.onFormSubmit} /> */}

                            <button type="button" className={styles['glow-on-hover']} onClick={this.onFormSubmit}>

                                GO!

                            </button>

                        </div>

                    </div>
                </div>

            </>

        )
    }
}

export default HomeView;