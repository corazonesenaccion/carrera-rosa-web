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
});
