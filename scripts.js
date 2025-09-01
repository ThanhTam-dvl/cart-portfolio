let currentLang = 'en';
let currentTheme = 'dark';

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Language toggle
const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    langToggle.textContent = currentLang === 'vi' ? 'EN' : 'VI';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-vi][data-en]').forEach(element => {
        if (currentLang === 'vi') {
            element.textContent = element.getAttribute('data-vi');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// Background particles
const bgAnimation = document.querySelector('.bg-animation');

for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'bg-particle';
    
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const delay = Math.random() * 5;
    particle.style.animation = `particleAnimation ${Math.random() * 10 + 10}s linear infinite`;
    particle.style.animationDelay = `${delay}s`;
    
    bgAnimation.appendChild(particle);
}

// Photo bubbles - Fixed to prevent mobile overflow
function createPhotoBubble() {
    // Don't create bubbles on mobile
    if (window.innerWidth <= 768) return;
    
    const bubble = document.createElement('div');
    bubble.className = 'photo-bubble';
    
    const images = [
        'images/avt-4.JPEG',
        'images/avt-5.JPEG',
        'images/avt-6.JPEG',
        'images/avt-4.JPEG',
        'images/avt-5.JPEG',
        'images/avt-6.JPEG',
    ];
    
    bubble.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)]}')`;
    bubble.style.left = `${Math.random() * 80 + 10}%`; // Keep within bounds
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.remove();
        }
    }, 15000);
}

// Create photo bubbles periodically
setInterval(createPhotoBubble, 5000);

// Project carousel (desktop only)
let currentSlide = 0;
const projects = document.querySelectorAll('.project-card');
const carousel = document.getElementById('projectCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateCarousel() {
    if (window.innerWidth >= 1024) {
        const slideWidth = 33.333;
        carousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    }
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : Math.max(0, projects.length - 3);
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = currentSlide < projects.length - 3 ? currentSlide + 1 : 0;
        updateCarousel();
    });
}

// Auto-rotate carousel
setInterval(() => {
    if (window.innerWidth >= 1024) {
        currentSlide = currentSlide < projects.length - 3 ? currentSlide + 1 : 0;
        updateCarousel();
    }
}, 5000);

// Tilt effect for project cards
const tiltCards = document.querySelectorAll('.tilt-effect');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 10;
        const yRotation = ((x - rect.width / 2) / rect.width) * -10;
        
        card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// Custom cursor effect
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return; // Disable on mobile
    
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    }, 100);
});

// Changing cursor size on clickable elements
const clickables = document.querySelectorAll('a, button, .profile-img, .control-btn');

clickables.forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (window.innerWidth <= 768) return;
        
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    element.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) return;
        
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// Bubble effect - Reduced for mobile
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = window.innerWidth <= 768 ? Math.random() * 30 + 15 : Math.random() * 50 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    bubble.style.left = `${Math.random() * 90 + 5}%`; // Keep within bounds
    bubble.style.bottom = '-50px';
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        if (bubble.parentNode) {
            bubble.remove();
        }
    }, 8000);
}

setInterval(createBubble, window.innerWidth <= 768 ? 1000 : 300);

// Click ripple effect 
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'bubble';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 2000);
});

// Profile image carousel
const profileImages = document.querySelectorAll('.profile-img');
let currentProfileIndex = 0;

function rotateProfileImages() {
    profileImages[currentProfileIndex].classList.remove('active');
    currentProfileIndex = (currentProfileIndex + 1) % profileImages.length;
    profileImages[currentProfileIndex].classList.add('active');
}

setInterval(rotateProfileImages, 5000);
profileImages[0].classList.add('active');

// Responsive handling
window.addEventListener('resize', () => {
    if (window.innerWidth < 1024) {
        carousel.style.transform = 'translateX(0)';
    } else {
        updateCarousel();
    }
});