
import { Component } from "react";
import { fetchTrends } from "services/api";
import TrendsList from '../../components/TrendsList/TrendsList';
import BackButton from '../../components/BackButton/BackButton';
import styles from './TrandsPage.module.scss'

class TrendsPage extends Component {
    state = {
        trends: [],
    }

    componentDidMount() {
        this.fetchTrends();
    }

    fetchTrends = async () => {
        try {
            const trends = await fetchTrends().then(res => res.data.results);
            this.setState({
                trends: [...trends],
            })
        } catch {
            console.log('error');
        }

    }
    render() {
        const trends = this.state.trends;
        const { history } = this.props;
        return (
            <div className="container">
                <div className={styles.BackBtnDiv}>
                    <BackButton history={history} />
                </div>
                <TrendsList trends={trends} />/
            </div>
        )
    }
}

export default TrendsPage;