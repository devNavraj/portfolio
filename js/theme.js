// ========================================
// Theme Toggle Functionality
// ========================================

class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        // Apply stored theme or default
        this.applyTheme(this.theme);

        // Add event listener to toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme preference changes
        this.watchSystemTheme();
    }

    /**
     * Get stored theme from localStorage
     */
    getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (error) {
            console.warn('localStorage not available:', error);
            return null;
        }
    }

    /**
     * Store theme in localStorage
     */
    setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (error) {
            console.warn('localStorage not available:', error);
        }
    }

    /**
     * Apply theme to document
     */
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        this.setStoredTheme(theme);

        // Update meta theme-color for mobile browsers
        this.updateMetaThemeColor(theme);

        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }

    /**
     * Toggle between dark and light theme
     */
    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);

        // Add animation class to body for smooth transition
        document.body.classList.add('theme-transitioning');
        setTimeout(() => {
            document.body.classList.remove('theme-transitioning');
        }, 300);
    }

    /**
     * Update meta theme-color tag for mobile browsers
     */
    updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        metaThemeColor.content = theme === 'dark' ? '#0a0a0f' : '#f8f9fa';
    }

    /**
     * Watch for system theme preference changes
     */
    watchSystemTheme() {
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Only auto-switch if user hasn't set a preference
            darkModeQuery.addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    const systemTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme(systemTheme);
                }
            });
        }
    }

    /**
     * Get current theme
     */
    getCurrentTheme() {
        return this.theme;
    }
}

// Initialize theme manager when DOM is loaded
let themeManager;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        themeManager = new ThemeManager();
    });
} else {
    themeManager = new ThemeManager();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeManager;
}
