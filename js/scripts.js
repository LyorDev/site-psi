/**
 * Interações e funcionalidades da Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones
    feather.replace();

    // Lógica do Accordion (FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Toggle active class on header
            header.classList.toggle('active');

            if (header.classList.contains('active')) {
                // Expanding
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                // Collapsing
                content.style.maxHeight = "0px";
            }

            // Close other open accordions optionally (if you want only one open at a time)
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = "0px";
                }
            });
        });
    });

    // Animação de entrada suave no Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});

// Ação de Clique WhatsApp
function openWhatsApp() {
    // Link padronizado da API do WhatsApp. 
    // Substituir '5511999999999' pelo número real depois.
    const phoneNumber = "5511999999999"; 
    const message = encodeURIComponent("Olá, Dra. Carla. Estive vendo o seu site e gostaria de saber mais sobre como agendar a minha primeira sessão.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
}
