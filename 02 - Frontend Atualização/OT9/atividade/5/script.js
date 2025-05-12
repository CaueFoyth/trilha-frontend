const audio = document.getElementById('audio');
const volume = document.getElementById('volume');

volume.addEventListener('input', () => {
  audio.volume = volume.value;
});

function playSong(src) {
  audio.src = src;
  audio.play();
}
