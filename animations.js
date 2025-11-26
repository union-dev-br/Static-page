// animations.js - Sistema completo de animações

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Funções de Animação Reutilizáveis
function animateTextChars(selector, delay = 0, staggerAmount = 0.03) {
    const el = document.querySelector(selector);
    if (el) {
        const text = el.innerText;
        el.innerText = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.style.opacity = 0;
            span.style.transform = 'translateY(20px) scale(0.8)';
            span.innerText = char === ' ' ? '\u00A0' : char;
            el.appendChild(span);
        });
        
        gsap.to(el.querySelectorAll('span'), {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: staggerAmount,
            ease: "back.out(1.7)",
            delay: delay,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });
    }
}

// Animações Comuns a Todas as Páginas
function initCommonAnimations() {
    // Logo inicial
    gsap.from(".logo", {
        duration: 1.2,
        opacity: 0,
        scale: 0.3,
        rotation: -15,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2
    });

    // Itens do menu
    gsap.from(".menu-items a", {
        duration: 0.6,
        opacity: 0,
        y: -30,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.4)"
    });
}

// Inicializar animações quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initCommonAnimations();
    
    // Botão Voltar ao Topo
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("visible");
            } else {
                backToTopButton.classList.remove("visible");
            }
        });
        
        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            gsap.to(window, { 
                duration: 1, 
                scrollTo: 0, 
                ease: "power2.inOut" 
            });
        });
    }
});