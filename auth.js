const CLIENT_ID = "29e30def7a83469f88a72b6e893e0a07";
const REDIRECT_URI = window.location.origin;

function loginSpotify() {
  const scope = "user-read-playback-state user-modify-playback-state";

  const url =
  "https://accounts.spotify.com/authorize" +
  "?response_type=token" +
  "&client_id=" + CLIENT_ID +
  "&scope=" + encodeURIComponent(scope) +
  "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);

  window.location.href = url;
}