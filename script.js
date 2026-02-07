/* ============================================
   💍 ROMANTIC PROPOSAL WEBSITE FOR ISHA
   Interactive JavaScript - Magic & Animations
   ============================================ */

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initFloatingElements();
    initSparkleTrail();
    initMusicToggle();
    initGiftBox();
    initReasonCards();
    initScrollAnimations();
});

// ==================== FLOATING HEARTS & PETALS ====================
function initFloatingElements() {
    const heartsContainer = document.getElementById('heartsContainer');
    const petalsContainer = document.getElementById('petalsContainer');
    const particlesContainer = document.getElementById('particlesContainer');
    
    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💕', '💖', '💗', '💝', '❤️', '💘'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (8 + Math.random() * 6) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        heartsContainer.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => heart.remove(), 15000);
    }
    
    // Create rose petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (8 + Math.random() * 8) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Vary petal colors
        const colors = [
            'linear-gradient(135deg, #ff6b8a, #ff85a2)',
            'linear-gradient(135deg, #ff85a2, #ffa0b4)',
            'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
            'linear-gradient(135deg, #ff69b4, #ff85c8)'
        ];
        petal.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), 18000);
    }
    
    // Create magic particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 10000);
    }
    
    // Spawn floating elements continuously
    setInterval(createHeart, 1500);
    setInterval(createPetal, 800);
    setInterval(createParticle, 500);
    
    // Initial batch
    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 200);
        setTimeout(createPetal, i * 150);
        setTimeout(createParticle, i * 100);
    }
}

// ==================== SPARKLE TRAIL ====================
function initSparkleTrail() {
    const sparkleTrail = document.getElementById('sparkleTrail');
    let throttle = false;
    
    document.addEventListener('mousemove', (e) => {
        if (throttle) return;
        throttle = true;
        
        setTimeout(() => {
            throttle = false;
        }, 50);
        
        createSparkle(e.clientX, e.clientY);
    });
    
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'trail-sparkle';
        sparkle.style.left = (x - 4) + 'px';
        sparkle.style.top = (y - 4) + 'px';
        
        // Random colors for sparkles
        const colors = ['#d4af37', '#ffd1dc', '#ff6b8a', '#ffffff'];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        sparkleTrail.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
    }
}

// ==================== MUSIC TOGGLE ====================
function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(err => {
                console.log('Audio autoplay blocked:', err);
            });
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
}

// ==================== GIFT BOX - THE SURPRISE! ====================
function initGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const proposalReveal = document.getElementById('proposalReveal');
    const yesButton = document.getElementById('yesButton');
    const shyButton = document.getElementById('shyButton');
    const celebrationSection = document.getElementById('celebration');
    const confettiContainer = document.getElementById('confettiContainer');
    
    let isOpened = false;
    
    giftBox.addEventListener('click', () => {
        if (isOpened) return;
        
        // Open animation
        giftBox.classList.add('opening');
        
        // Create burst effect
        createBurstEffect();
        
        // Show proposal after animation
        setTimeout(() => {
            giftBox.classList.add('opened');
            proposalReveal.classList.add('visible');
            
            // Trigger confetti!
            launchConfetti();
            
            // Play heartbeat sound effect (optional)
            playHeartbeat();
        }, 800);
        
        isOpened = true;
    });
    
    // YES Button - Celebration!
    yesButton.addEventListener('click', () => {
        // Epic celebration!
        launchMassiveConfetti();
        
        // Create heart explosion
        createHeartExplosion();
        
        // Show celebration section
        setTimeout(() => {
            celebrationSection.classList.add('visible');
            celebrationSection.scrollIntoView({ behavior: 'smooth' });
            
            // Continuous celebration confetti
            setInterval(launchConfetti, 3000);
        }, 500);
        
        // Feedback animation on button
        yesButton.innerHTML = '<span>I Love You Too! 💕</span>';
        yesButton.style.pointerEvents = 'none';
        shyButton.style.display = 'none';
    });
    
    // Shy Button - Cute response
    let shyClickCount = 0;
    const shyMessages = [
        'Pleeease? 🥺',
        'Tum toh meri ho! 💕',
        'Kabhi nahi bolunga nahi! 🙈',
        'Haan bol do na... 💖',
        'Main wait karunga hamesha! ❤️'
    ];
    
    shyButton.addEventListener('click', () => {
        shyClickCount++;
        
        if (shyClickCount < shyMessages.length) {
            shyButton.innerHTML = `<span>${shyMessages[shyClickCount]}</span>`;
            
            // Button tries to "escape"
            const randomX = (Math.random() - 0.5) * 100;
            const randomY = (Math.random() - 0.5) * 50;
            shyButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
            
            setTimeout(() => {
                shyButton.style.transform = 'translate(0, 0)';
            }, 300);
        } else {
            // After many clicks, hide shy button
            shyButton.innerHTML = '<span>Okay okay... 💕</span>';
            setTimeout(() => {
                shyButton.style.display = 'none';
            }, 1000);
        }
    });
    
    // Burst effect when opening gift
    function createBurstEffect() {
        const surpriseSection = document.getElementById('surprise');
        const centerX = window.innerWidth / 2;
        const centerY = surpriseSection.offsetTop + 300;
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const burst = document.createElement('div');
                burst.className = 'floating-heart';
                burst.innerHTML = ['💕', '💖', '✨', '💝', '⭐'][Math.floor(Math.random() * 5)];
                burst.style.position = 'fixed';
                burst.style.left = centerX + 'px';
                burst.style.top = centerY + 'px';
                burst.style.fontSize = (1.5 + Math.random()) + 'rem';
                burst.style.zIndex = '1000';
                
                const angle = (i / 30) * Math.PI * 2;
                const velocity = 150 + Math.random() * 100;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                burst.style.animation = 'none';
                burst.style.transition = 'all 1s ease-out';
                
                document.body.appendChild(burst);
                
                setTimeout(() => {
                    burst.style.left = (centerX + vx) + 'px';
                    burst.style.top = (centerY + vy) + 'px';
                    burst.style.opacity = '0';
                    burst.style.transform = 'scale(0.5)';
                }, 50);
                
                setTimeout(() => burst.remove(), 1100);
            }, i * 30);
        }
    }
    
    // Confetti launcher
    function launchConfetti() {
        const colors = ['#ff6b8a', '#ffd1dc', '#d4af37', '#ff85c8', '#ff4757', '#f7e7ce', '#ff69b4'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.width = (8 + Math.random() * 8) + 'px';
                confetti.style.height = (8 + Math.random() * 15) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                
                confettiContainer.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
    }
    
    // Massive confetti for YES
    function launchMassiveConfetti() {
        for (let wave = 0; wave < 3; wave++) {
            setTimeout(() => {
                launchConfetti();
            }, wave * 500);
        }
    }
    
    // Heart explosion for YES
    function createHeartExplosion() {
        const hearts = ['💕', '💖', '💗', '💝', '❤️', '💘', '💓', '💞', '💟'];
        
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '50vh';
                heart.style.fontSize = (2 + Math.random() * 2) + 'rem';
                heart.style.zIndex = '1000';
                heart.style.animation = `floatHeart ${4 + Math.random() * 3}s ease-out forwards`;
                
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 7000);
            }, i * 50);
        }
    }
    
    // Heartbeat sound effect (visual simulation)
    function playHeartbeat() {
        const ring = document.querySelector('.ring');
        if (ring) {
            ring.style.animation = 'ringFloat 1s ease-in-out infinite, heartBeatFinal 1s ease-in-out 3';
            setTimeout(() => {
                ring.style.animation = 'ringFloat 3s ease-in-out infinite, ringSpin 8s linear infinite';
            }, 3000);
        }
    }
}

// ==================== REASON CARDS ====================
function initReasonCards() {
    const cards = document.querySelectorAll('.reason-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle flipped state
            card.classList.toggle('flipped');
            
            // Create sparkle effect on flip
            createCardSparkle(card);
        });
    });
    
    function createCardSparkle(card) {
        const rect = card.getBoundingClientRect();
        
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'trail-sparkle';
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.zIndex = '1000';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 800);
        }
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.intro-section, .letter-section, .reasons-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger letter animation
                if (entry.target.classList.contains('letter-section')) {
                    const lines = entry.target.querySelectorAll('.letter-line');
                    lines.forEach((line, index) => {
                        line.style.animationPlayState = 'running';
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Subtle parallax for floating elements
        const hearts = document.querySelectorAll('.floating-heart');
        hearts.forEach(heart => {
            const speed = 0.5;
            heart.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ==================== EASTER EGG - SPECIAL MESSAGE ====================
// Type "iloveyou" anywhere to trigger special effect
let easterEggBuffer = '';
document.addEventListener('keydown', (e) => {
    easterEggBuffer += e.key.toLowerCase();
    
    if (easterEggBuffer.includes('iloveyou')) {
        triggerEasterEgg();
        easterEggBuffer = '';
    }
    
    // Reset buffer if too long
    if (easterEggBuffer.length > 20) {
        easterEggBuffer = easterEggBuffer.slice(-10);
    }
});

function triggerEasterEgg() {
    // Create massive heart explosion
    const hearts = ['💕', '💖', '💗', '💝', '❤️', '💘', '💓', '💞', '💟', '😘', '🥰', '😍'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (2 + Math.random() * 3) + 'rem';
            heart.style.zIndex = '10000';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartBeatFinal 1s ease-in-out';
            heart.style.transition = 'all 2s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.opacity = '0';
                heart.style.transform = 'scale(2) translateY(-50px)';
            }, 100);
            
            setTimeout(() => heart.remove(), 2100);
        }, i * 30);
    }
    
    // Display special message
    const message = document.createElement('div');
    message.innerHTML = '💕 I Love You Too, Jaan! 💕';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Great Vibes', cursive;
        font-size: 4rem;
        color: #d4af37;
        z-index: 10001;
        text-shadow: 0 0 30px rgba(212, 175, 55, 0.8);
        animation: celebrateText 1s ease-out;
        pointer-events: none;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.transition = 'all 1s ease-out';
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(1.5)';
        setTimeout(() => message.remove(), 1000);
    }, 3000);
}

// ==================== TOUCH SUPPORT FOR MOBILE ====================
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    
    // Create sparkle on touch
    const sparkle = document.createElement('div');
    sparkle.className = 'trail-sparkle';
    sparkle.style.left = (touch.clientX - 4) + 'px';
    sparkle.style.top = (touch.clientY - 4) + 'px';
    sparkle.style.width = '15px';
    sparkle.style.height = '15px';
    
    document.getElementById('sparkleTrail').appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 800);
});

// ==================== PRELOAD ANIMATIONS ====================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Ensure curtain animation plays
    const curtains = document.querySelectorAll('.curtain');
    curtains.forEach(curtain => {
        curtain.style.animationPlayState = 'running';
    });
});

console.log('💍 Made with love for Isha 💕');
console.log('🔐 Easter Egg: Type "iloveyou" anywhere for a surprise!');
