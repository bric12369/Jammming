const clientId = "c9d2bd33be2e4211bd1baaa7589ecb27";
const redirectUri = window.location.origin + "/";

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const urlTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (urlTokenMatch && urlExpiresMatch) {
      accessToken = urlTokenMatch[1];
      const expiresIn = Number(urlExpiresMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    }

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  },

  async search(term) {
    const token = this.getAccessToken();

    if (!token) {
      console.error("No access token available");
      return [];
    }

    const url = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const jsonResponse = await response.json();
      console.log("API Response:", jsonResponse); 
      if (!jsonResponse.tracks) {
        return [];
      }

      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
      
    } catch (error) {
      console.error("Error fetching data from Spotify:", error);
      return [];
    }
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) return;

    const token = this.getAccessToken();
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };

    try {
      const userResponse = await fetch("https://api.spotify.com/v1/me", { headers });
      const userData = await userResponse.json();
      const userId = userData.id;

      const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: playlistName,
          description: "Created with Jammming!",
          public: true,
        }),
      });

      const playlistData = await playlistResponse.json();
      const playlistId = playlistData.id;

      await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        headers,
        body: JSON.stringify({ uris: trackUris }),
      });

      console.log(`Playlist "${playlistName}" saved to Spotify!`);
    } catch (error) {
      console.error("Error saving playlist:", error);
    }
  },
};

export default Spotify;