import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults() {
    return(
        <div className={styles.searchResults}>
        <h2>Search Results:</h2>
        <Tracklist />
        </div>
    )
}

export default SearchResults;