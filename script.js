// script.js - Funcionalidades principais do site

// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    if (menuToggle && menuItems) {
        menuToggle.addEventListener('click', function () {
            menuItems.classList.toggle('show');
            
            // Animação GSAP para o botão
            gsap.to(menuToggle, {
                rotation: menuItems.classList.contains('show') ? 90 : 0,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    }

    // Fechar menu ao clicar em links (mobile)
    if (menuItems) {
        menuItems.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuItems.classList.contains('show')) {
                    menuItems.classList.remove('show');
                    if (menuToggle) {
                        gsap.to(menuToggle, { 
                            rotation: 0, 
                            duration: 0.3, 
                            ease: "power2.inOut" 
                        });
                    }
                }
            });
        });
    }

    // Ano atual no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: "power2.inOut"
            });
        }
    });
});