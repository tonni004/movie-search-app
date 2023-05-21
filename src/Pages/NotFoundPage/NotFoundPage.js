import { Component } from "react";
import BackButton from "components/BackButton/BackButton";
import styles from './NotFoundPage.module.scss';

class NotFoundPage extends Component {
    render() {
        const history = this.props.history;
        return (
            <div className="container text-center">
                <h1 className="mt-5">Ooops! </h1>
                <p>Something went wrong. Try again!</p>
                <div div className={styles.BtnDiv}>
                    <BackButton history={history} title="Go Home" />
                </div>

            </div>
        )
    }

}

export default NotFoundPage;