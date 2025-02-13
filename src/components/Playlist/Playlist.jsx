import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist() {
    return(
        <div className={styles.playlist}>
            <h2>My Playlist:</h2>
            <input type="text" placeholder="New Playlist" />
            <Tracklist />
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;