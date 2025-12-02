// ========================================
// Main Application Logic
// ========================================

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.onDOMReady();
            });
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        console.log('🚀 PortfolioApp: DOM Ready');

        // Check if CONFIG is available
        if (typeof CONFIG === 'undefined') {
            console.error('❌ CONFIG is not defined. Make sure config.js is loaded before main.js');
            return;
        }

        console.log('✅ CONFIG loaded:', CONFIG);
        console.log('📊 Projects:', {
            featured: CONFIG.featuredProjects?.length,
            academic: CONFIG.academicProjects?.length,
            notable: CONFIG.notableProjects?.length
        });

        this.renderProjects();
        this.renderSkills();
        this.renderTimeline();
        this.setupEventListeners();

        console.log('✅ All sections rendered');
    }

    /**
     * Render featured projects
     */
    renderProjects() {
        console.log('🎨 Rendering projects...');

        // Render Featured Projects
        const featuredContainer = document.getElementById('featuredProjects');
        console.log('📦 Featured container:', featuredContainer);
        if (featuredContainer && CONFIG && CONFIG.featuredProjects) {
            const html = CONFIG.featuredProjects.map(project =>
                this.createProjectCard(project, 'featured')
            ).join('');
            featuredContainer.innerHTML = html;
            console.log(`✅ Rendered ${CONFIG.featuredProjects.length} featured projects`);
        } else {
            console.warn('⚠️ Could not render featured projects', {
                container: !!featuredContainer,
                config: !!CONFIG,
                projects: !!CONFIG?.featuredProjects
            });
        }

        // Render Academic Projects
        const academicContainer = document.getElementById('academicProjects');
        if (academicContainer && CONFIG && CONFIG.academicProjects) {
            const html = CONFIG.academicProjects.map(project =>
                this.createProjectCard(project, 'academic')
            ).join('');
            academicContainer.innerHTML = html;
            console.log(`✅ Rendered ${CONFIG.academicProjects.length} academic projects`);
        }

        // Render Notable Projects
        const notableContainer = document.getElementById('notableProjects');
        if (notableContainer && CONFIG && CONFIG.notableProjects) {
            const html = CONFIG.notableProjects.map(project =>
                this.createProjectCard(project, 'notable')
            ).join('');
            notableContainer.innerHTML = html;
            console.log(`✅ Rendered ${CONFIG.notableProjects.length} notable projects`);
        }
    }

    /**
     * Create project card HTML
     */
    createProjectCard(project, size = 'medium') {
        const techTags = project.tech.map(tech => {
            const techClass = this.getTechClass(tech);
            return `<span class="tech-tag ${techClass}">${tech}</span>`;
        }).join('');

        return `
            <div class="glass-card project-card">
                <div class="project-card-header">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View on GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techTags}
                </div>
            </div>
        `;
    }

    /**
     * Get tech tag class based on technology
     */
    getTechClass(tech) {
        const aiTech = ['PyTorch', 'TensorFlow', 'Keras', 'DistilBERT', 'BERT', 'RoBERTa', 'GPT-4', 'Gemini', 'Llama', 'Mistral', 'Qwen'];
        const frameworks = ['Flask', 'FastAPI', 'Django', 'Spring Boot', 'LangChain', 'Hugging Face'];
        const languages = ['Python', 'Java', 'JavaScript'];

        if (aiTech.some(t => tech.includes(t))) return 'ai';
        if (frameworks.some(t => tech.includes(t))) return 'framework';
        if (languages.includes(tech)) return 'language';
        return 'tool';
    }

    /**
     * Render skills section
     */
    renderSkills() {
        const skillsContainer = document.getElementById('skillsGrid');
        if (!skillsContainer || !CONFIG || !CONFIG.skills) return;

        const skillsHTML = Object.values(CONFIG.skills).map(category => {
            const skillItems = category.items.map(skill =>
                `<span class="tech-tag">${skill}</span>`
            ).join('');

            return `
                <div class="glass-card skill-card">
                    <div class="skill-header">
                        <div class="skill-icon">${category.icon}</div>
                        <h3 class="skill-title">${category.title}</h3>
                    </div>
                    <div class="skill-items">
                        ${skillItems}
                    </div>
                </div>
            `;
        }).join('');

        skillsContainer.innerHTML = skillsHTML;
    }

    /**
     * Render timeline
     */
    renderTimeline() {
        const timelineContainer = document.getElementById('timeline');
        if (!timelineContainer || !CONFIG || !CONFIG.timeline) return;

        const timelineHTML = CONFIG.timeline.map((item, index) => {
            const descriptionItems = item.description.map(desc =>
                `<li>${desc}</li>`
            ).join('');

            const typeIcon = item.type === 'education' ? '🎓' : '💼';

            return `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${typeIcon} ${item.date}</div>
                        <h3 class="timeline-title">${item.title}</h3>
                        <div class="timeline-company">${item.organization}</div>
                        <div class="timeline-location">📍 ${item.location}</div>
                        <ul class="timeline-description">
                            ${descriptionItems}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');

        timelineContainer.innerHTML = timelineHTML;
    }

    /**
     * Setup additional event listeners
     */
    setupEventListeners() {
        // Handle form submissions, button clicks, etc.
        this.setupDownloadButton();
        this.setupContactLinks();
    }

    /**
     * Setup download resume button
     */
    setupDownloadButton() {
        const downloadButtons = document.querySelectorAll('a[download]');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Track download event (can integrate with analytics)
                console.log('Resume download initiated');
            });
        });
    }

    /**
     * Setup contact links
     */
    setupContactLinks() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        emailLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Email link clicked');
            });
        });

        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.addEventListener('click', () => {
                console.log('Phone link clicked');
            });
        });
    }

    /**
     * Utility: Debounce function
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Utility: Throttle function
     */
    static throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ========================================
// Initialize Application
// ========================================

const app = new PortfolioApp();

// ========================================
// Performance Optimization
// ========================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Analytics & Tracking (Optional)
// ========================================

// You can add Google Analytics or other tracking here
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully');
    console.log('Performance metrics:', {
        loadTime: performance.now(),
        navigation: performance.getEntriesByType('navigation')[0]
    });
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioApp;
}
