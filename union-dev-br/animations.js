gsap.registerPlugin(ScrollTrigger);

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
            span.innerText = char === ' ' ? '\u00A0' : char; // Handle spaces
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

function animateFadeInUp(selector, delay = 0, staggerAmount = 0.2) {
    gsap.from(selector, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: staggerAmount,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
}

function animateScaleIn(selector, delay = 0, staggerAmount = 0.1) {
    gsap.from(selector, {
        opacity: 0,
        scale: 0.5,
        duration: 0.7,
        stagger: staggerAmount,
        delay: delay,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
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

    // ScrollTrigger para o logo (efeito sutil de parallax ou mudança)
    gsap.to(".logo", {
        scale: 1.05, // Um pouco menor ao scrollar
        filter: "drop-shadow(0 0 3px var(--secondary-color))",
        duration: 0.5,
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=200",
            scrub: 1,
        }
    });

    // Animação de hover nos links do menu (JS para complementar CSS se necessário, mas CSS :hover é bom)
    const menuLinks = document.querySelectorAll(".menu-items a");
    menuLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            gsap.to(link, { color: "var(--secondary-color)", duration: 0.3 });
        });
        link.addEventListener("mouseleave", () => {
            gsap.to(link, { color: "var(--text-color)", duration: 0.3 });
        });
    });
}

// Animações Específicas por Página
function initHomePageAnimations() {
    animateTextChars(".hero h1", 1.5, 0.05);
    animateFadeInUp(".hero p", 2.2);
}

function initQuemSomosPageAnimations() {
    animateTextChars(".quem-somos-title", 0.5, 0.04);
    animateFadeInUp(".quem-somos-text", 1, 0.2);
}

function initMissaoPageAnimations() {
    animateTextChars(".missao-title", 0.5, 0.04);
    animateFadeInUp(".missao-text", 1);
}

function initVisaoPageAnimations() {
    animateTextChars(".visao-title", 0.5, 0.04);
    animateFadeInUp(".visao-text", 1);
}

function initValoresPageAnimations() {
    animateTextChars(".valores-title", 0.5, 0.04);
    const valoresItems = document.querySelectorAll(".valores-text");
    valoresItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -50,
            duration: 0.7,
            delay: 1 + index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none",
            }
        });
    });
}

function initProjetosPageAnimations() {
    animateTextChars(".projetos-title", 0.5, 0.04);
    animateFadeInUp(".projetos-text", 1, 0.15); // Parágrafos
    const listItems = document.querySelectorAll(".projetos-item");
    listItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: -30,
            duration: 0.6,
            delay: 1.5 + index * 0.15,
            ease: "circ.out",
            scrollTrigger: {
                trigger: item,
                start: "top 95%",
                toggleActions: "play none none none",
            }
        });
    });
}

function initServicosPageAnimations() {
    animateTextChars(".servicos-title", 0.5, 0.04);
    animateFadeInUp(".servicos-section .servicos-text", 1, 0.2);
}

function initContatoPageAnimations() {
    animateTextChars("#contato h1", 0.5, 0.04);
    animateFadeInUp("#contato p", 1, 0.15);
    gsap.from("#contato strong a", { // Animar o link do email
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.8,
        delay: 1.8,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
            trigger: "#contato strong a",
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
}


// Inicializar animações quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
    initCommonAnimations();

    const bodyClasses = document.body.classList;

    if (document.querySelector(".body-home")) { // Index page
        initHomePageAnimations();
    } else if (bodyClasses.contains("quem-somos")) {
        initQuemSomosPageAnimations();
    } else if (bodyClasses.contains("missao-plataforma")) {
        initMissaoPageAnimations();
    } else if (bodyClasses.contains("visao-plataforma")) {
        initVisaoPageAnimations();
    } else if (bodyClasses.contains("valores-plataforma")) {
        initValoresPageAnimations();
    } else if (bodyClasses.contains("projetos")) {
        initProjetosPageAnimations();
    } else if (bodyClasses.contains("servicos")) {
        initServicosPageAnimations();
    } else if (document.querySelector("#contato")) { // Contato page specific ID
        initContatoPageAnimations();
    }

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
            gsap.to(window, { duration: 1, scrollTo: 0, ease: "power2.inOut" });
        });
    }
});