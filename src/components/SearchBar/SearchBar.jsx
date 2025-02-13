import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
    return(
        <div className={styles.searchBar}>
            <input type="text" id="searchBar" placeholder="Search for your favourite songs..."/>
            <button>Search</button>
        </div>
    )
}

export default SearchBar;