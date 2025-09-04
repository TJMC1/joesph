// Joseph Dixon The Great - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-container a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Observe achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        observer.observe(card);
    });
});

// Tribute functions
function showTribute() {
    // Create a modal or alert for tribute sharing
    const tributeText = prompt(
        'Share your tribute to Joseph Dixon The Great:',
        'Joseph Dixon inspires me to...'
    );

    if (tributeText && tributeText.trim() !== '') {
        alert('Thank you for your tribute! Your words honor Joseph Dixon The Great.');
        console.log('New tribute:', tributeText);
    }
}

function celebrate() {
    // Add celebration animation
    const body = document.body;

    // Create celebration elements
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = getRandomColor();
        body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 3000);
    }

    // Show celebration message
    showCelebrationMessage();
}

function getRandomColor() {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showCelebrationMessage() {
    const message = document.createElement('div');
    message.className = 'celebration-message';
    message.innerHTML = `
        <div class="celebration-content">
            <h3>🎉 Celebrating Joseph Dixon The Great! 🎉</h3>
            <p>May his legacy continue to inspire us all!</p>
        </div>
    `;

    document.body.appendChild(message);

    // Remove message after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 3000);
}

// Add CSS for animations and celebration
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        animation: fall 3s ease-in-out forwards;
        pointer-events: none;
        z-index: 1000;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }

    .celebration-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        text-align: center;
        z-index: 1001;
        animation: popIn 0.5s ease-out;
        border: 3px solid white;
    }

    @keyframes popIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .celebration-content h3 {
        margin-bottom: 15px;
        font-size: 1.5rem;
    }

    .celebration-content p {
        font-size: 1.1rem;
        opacity: 0.9;
    }
`;
document.head.appendChild(style);

// Add hover effects for achievement cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.achievement-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(1deg)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
});
