const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((i) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = i;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(i).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((i) => {
    const song = document.getElementById(i);

    song.pause();
    song.currentTime = 0;
  });
}
