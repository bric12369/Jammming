import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults, addToPlaylist }) {

  return (
    <div className={styles.searchResults}>
      <h2>Results</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(track => (
            <li key={track.id} className={styles.searchLiContainer}>
              <h4>{track.artist}</h4>
              {track.name} | {track.album}
              <button className={styles.addBtn} onClick={() => addToPlaylist(track)}>+</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tracks found</p>
      )}
    </div>
  );
}

export default SearchResults;