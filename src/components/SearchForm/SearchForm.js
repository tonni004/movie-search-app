import { Component } from "react";
import styles from './SearchForm.module.scss';

class SearchForm extends Component {
    state = {
        value: '',
    }

    handleChange = e => {
        const searchValue = e.currentTarget.value;
        this.setState({
            value: searchValue,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.reset();

    }

    reset = () => {
        this.setState({
            value: '',
        })
    }

    render() {
        return (


            <div className={styles.SearchForm}>

                <form onSubmit={this.handleSubmit} role="search">
                    <label htmlFor="search">Search </label>
                    <input id="search"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                        value={this.state.value}
                        onChange={this.handleChange}
                        required />
                    <button type="submit" className={styles.SearchBtn}>Go!</button>
                </form>
            </div>



        )
    }
}


export default SearchForm;