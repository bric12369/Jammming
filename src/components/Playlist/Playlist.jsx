import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

function Playlist({ playlistName, playlistTracks, setPlaylistName, removeFromPlaylist, savePlaylist }) {

    return(
        <div className={styles.playlist}>
            <input 
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                className={styles.playlistInput}
            />

            <Tracklist tracks={playlistTracks} removeFromPlaylist={removeFromPlaylist} />

            <button onClick={savePlaylist}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;