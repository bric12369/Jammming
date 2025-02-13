import React from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist({ tracks = [], addToPlaylist, removeFromPlaylist }) {


    return (
        <div className={styles.tracklist}>
            {tracks.length > 0 ? (
                tracks.map((track) => <Track key={track.id} track={track} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>)
            ) : (
                <p>No tracks found</p>
            )}
        </div>
    )
}

export default Tracklist;