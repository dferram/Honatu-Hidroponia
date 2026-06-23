/* SCRIPTS CENTRALIZADOS - HONATU */

document.addEventListener('DOMContentLoaded', function () {
    // === CONTROL DE PANTALLA DE CARGA (LOADER) ===
    var loader = document.getElementById('loader');
    if (loader) {
        // Después de 4 segundos iniciamos la ocultación para permitir ver la animación
        setTimeout(function () {
            loader.classList.add('loader--hide');
            loader.setAttribute('aria-hidden', 'true');

            // Remover del DOM cuando termine la transición
            loader.addEventListener('transitionend', function () {
                if (loader && loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            });
        }, 4000);
    }
});
