import { useCallback, useState } from "react";
import styles from './SearchForm.module.scss';

export default function SearchForm({ onSubmit }) {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        const searchValue = e.currentTarget.value;
        setValue(searchValue);
    }, [])


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(value);
        reset();

    }, [onSubmit, value]);

    const reset = () => {
        setValue('')
    }

    return (
        <div className={styles.SearchForm}>

            <form onSubmit={handleSubmit} role="search">
                <label htmlFor="search">Search </label>
                <input
                    className={styles.SearchInput}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    value={value}
                    onChange={handleChange}
                    required />
                <button type="submit" className={styles.SearchBtn}>Go!</button>
            </form>
        </div>



    )
}

