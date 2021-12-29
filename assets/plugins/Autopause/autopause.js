class AutoPause {
    constructor(){
        this.threshold = 0.25 // 25% "umbral"
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
        this.pausedByScroll = false;
    }
    run(player){
        this.jugador = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });

        observer.observe(this.jugador.media);

        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }
    handleIntersection(entries) { // entries son todos los elementos que estamos observando
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            if(this.pausedByScroll){
                this.jugador.play();
                this.pausedByScroll = false;
            }
        } else {
            if(!this.jugador.media.paused){
                this.jugador.pause();
                this.pausedByScroll = true;
            }
        }
    }
    handlerVisibilityChange(){
        const isOnScreen = document.visibilityState === 'visible'

        if(isOnScreen && !this.pausedByScroll){
            this.jugador.play();
            
        } else {
            this.jugador.pause();
        }
    }
}

export default AutoPause;