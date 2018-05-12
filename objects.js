var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle }
  );
}
updatePlaylist(playlist, "artist4", "song4")

function removeFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
 return playlist
}
removeFromPlaylist(playlist, "artist2");