// ========================================
// Navigation & Smooth Scrolling
// ========================================

class NavigationManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');

        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupHamburgerMenu();
        this.setupScrollSpy();
        this.setupNavbarScroll();
    }

    /**
     * Setup smooth scrolling for navigation links
     */
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Only handle internal links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);

                    if (targetSection) {
                        const headerOffset = 80;
                        const elementPosition = targetSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });

                        // Close mobile menu if open
                        this.closeMobileMenu();

                        // Update URL without jumping
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    }

    /**
     * Setup hamburger menu for mobile
     */
    setupHamburgerMenu() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu.classList.contains('active')) {
                if (!this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
    }

    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Setup scroll spy to highlight active section
     */
    setupScrollSpy() {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.setActiveLink(id);
                }
            });
        }, observerOptions);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    /**
     * Set active navigation link
     */
    setActiveLink(sectionId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Setup navbar scroll behavior
     */
    setupNavbarScroll() {
        let lastScroll = 0;
        const scrollThreshold = 100;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add scrolled class when scrolled down
            if (currentScroll > scrollThreshold) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    /**
     * Scroll to top
     */
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize navigation manager
let navigationManager;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        navigationManager = new NavigationManager();
    });
} else {
    navigationManager = new NavigationManager();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationManager;
}
