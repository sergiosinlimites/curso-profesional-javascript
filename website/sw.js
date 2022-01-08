const VERSION = 'v1';

self.addEventListener('install', event => { // es como el this pero para los service workers
    // en el precache le damos una lista de recursos que queremos que mantenga en cache.
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => { // cuando recibamos peticiones
    const request = event.request;
    // solo queremos usar las peticiones GET
    if(request.method !== 'GET'){
        return;
    }
    // busca en caché
    event.respondWith(cachedResponse(request));

    // actualizar caché
    event.waitUntil(updateCache(request));
});

// estrategia cached and network --> en caso de que se actualicen archivos, buscamos cache, luego vamos al network a actualizar caché



async function precache(){
    try {
        const cache = await caches.open(VERSION); // abrimos una instancia de cache
        return cache.addAll([
            // '/',
            // '/index.html',
            // '/assets/index.js',
            // '/assets/MediaPlayer/mediaplayer.js',
            // '/assets/plugins/Autoplay/autoplay.js',
            // '/assets/plugins/Autopause/autopause.js',
            // '/assets/index.css',
            // '/assets/BigBuckBunny.mp4' se quitan ya que igual se hace un fetch y parcel le pone un hash a todos los archivos
    ])
    } catch (err) {
        console.error(err);
    }
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request) // aquí se pregunta al caché si ya tiene una copia de ese request
    return response || fetch(request); // aquí le decimos a que nos devuelva la respuesta del caché si la tiene o sino que haga una busqueda de esa petición
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response); // esto nos añade nuevo contenido al caché, con la llave del request se guarda el response
}