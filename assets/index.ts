import MediaPlayer from './MediaPlayer/mediaplayer';
import AutoPlay from './plugins/Autoplay/autoplay';
import AutoPause from './plugins/Autopause/autopause';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: 
    [new AutoPlay(), new AutoPause()]
});

const buttonPlay: HTMLElement = document.querySelector('.play-button');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('.mute-button');
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.error(err.message));
}