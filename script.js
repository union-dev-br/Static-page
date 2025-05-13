document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', function () {
            menuItems.classList.toggle('show');
            // Animação para o botão toggle (opcional)
            gsap.to(menuToggle, {
                rotation: menuItems.classList.contains('show') ? 90 : 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    }

    // Adicionar funcionalidade de fechar menu ao clicar em um link (para mobile)
    if (menuItems) {
        menuItems.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuItems.classList.contains('show')) {
                    menuItems.classList.remove('show');
                    if (menuToggle) { // Resetar rotação do botão toggle
                         gsap.to(menuToggle, { rotation: 0, duration: 0.3, ease: "power2.inOut" });
                    }
                }
            });
        });
    }
});