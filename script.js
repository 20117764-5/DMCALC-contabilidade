document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. Header muda de cor ao rolar (Efeito Glass/Solid)
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Sistema de Scroll Reveal (Animações ao rolar)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Gatilho quando 15% do elemento estiver visível
        rootMargin: "0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});