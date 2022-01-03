import MediaPlayer from "../../MediaPlayer/mediaplayer";

class AutoPause {
    private threshold: number; // es una propiedad privada, que es un concepto de TS
    player: MediaPlayer;
    private pausedByScroll: boolean;

    constructor(){
        this.threshold = 0.25 // 25% "umbral"
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
        this.pausedByScroll = false;
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }
    private handleIntersection(entries: IntersectionObserverEntry[]) { // entries son todos los elementos que estamos observando
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold
        if(isVisible){
            if(this.pausedByScroll){
                this.player.play(); // a estos se les cambió de play a darPlay y pause porque según TS play no está en el player...
                this.pausedByScroll = false;
            }
        } else {
            if(!this.player.media.paused){
                this.player.pause();
                this.pausedByScroll = true;
            }
        }
    }
    private handlerVisibilityChange(){
        const isOnScreen = document.visibilityState === 'visible'

        if(isOnScreen && !this.pausedByScroll){
            this.player.play();
            
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;