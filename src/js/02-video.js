import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

if (localStorage.getItem(CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
}

function throttledTime({ seconds }) {
  localStorage.setItem(CURRENT_TIME, seconds);
}

player.on('timeupdate', throttle(throttledTime, 1000));
