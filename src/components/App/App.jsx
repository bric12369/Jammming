import React, { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      id: 1, artist: "Bastille", title: "Pompeii", album: "Bad Blood"
    },
    {
      id: 2, artist: "Orville Peck", title: "Daytona Sand", album: "Bronco"
    },
    {
      id: 3, artist: "Bring Me the Horizon", title: "Sleepwalking", album: "Sempiternal"
    }
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addToPlaylist = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
      console.log("Updated Playlist:", [...playlistTracks, track]);
    }
  };

  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.header}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
      <SearchBar />
      <div className={styles.flexContainer}>
        <SearchResults searchResults={searchResults} addToPlaylist={addToPlaylist}/>
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          setPlaylistName={setPlaylistName}
          setPlaylistTracks={setPlaylistTracks}
        />
      </div>
    </div>
  )
}

export default App
