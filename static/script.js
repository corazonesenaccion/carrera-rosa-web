// --- SCRIPT INTERACTIVO PARA CARRERA ROSA ---
document.addEventListener('DOMContentLoaded', () => {
    // Menú responsivo (Botón ☰)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Mensaje de confirmación al hacer clic en inscripción o galerías
    const galleryButtons = document.querySelectorAll('.gallery-item');
    galleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('¡Gracias por sumarte a Carrera Rosa! 💖 Juntas somos más fuertes.');
        });
    });
});