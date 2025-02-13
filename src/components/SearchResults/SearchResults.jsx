import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults, addToPlaylist }) {

    return (
        <div className={styles.searchResults}>
            <h2>Search Results:</h2>
            <Tracklist tracks={searchResults} addToPlaylist={addToPlaylist}/>
        </div>
    )
}

export default SearchResults;