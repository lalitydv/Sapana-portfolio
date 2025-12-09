# ZC Portfolio Website

A modern, animated personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features light/dark mode, smooth animations, SEO optimization, and a fully responsive design.

## 🚀 Features

- **23+ Reusable Components**: Navbar, ThemeSwitcher, HeroIntro, ProfileCard, SkillsGrid, ServicesCard, ProjectShowcaseCard, ExperienceTimeline, EducationTimeline, TestimonialsSlider, ContactForm, Footer, MobileMenuDrawer, ScrollToTopButton, ResumeDownloadButton, BlogCard, PricingCard, FAQAccordion, SearchBar, Pagination, FilterTabs, StatsCard, TestimonialCard, CaseStudyCard
- **27+ Pages**: All pages with 10+ sections each
  - **Main Pages**: Home, About, Skills, Projects, Resume, Contact
  - **Content Pages**: Blog, Blog Post, Services, Testimonials, Case Studies, Case Study Detail
  - **Business Pages**: Pricing, FAQ, Gallery, Achievements, Certifications
  - **Resource Pages**: Tools & Resources, Learning Resources, Open Source
  - **Additional Pages**: Speaking & Events, Press & Media, Newsletter
  - **Legal Pages**: Privacy Policy, Terms of Service
  - **Utility Pages**: 404 Not Found, Project Detail
- **Advanced Features**: 
  - Search functionality
  - Filtering and pagination
  - Interactive components (accordions, sliders, tabs)
  - Form handling
  - Dynamic routing
- **Light/Dark Mode**: Persistent theme switching with smooth transitions
- **Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags and structured data ready
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client (for API calls)
- **Lucide React** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zc-portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
zc-portfolio-website/
├── src/
│   ├── components/          # 23+ Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   ├── HeroIntro.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── SkillsGrid.jsx
│   │   ├── ServicesCard.jsx
│   │   ├── ProjectShowcaseCard.jsx
│   │   ├── ExperienceTimeline.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── TestimonialsSlider.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── MobileMenuDrawer.jsx
│   │   ├── ScrollToTopButton.jsx
│   │   ├── ResumeDownloadButton.jsx
│   │   ├── BlogCard.jsx
│   │   ├── PricingCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Pagination.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── StatsCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── CaseStudyCard.jsx
│   ├── pages/               # 27+ Page components (each with 10+ sections)
│   │   ├── Home.jsx (12 sections)
│   │   ├── About.jsx (11 sections)
│   │   ├── Skills.jsx (11 sections)
│   │   ├── Projects.jsx (10 sections)
│   │   ├── ProjectDetail.jsx (11 sections)
│   │   ├── Resume.jsx (11 sections)
│   │   ├── Contact.jsx (10 sections)
│   │   ├── Blog.jsx (10 sections)
│   │   ├── BlogPost.jsx (10 sections)
│   │   ├── Services.jsx (10 sections)
│   │   ├── Testimonials.jsx (10 sections)
│   │   ├── CaseStudies.jsx (10 sections)
│   │   ├── CaseStudyDetail.jsx (10 sections)
│   │   ├── Pricing.jsx (10 sections)
│   │   ├── FAQ.jsx (10 sections)
│   │   ├── PrivacyPolicy.jsx (10 sections)
│   │   ├── Terms.jsx (10 sections)
│   │   ├── NotFound.jsx (7 sections)
│   │   ├── Gallery.jsx (10 sections)
│   │   ├── Achievements.jsx (10 sections)
│   │   ├── Certifications.jsx (10 sections)
│   │   ├── Tools.jsx (10 sections)
│   │   ├── Learning.jsx (10 sections)
│   │   ├── OpenSource.jsx (10 sections)
│   │   ├── Speaking.jsx (10 sections)
│   │   ├── Press.jsx (10 sections)
│   │   └── Newsletter.jsx (10 sections)
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # Main app component with all routes
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#9333ea',    // Purple
  secondary: '#ec4899',  // Pink
  dark: '#7c3aed',       // Darker purple
  accent: '#f472b6',     // Light pink accent
}
```

### Content

Update the content in each page component. All 27+ pages are ready with 10+ sections each:
- **Main Pages**: Home, About, Skills, Projects, Resume, Contact
- **Content Pages**: Blog, Blog Post, Services, Testimonials, Case Studies
- **Business Pages**: Pricing, FAQ, Gallery, Achievements, Certifications
- **Resource Pages**: Tools, Learning Resources, Open Source
- **Additional Pages**: Speaking & Events, Press & Media, Newsletter
- **Legal Pages**: Privacy Policy, Terms of Service
- **Utility Pages**: 404 Not Found, Project Detail

Each page includes:
- Hero section with gradient background
- Multiple content sections (10+ per page)
- Interactive components
- Animations and transitions
- Responsive design
- SEO-ready structure

### Resume PDF

Place your resume PDF file in the `public` folder and update the path in `ResumeDownloadButton.jsx`:

```javascript
link.href = '/resume.pdf' // Update with your file name
```

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy to [Netlify](https://netlify.com)

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 API Integration (Optional)

To connect a backend API, update the API endpoints in:

- **ContactForm.jsx**: Contact form submission
- **Projects.jsx**: Fetch project data
- **Home.jsx**: Dynamic content

Example API service structure:

```javascript
// src/services/api.js
import axios from 'axios'

const API_BASE_URL = 'https://your-api.com/api'

export const submitContact = (data) => {
  return axios.post(`${API_BASE_URL}/contacts`, data)
}

export const getProjects = () => {
  return axios.get(`${API_BASE_URL}/projects`)
}
```

## 🔧 Environment Variables

Create a `.env` file for API endpoints:

```env
VITE_API_URL=https://your-api.com/api
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or inquiries, please use the contact form on the website or reach out via email.

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
