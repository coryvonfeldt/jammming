import styles from './SearchBar.module.css';
import {useState} from 'react';

function SearchBar (props) {
    const [term, setTerm] = useState("");

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const search = () => {
        props.onSearch(term)
        setTerm("")
    }


    return (
        <div>
            <input 
                type="text"
                placeholder="Search for a song"
                className={styles.input}
                onChange={handleChange}
                value={term}
            />
            <button className={styles.button} onClick={search}>SEARCH</button>
        </div>
    )
}

export default SearchBar;