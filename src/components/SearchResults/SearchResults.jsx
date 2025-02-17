import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults, addToPlaylist }) {

    return (
        <div className={styles.searchResults}>
          <h2>Results</h2>
          <ul>
            {searchResults.map(track => (
              <li key={track.id}>
                {track.name} - {track.artist} ({track.album})
                <button onClick={() => addToPlaylist(track)}>+</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default SearchResults;