
        // Hiệu ứng background particles
        const bgAnimation = document.querySelector('.bg-animation');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'bg-particle';
            
            // Vị trí ngẫu nhiên
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Kích thước ngẫu nhiên
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Animation delay ngẫu nhiên
            const delay = Math.random() * 5;
            particle.style.animation = `particleAnimation ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = `${delay}s`;
            
            bgAnimation.appendChild(particle);
        }
        
        // Hiệu ứng tilt cho project cards
        const tiltCards = document.querySelectorAll('.tilt-effect');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
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
        
        // Custom cursor effect with social colors
        const cursor = document.querySelector('.custom-cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            // Delay effect for follower
            setTimeout(() => {
                cursorFollower.style.left = `${e.clientX}px`;
                cursorFollower.style.top = `${e.clientY}px`;
            }, 100);
        });
        
        // Changing cursor size on clickable elements
        const clickables = document.querySelectorAll('a, button, .profile-img');
        
        clickables.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'rgba(15, 240, 255, 0.8)';
                cursorFollower.style.width = '30px';
                cursorFollower.style.height = '30px';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'rgba(15, 240, 255, 0.5)';
                cursorFollower.style.width = '40px';
                cursorFollower.style.height = '40px';
            });
        });

        // Social links hover color change for cursor
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                const color = getComputedStyle(link).getPropertyValue('--social-color');
                cursor.style.backgroundColor = color;
                cursorFollower.style.borderColor = color;
            });
            
            link.addEventListener('mouseleave', () => {
                cursor.style.backgroundColor = 'rgba(15, 240, 255, 0.5)';
                cursorFollower.style.borderColor = 'rgba(15, 240, 255, 0.3)';
            });
        });

        // Bubble effect 
        function createBubble() {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            const size = Math.random() * 60 + 20;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.bottom = '-50px';
            
            document.body.appendChild(bubble);
            
            setTimeout(() => {
                bubble.remove();
            }, 8000);
        }

        setInterval(createBubble, 300);

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
                ripple.remove();
            }, 2000);
        });
        
        // Profile image carousel
        const profileImages = document.querySelectorAll('.profile-img');
        let currentProfileIndex = 0;
        
        function rotateProfileImages() {
            // Hide current image
            profileImages[currentProfileIndex].classList.remove('active');
            
            // Increment index and wrap around if needed
            currentProfileIndex = (currentProfileIndex + 1) % profileImages.length;
            
            // Show next image
            profileImages[currentProfileIndex].classList.add('active');
        }
        
        // Rotate image every 5 seconds
        setInterval(rotateProfileImages, 5000);
        
        // Make sure first image is shown initially
        profileImages[0].classList.add('active');