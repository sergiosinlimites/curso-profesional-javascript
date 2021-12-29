import MediaPlayer from './MediaPlayer/mediaplayer.js';
import AutoPlay from './plugins/Autoplay/autoplay.js';
import AutoPause from './plugins/Autopause/autopause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: 
    [new AutoPlay(), new AutoPause()]
});

const buttonPlay = document.querySelector('.play-button');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('.mute-button');
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.error(err.message));
}