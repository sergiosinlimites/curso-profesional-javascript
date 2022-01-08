import MediaPlayer from 'sergiosinlimites-mediaplayer';
import AutoPlay from 'sergiosinlimites-mediaplayer/lib/plugins/Autoplay/autoplay';
import AutoPause from 'sergiosinlimites-mediaplayer/lib//plugins/Autopause/autopause';
import AdsPlugin from 'sergiosinlimites-mediaplayer/lib//plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: 
    [new AutoPlay(), new AutoPause(), new AdsPlugin()]
});

const buttonPlay: HTMLElement = document.querySelector('.play-button');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute: HTMLElement = document.querySelector('.mute-button');
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(err => console.error(err.message));
}