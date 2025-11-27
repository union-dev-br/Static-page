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

    // Stats counter - Set initial state
    gsap.set(".stat-card", { opacity: 1, y: 0 });
    
    gsap.utils.toArray('.stat-number').forEach(stat => {
        ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            onEnter: () => animateCounter(stat),
            once: true
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

    // Anti-Fraud cards animation
    gsap.to(".fraud-card", {
        scrollTrigger: {
            trigger: ".fraud-cards",
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

    // Layer items animation (sequential reveal)
    gsap.to(".layer-item", {
        scrollTrigger: {
            trigger: ".layers-stack",
            start: "top 80%",
            toggleActions: "play none none none",
            once: true
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
    });

    // Flow steps animation
    gsap.to(".flow-step", {
        scrollTrigger: {
            trigger: ".flow-steps",
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

    // Fraud metrics animation
    gsap.to(".metric-card.highlight", {
        scrollTrigger: {
            trigger: ".metrics-grid",
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
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    // Validação: se não existirem elementos, não inicializa
    if (!track || !slides.length || !dotsContainer || !prevBtn || !nextBtn) {
        console.warn('Carousel elements not found');
        return;
    }

    let currentSlide = 0;
    let autoplayInterval = null;

    // Criar dots dinamicamente
    dotsContainer.innerHTML = ''; // Limpar dots existentes
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('type', 'button');
        dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            stopAutoplay();
            goToSlide(index);
            startAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        // Garantir que o índice está no range válido
        currentSlide = (index + slides.length) % slides.length;
        
        // Aplicar transformação
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Atualizar estados ativos
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay(); // Limpar intervalo existente
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    // Event listeners para navegação
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    // Pausar autoplay ao passar o mouse
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Suporte para teclado
    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            stopAutoplay();
            prevSlide();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            stopAutoplay();
            nextSlide();
            startAutoplay();
        }
    });

    // Iniciar autoplay
    startAutoplay();
    
    // Garantir que o primeiro slide está visível
    goToSlide(0);
}

// Video controls
function initVideoDemo() {
    const video = document.querySelector('.video-demo video');
    const playButton = document.querySelector('.play-button');
    const overlay = document.querySelector('.video-overlay');

    if (!video || !playButton || !overlay) return;

    playButton.addEventListener('click', () => {
        video.play();
        overlay.classList.add('hidden');
    });

    video.addEventListener('play', () => {
        overlay.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
        if (video.currentTime === 0 || video.ended) {
            overlay.classList.remove('hidden');
        }
    });

    video.addEventListener('ended', () => {
        overlay.classList.remove('hidden');
    });

    // Permitir clique direto no vídeo para play/pause
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            overlay.classList.add('hidden');
        } else {
            video.pause();
        }
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