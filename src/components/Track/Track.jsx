import React from "react";
import styles from './Track.module.css';

function Track({ track, addToPlaylist, removeFromPlaylist }) {
    return (
        <div className={styles.track}>
            <div className={styles.trackInfoContainer}>
                <h4>{track.artist}</h4>
                <p>{track.name} | {track.album}</p>

                {addToPlaylist && (
                    <button className={styles.addBtn} onClick={() => addToPlaylist(track)}>+</button>)}

                {removeFromPlaylist && (
                    <button className={styles.removeBtn} onClick={() => removeFromPlaylist(track)}>-</button>)}
            </div>          
        </div>
    )
}

export default Track;