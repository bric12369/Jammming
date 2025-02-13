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

  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.header}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
      <SearchBar />
      <SearchResults searchResults={searchResults} />
      <Playlist />
    </div>
  )
}

export default App
