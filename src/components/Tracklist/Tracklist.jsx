import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist() {
    return(
        <div className={styles.tracklist}>
            <Track />
            <Track />
            <Track />
        </div>
    )
}

export default Tracklist;