const botonIdioma = document.getElementById('boton-idioma');
const body = document.body;

botonIdioma.addEventListener('click', function() {
    body.classList.toggle('idioma-ingles');

    if (body.classList.contains('idioma-ingles')) {
        botonIdioma.textContent = 'Cambiar a Español';
    } else {
        botonIdioma.textContent = 'Switch to English';
    }
});