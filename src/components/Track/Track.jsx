import React from "react";
import styles from './Track.module.css';

function Track({ track }) {
    return(
        <div className={styles.track}>
            <h3>{track.title}</h3>
            <p>{track.artist} | {track.album}</p>
            <button className={styles.addBtn}>+</button>
        </div>
    )
}

export default Track;