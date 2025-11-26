// animations-portfolio.js - Sistema completo de animações do portfolio
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin);

// Hero animations
function initHeroAnimations() {
    // Logo entrance com efeito mais dramático
    gsap.from(".logo", {
        duration: 1.5,
        scale: 0,
        rotation: 360,
        ease: "back.out(1.7)"
    });

    // Menu items com stagger
    gsap.from(".menu-items a", {
        duration: 0.6,
        opacity: 0,
        y: -30,
        stagger: 0.1,
        delay: 0.8,
        ease: "back.out(1.4)"
    });

    // Hero title com efeito de entrada
    gsap.from(".hero-title", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Hero subtitle
    gsap.from(".hero-subtitle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.8
    });

    // Hero buttons
    gsap.from(".hero-buttons .btn", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.2
    });

    // Floating elements
    const elements = document.querySelectorAll('.element');
    elements.forEach((el, index) => {
        gsap.to(el, {
            y: -30,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
        });
    });
}

// Project cards animations
function initProjectAnimations() {
    // Usando batch para melhor performance e confiabilidade em grids
    ScrollTrigger.batch(".project-card", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 0.8, 
            ease: "power3.out"
        }),
        start: "top 90%", // Começa a animar mais cedo
        once: true // Anima apenas uma vez para evitar bugs de scroll
    });
    
    // Configuração inicial via CSS ou set imediato para evitar FOUC
    gsap.set(".project-card", { y: 50, opacity: 0 });
}

// Stats counter
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const targetValue = parseInt(stat.getAttribute('data-count'));
        
        gsap.to(stat, {
            textContent: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: ".about-stats",
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
}

// About section animations
function initAboutAnimations() {
    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".expertise-item", {
        scrollTrigger: {
            trigger: ".expertise-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });
}

// Services section animations
function initServicesAnimations() {
    ScrollTrigger.batch(".service-card", {
        onEnter: batch => gsap.to(batch, {
            opacity: 1, 
            y: 0, 
            stagger: 0.15, 
            overwrite: true, 
            duration: 0.8, 
            ease: "power3.out"
        }),
        start: "top 90%",
        once: true
    });

    gsap.set(".service-card", { y: 50, opacity: 0 });
}

// Contact section animations
function initContactAnimations() {
    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 70%",
            toggleActions: "play none none none"
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".contact-method", {
        scrollTrigger: {
            trigger: ".contact-methods",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)"
    });
}

// Section titles animation
function initSectionTitles() {
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    });
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
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
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimations();
    initProjectAnimations();
    initStatsAnimation();
    initAboutAnimations();
    initServicesAnimations();
    initContactAnimations();
    initSectionTitles();
    initBackToTop();
});