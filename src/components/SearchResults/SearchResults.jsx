import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults }) {

    return(
        <div className={styles.searchResults}>
        <h2>Search Results:</h2>
        <Tracklist tracks={searchResults} />
        </div>
    )
}

export default SearchResults;