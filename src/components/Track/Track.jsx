import React from "react";
import styles from './Track.module.css';

function Track({ track, addToPlaylist, removeFromPlaylist }) {
    return (
        <div className={styles.track}>
            <div className={styles.trackInfoContainer}>
                <h3>{track.title}</h3>
                <p>{track.artist} | {track.album}</p>

                {addToPlaylist && <button className={styles.addBtn} onClick={() => addToPlaylist(track)}>+</button>}

                {removeFromPlaylist && <button className={styles.removeBtn} onClick={() => removeFromPlaylist(track)}>-</button>}
            </div>          
        </div>
    )
}

export default Track;