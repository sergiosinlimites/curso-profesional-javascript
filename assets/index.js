import MediaPlayer from './MediaPlayer/mediaplayer.js';
import Autoplay from './plugins/Autoplay/autoplay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    //new Autoplay()
]});

const buttonPlay = document.querySelector('.play-button');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('.mute-button');
buttonMute.onclick = () => player.toggleMute();