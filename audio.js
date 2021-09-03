document.addEventListener('DOMContentLoaded', function() {
    menu = document.querySelector('#menu');
    audio = document.querySelector('#audio');
    menu.addEventListener('change', function() {
        cancion = document.querySelector('#cancion');
        val = menu.value;
        if (val == 'de agua') {
            cancion.src = '/mp3/debussy.mp3';
            audio.load();
        } else if (val == 'de viento') {
            cancion.src = '/mp3/vsnare.mp3';
            audio.load();
        } else if (val == 'de tierra') {
            cancion.src = '/mp3/spektor.mp3';
            audio.load();
        } else {
            cancion.src = '';
            audio.load();
        }
    });
});
