# Nawaraj Rai - Portfolio Website

A modern, glassmorphic portfolio website showcasing expertise in AI/ML, Computer Vision, and Natural Language Processing. Built with pure HTML, CSS, and JavaScript for optimal performance and easy deployment.

## 🌟 Features

- **Glassmorphism Design**: Modern frosted glass UI with backdrop blur effects
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-reveal animations and smooth transitions
- **SEO Optimized**: Semantic HTML, meta tags, structured data, sitemap
- **Performance Focused**: Loads in <3 seconds, optimized assets, lazy loading
- **Accessible**: WCAG AA compliant, keyboard navigation, ARIA labels
- **Zero Dependencies**: Pure vanilla JavaScript, no frameworks needed

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/devNavraj/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Or simply open index.html in your browser
   ```

3. **View the site**
   Navigate to `http://localhost:8000`

## 📦 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # CSS custom properties (themes)
│   ├── reset.css           # Browser normalization
│   ├── glassmorphism.css   # Glass effect components
│   ├── components.css      # Reusable components
│   ├── sections.css        # Section-specific styles
│   ├── animations.css      # Keyframes & transitions
│   └── responsive.css      # Media queries
├── js/
│   ├── config.js           # Site configuration & data
│   ├── theme.js            # Theme toggle functionality
│   ├── navigation.js       # Smooth scroll & nav
│   ├── animations.js       # Scroll reveal animations
│   └── main.js             # Application entry point
├── assets/
│   ├── Resume_Nawaraj.pdf  # Downloadable resume
│   ├── images/             # Project screenshots, icons
│   └── icons/              # Favicons
├── vercel.json             # Vercel configuration
├── netlify.toml            # Netlify configuration
├── _headers                # Security headers (Netlify)
├── robots.txt              # SEO crawler config
├── sitemap.xml             # SEO sitemap
└── README.md               # This file
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or use the Vercel Dashboard:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

### Deploy to Netlify

1. **Using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Using Netlify Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the project folder
   - Or connect your GitHub repository

3. **Configure Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain
   - Configure DNS

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/devNavraj/portfolio-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

3. **Access your site**
   - URL: `https://devNavraj.github.io/portfolio-website/`

## 🎨 Customization

### Update Personal Information

Edit `js/config.js`:

```javascript
const CONFIG = {
    personal: {
        name: 'Your Name',
        title: 'Your Title',
        email: 'your.email@example.com',
        // ...
    }
};
```

### Add/Remove Projects

Edit the project arrays in `js/config.js`:

```javascript
featuredProjects: [
    {
        title: 'Project Title',
        description: 'Project description...',
        tech: ['Tech1', 'Tech2'],
        github: 'https://github.com/username/repo',
        category: 'featured'
    }
]
```

### Modify Theme Colors

Edit `css/variables.css`:

```css
:root[data-theme="dark"] {
    --color-accent-primary: #your-color;
    --gradient-primary: linear-gradient(...);
}
```

### Update Resume

Replace `assets/Resume_Nawaraj.pdf` with your resume file.

## 🔧 Configuration

### SEO Configuration

Update these files:
- `index.html`: Meta tags, title, description
- `sitemap.xml`: Update URLs and dates
- `robots.txt`: Configure crawler access

### Analytics Integration

Add Google Analytics or other tracking in `js/main.js`:

```javascript
// Add your analytics code
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Load Time: <3 seconds on standard connections
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## 🔒 Security

- HTTPS enforced
- Security headers configured (X-Frame-Options, CSP, etc.)
- No external dependencies from CDNs
- Self-hosted fonts and assets

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nawaraj Rai**
- GitHub: [@devNavraj](https://github.com/devNavraj)
- LinkedIn: [nawaraj-rai](https://linkedin.com/in/nawaraj-rai)
- Email: nawarajrai37@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern glassmorphism trends
- Icons from [Heroicons](https://heroicons.com/)
- Fonts: Inter & JetBrains Mono from Google Fonts

## 🐛 Issues & Contributions

Found a bug or have a suggestion? Please open an issue on GitHub.

## 📞 Contact

For any questions or opportunities, feel free to reach out:
- Email: nawarajrai37@gmail.com
- LinkedIn: https://linkedin.com/in/nawaraj-rai

---

**Built with ❤️ using HTML, CSS, and JavaScript**
