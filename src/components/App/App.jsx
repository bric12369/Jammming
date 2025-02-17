import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../Spotify/Spotify'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  }, [])


  const addToPlaylist = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeFromPlaylist = (track) => {
    console.log("Removing track:", track);
    setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
  };

  const searchSpotify = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);

    console.log("Saving playlist:", playlistName);
    console.log("Track URIs:", trackUris);

    setTimeout(() => {
      console.log("Playlist saved successfully!");
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    }, 1000);
  };

  return (
    <div className={styles.app}>
      <header>
        <h1 className={styles.header}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
      <SearchBar onSearch={searchSpotify}/>
      <div className={styles.flexContainer}>
        <SearchResults searchResults={searchResults} addToPlaylist={addToPlaylist}/>
        <Playlist 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          setPlaylistName={setPlaylistName}
          setPlaylistTracks={setPlaylistTracks}
          removeFromPlaylist={removeFromPlaylist}
          savePlaylist={savePlaylist}
        />
      </div>
    </div>
  )
}

export default App
