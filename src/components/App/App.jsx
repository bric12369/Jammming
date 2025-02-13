import React, { useState } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
    <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
    <SearchBar />
    <SearchResults />
    <Playlist />
    </div>
  )
}

export default App
