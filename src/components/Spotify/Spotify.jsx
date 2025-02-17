const clientId = "c9d2bd33be2e4211bd1baaa7589ecb27"; // Replace with your Spotify Client ID
const redirectUri = "http://localhost:5173/"; // Update for production

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken; // Return existing token if available
    }

    // Check URL for access token
    const urlTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (urlTokenMatch && urlExpiresMatch) {
      accessToken = urlTokenMatch[1];
      const expiresIn = Number(urlExpiresMatch[1]);

      // Clear URL parameters to avoid issues with expired tokens
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return accessToken;
    }

    // If no token, redirect user to Spotify authorization
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    window.location.href = authUrl;
  }
};

export default Spotify;