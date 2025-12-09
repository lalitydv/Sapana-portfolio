import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import Gallery from './pages/Gallery'
import Achievements from './pages/Achievements'
import Certifications from './pages/Certifications'
import Tools from './pages/Tools'
import Learning from './pages/Learning'
import OpenSource from './pages/OpenSource'
import Speaking from './pages/Speaking'
import Press from './pages/Press'
import Newsletter from './pages/Newsletter'
import Hover from './pages/Hover'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[var(--bg-primary)]">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hover" element={<Hover />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/press" element={<Press />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTopButton />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

