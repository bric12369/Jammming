import React from "react";
import styles from './Track.module.css';

function Track({ track, addToPlaylist }) {
    return (
        <div className={styles.track}>
            <div className={styles.trackInfoContainer}>
                <h3>{track.title}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button className={styles.addBtn} onClick={() => addToPlaylist(track)}>+</button>
        </div>
    )
}

export default Track;