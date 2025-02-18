import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../Spotify/Spotify'


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [originalSearchResults, setOriginalSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      searchSpotify(event.target.value);
    }
  };

  useEffect(() => {
    Spotify.getAccessToken();

    window.addEventListener('keydown', handleEnterPress);

    return () => {
    window.removeEventListener('keydown', handleEnterPress);
    };
  }, [])


  const addToPlaylist = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);

      setSearchResults((prevResults) => prevResults.filter((t) => t.id !== track.id));
    }
  };

  const removeFromPlaylist = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((t) => t.id !== track.id));

    // Find the original position of the track in originalSearchResults
    const originalIndex = originalSearchResults.findIndex((t) => t.id === track.id);
    
    if (originalIndex !== -1) {
      setSearchResults((prevResults) => {
        const updatedResults = [...prevResults];
        updatedResults.splice(originalIndex, 0, track); // Insert at the original position
        return updatedResults;
      });
    }
  };

  const searchSpotify = (term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
      setOriginalSearchResults(results); // Store the original order
    });
  };

  const savePlaylist = async () => {
    if (!playlistName || playlistTracks.length === 0) {
      alert("Please add tracks and name your playlist before saving!");
      return;
    }

    const trackUris = playlistTracks.map(track => track.uri);

    try {
      console.log("Saving playlist:", playlistName);
      await Spotify.savePlaylist(playlistName, trackUris);
      console.log("Playlist saved successfully!");

      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    } catch (error) {
      console.error("Error saving playlist:", error);
    }
  };

  return (
    <div className={styles.app}>
      <nav className={styles.header}>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
      </nav>
      <SearchBar onSearch={searchSpotify} />
      <div className={styles.flexContainer}>
        <SearchResults searchResults={searchResults} addToPlaylist={addToPlaylist} />
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
  );
}

export default App
