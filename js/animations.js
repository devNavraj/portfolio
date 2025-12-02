// ========================================
// Scroll Reveal Animations
// ========================================

class AnimationManager {
    constructor() {
        this.revealElements = [];
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupScrollReveal();
            });
        } else {
            this.setupScrollReveal();
        }
    }

    /**
     * Setup scroll reveal animations
     */
    setupScrollReveal() {
        // Find all elements with reveal classes
        this.revealElements = document.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right, .reveal-scale'
        );

        if (this.revealElements.length === 0) {
            return;
        }

        // Create intersection observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Optionally unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        this.revealElements.forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Add reveal animation to element
     */
    static addReveal(element, type = 'reveal', delay = 0) {
        if (!element) return;

        element.classList.add(type);

        if (delay > 0) {
            element.style.transitionDelay = `${delay}s`;
        }
    }

    /**
     * Trigger reveal animation manually
     */
    static triggerReveal(element) {
        if (!element) return;
        element.classList.add('active');
    }
}

// ========================================
// Initialize Animation Manager
// ========================================

let animationManager;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        animationManager = new AnimationManager();
    });
} else {
    animationManager = new AnimationManager();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationManager;
}
