function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.darPlay = function() {
    this.media.play();
};

MediaPlayer.prototype.darPause = function() {
    this.media.pause();
};

MediaPlayer.prototype.mostrarURL = function() {
    let urlVideo = this.media.currentSrc;
    console.log("La URL de este video es: " + urlVideo);
}

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.darPlay();
        this.mostrarURL();
    } else {
        this.darPause();
    }
};

MediaPlayer.prototype.mutear = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.desmutear = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
    this.media.muted = !this.media.muted;
}

export default MediaPlayer;