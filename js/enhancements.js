// ========================================
// UI Enhancements
// Typing animation, particles, and enhanced interactions
// ========================================

class UIEnhancements {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        this.initTypingAnimation();
        this.initParticles();
        this.initEnhancedScrollReveal();
        this.initNavUnderline();
    }

    // ===================================
    // Typing Animation for Hero Section
    // ===================================
    initTypingAnimation() {
        const typingElement = document.querySelector('[data-typing]');
        if (!typingElement) return;

        const roles = [
            'AI & Machine Learning Engineer',
            'Full Stack Developer',
            'NLP Specialist',
            'Computer Vision Engineer',
            'LLM & GenAI Developer'
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before next role
            }

            setTimeout(type, typeSpeed);
        };

        type();
    }

    // ===================================
    // Floating Particles Background
    // ===================================
    initParticles() {
        const particlesContainer = document.querySelector('[data-particles]');
        if (!particlesContainer) return;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle-dot';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // ===================================
    // Enhanced Scroll Reveal with Stagger
    // ===================================
    initEnhancedScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Stagger child elements if they exist
                    const children = entry.target.querySelectorAll('[data-stagger]');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('active');
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal, [data-reveal]').forEach(el => {
            observer.observe(el);
        });
    }

    // ===================================
    // Navigation Link Active Underline
    // ===================================
    initNavUnderline() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link-modern');

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}

// ===================================
// Additional Helper Functions
// ===================================

/**
 * Add gradient text effect to elements
 */
function applyGradientText(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.classList.add('gradient-text');
    });
}

/**
 * Animate counters for stats
 */
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = isDecimal ? target.toFixed(2) : Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = isDecimal ? current.toFixed(2) : Math.round(current);
        }
    }, 16);
}

/**
 * Create ripple effect on click
 */
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple-effect');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

/**
 * Smooth scroll with offset for fixed header
 */
function smoothScrollTo(targetId, offset = 80) {
    const target = document.querySelector(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Copy text to clipboard with feedback
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy', 'error');
    }
}

/**
 * Show temporary notification
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-md);
        color: var(--color-text-primary);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Initialize all enhancements
 */
function initEnhancements() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-gradient, .btn-outline').forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Apply gradient text to specific elements
    applyGradientText('[data-gradient]');

    // Animate stats when in view
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const value = parseFloat(entry.target.dataset.value);
                animateCounter(entry.target, value);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(el => {
        statObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                smoothScrollTo(targetId);
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements);
} else {
    initEnhancements();
}

// Initialize UI Enhancements
const uiEnhancements = new UIEnhancements();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UIEnhancements,
        applyGradientText,
        animateCounter,
        createRipple,
        smoothScrollTo,
        copyToClipboard,
        showNotification
    };
}
