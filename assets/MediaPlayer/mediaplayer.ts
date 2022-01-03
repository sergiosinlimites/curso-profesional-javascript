interface ConfigParam {
    el: HTMLMediaElement,
    plugins?: Array<any>
}

class MediaPlayer {
    media: HTMLMediaElement // videoelement y audioelement son hijos de mediaelement
    plugins: Array<any>

    constructor(config: ConfigParam) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() { // en lugar del _ se usa private
        // para que no tenga acceso a todas las funciones del player le decimos cuáles sí:
        /*  const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        }; */ // no necesitamos esto ya que con TS las variables privadas ya no son problema
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    mostrarURL() {
        let urlVideo = this.media.currentSrc;
        console.log("La URL de este video es: " + urlVideo);
    }
    
    togglePlay() {
        if (this.media.paused) {
            this.play();
            this.mostrarURL();
        } else {
            this.pause();
        }
    }
    mutear() {
        this.media.muted = true;
    }

    desmutear() {
        this.media.muted = false;
    }
    
    toggleMute() {
        this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer;