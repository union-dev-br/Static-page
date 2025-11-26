// project-details.js
gsap.registerPlugin(ScrollTrigger);

// Animações específicas para páginas de projeto
function initProjectDetailAnimations() {
    // Hero animations
    gsap.from(".project-badge", {
        duration: 1,
        scale: 0,
        rotation: -180,
        ease: "back.out(1.7)"
    });

    gsap.from(".project-title", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });

    // Stats counter
    gsap.utils.toArray('.stat-number').forEach(stat => {
        ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            onEnter: () => animateCounter(stat)
        });
    });

    // Tech stack items animation
    gsap.to(".tech-item", {
        scrollTrigger: {
            trigger: ".tech-stack",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Challenge cards animation
    gsap.to(".challenge-card", {
        scrollTrigger: {
            trigger: ".challenges-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Architecture layer animation
    gsap.to(".arch-layer", {
        scrollTrigger: {
            trigger: ".arch-diagram",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Technical features animation
    gsap.to(".tech-feature", {
        scrollTrigger: {
            trigger: ".technical-features",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Stakeholder cards animation
    gsap.to(".stakeholder-card", {
        scrollTrigger: {
            trigger: ".ecosystem-flow",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Role cards animation
    gsap.to(".role-card", {
        scrollTrigger: {
            trigger: ".roles-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Flow items animation
    gsap.to(".flow-item", {
        scrollTrigger: {
            trigger: ".websocket-flow",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // Realtime features animation
    gsap.to(".realtime-feature", {
        scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    });

    // Metric cards animation
    gsap.to(".metric-card", {
        scrollTrigger: {
            trigger: ".dashboard-grid",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Payment steps animation
    gsap.to(".payment-step", {
        scrollTrigger: {
            trigger: ".payment-flow",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    });
}

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Carousel functionality
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active states
        document.querySelectorAll('.carousel-slide').forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    // Navigation
    document.querySelector('.carousel-next').addEventListener('click', () => {
        goToSlide((currentSlide + 1) % slides.length);
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    });

    // Auto-advance
    setInterval(() => {
        goToSlide((currentSlide + 1) % slides.length);
    }, 5000);
}

// Video controls
function initVideoDemo() {
    const video = document.querySelector('.video-demo video');
    const playButton = document.querySelector('.play-button');
    const overlay = document.querySelector('.video-overlay');

    playButton.addEventListener('click', () => {
        video.play();
        overlay.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        overlay.style.display = 'flex';
    });
}

// Inicializar animações específicas da página
function initFlutterWebAnimations() {
    // Animar cards de funcionalidades
    gsap.utils.toArray('.feature-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });
    
    // Animar estrutura do projeto
    gsap.from('.structure-tree', {
        scrollTrigger: {
            trigger: '.project-structure',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
}

// Expandir/contrair pastas na estrutura do projeto
function initFolderToggle() {
    const folders = document.querySelectorAll('.folder-name');
    
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const contents = folder.nextElementSibling;
            if (contents) {
                contents.classList.toggle('expanded');
                
                // Animação GSAP para expandir/contrair
                if (contents.classList.contains('expanded')) {
                    gsap.to(contents, {
                        height: 'auto',
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(contents, {
                        height: 0,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                }
            }
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initProjectDetailAnimations();
    initCarousel();
    initVideoDemo();
    initFlutterWebAnimations();
    initFolderToggle();
    
    // Animate floating elements with GSAP
    document.querySelectorAll('[data-gsap]').forEach(el => {
        const config = JSON.parse(el.getAttribute('data-gsap'));
        gsap.to(el, config);
    });
});