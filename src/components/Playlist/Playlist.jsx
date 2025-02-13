import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist({ playlistName, playlistTracks, setPlaylistName, setPlaylistTracks }) {
    return(
        <div className={styles.playlist}>
            <h2>My Playlist:</h2>
            <input 
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                className={styles.playlistInput}
            />

            <Tracklist tracks={playlistTracks}/>

            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;