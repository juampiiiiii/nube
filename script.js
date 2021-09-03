document.addEventListener('DOMContentLoaded', function() {
    rip = document.querySelector('#rip');
    rip.addEventListener('click', function() {
        document.querySelector('title').innerHTML = 'XD';
        body = document.querySelector('body');
        body.innerHTML = '';
        par = document.createElement('p');
        tex = document.createTextNode('el sitio rip');
        par.appendChild(tex);
        body.appendChild(par);
        par.style.textAlign = 'center';
        par.style.marginTop = '30px';
        body.style.color = 'black';
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'white';
        body.style.textAlign = 'center';

        video = document.createElement('video');
        body.appendChild(video);
        video.src = '/vid/rickroll.mkv';
        video.style.height = '80%';
        video.style.width = '80%';
        video.loop = 'true';
        video.play();
    });
});
