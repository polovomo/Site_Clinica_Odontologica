// Validação do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Resetar mensagens de erro
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
    document.getElementById('formMessage').style.display = 'none';
    
    // Validar nome
    if (name.value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validar mensagem
    if (message.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    // Se o formulário for válido
    if (isValid) {
        // Simular envio do formulário
        const formMessage = document.getElementById('formMessage');
        formMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Limpar formulário
        document.getElementById('contactForm').reset();
        
        // Rolar para a mensagem de sucesso
        formMessage.scrollIntoView({ behavior: 'smooth' });
    }
});

// Menu mobile
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Ajustar menu ao redimensionar a janela
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

// Adicionar classe ao header quando scrollar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animação de entrada para as seções
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação às seções
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});