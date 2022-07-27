import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function throttledTime({ seconds }) {
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log(seconds);
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', _.throttle(throttledTime, 1000));
