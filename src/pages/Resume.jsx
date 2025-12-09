import { motion } from 'framer-motion'
import ExperienceTimeline from '../components/ExperienceTimeline'
import EducationTimeline from '../components/EducationTimeline'
import ResumeDownloadButton from '../components/ResumeDownloadButton'
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Award, Code, Languages } from 'lucide-react'

const Resume = () => {
  const personalInfo = {
    name: 'Your Name',
    title: 'Frontend Developer',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    website: 'https://yourwebsite.com',
  }

  const certifications = [
    { title: 'React Developer Certification', issuer: 'Meta', year: '2023' },
    { title: 'AWS Certified Developer', issuer: 'Amazon', year: '2023' },
    { title: 'JavaScript Advanced', issuer: 'Udemy', year: '2022' },
    { title: 'Full Stack Developer', issuer: 'FreeCodeCamp', year: '2021' },
  ]

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion',
    'Git', 'Docker', 'AWS', 'Vercel', 'Figma',
  ]

  const achievements = [
    'Led development of 10+ successful web applications',
    'Improved application performance by 40%',
    'Mentored 5 junior developers',
    'Open source contributor with 100+ GitHub stars',
  ]

  const languages = [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Fluent' },
    { name: 'French', proficiency: 'Intermediate' },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Resume Introduction */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8"
          >
            A comprehensive overview of my professional experience, education, and skills.
          </motion.p>
          <div className="flex justify-center">
            <ResumeDownloadButton />
          </div>
        </div>
      </section>

      {/* SECTION 2 - Personal Info Summary */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">{personalInfo.name}</h2>
            <p className="text-xl text-primary text-center mb-8">{personalInfo.title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {personalInfo.website}
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Experience Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Professional Experience
          </motion.h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* SECTION 4 - Education Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Education
          </motion.h2>
          <EducationTimeline />
        </div>
      </section>

      {/* SECTION 5 - Certifications */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-primary" />
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Skills Summary */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Code className="w-8 h-8 text-primary" />
            Technical Skills
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Achievements */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Key Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Languages */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 flex items-center gap-3"
          >
            <Languages className="w-8 h-8 text-primary" />
            Languages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{lang.proficiency}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Download Resume Button */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Download Full Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            Get a PDF version of my complete resume with all details
          </motion.p>
          <ResumeDownloadButton />
        </div>
      </section>

      {/* SECTION 10 - Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Interested in working together? Feel free to reach out!
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </motion.a>
        </div>
      </section>

      {/* SECTION 11 - Portfolio Links */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Explore More
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'View Projects', path: '/projects' },
              { label: 'My Skills', path: '/skills' },
              { label: 'About Me', path: '/about' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors shadow-lg"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume

