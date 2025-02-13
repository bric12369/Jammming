import React from "react";
import styles from './Track.module.css';

function Track() {
    return(
        <div className={styles.track}>
            <h3>Song Name</h3>
            <p>Artist Name | Album Name</p>
            <button className={styles.addBtn}>+</button>
        </div>
    )
}

export default Track;