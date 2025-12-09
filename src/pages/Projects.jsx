import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectShowcaseCard from '../components/ProjectShowcaseCard'
import ResumeDownloadButton from '../components/ResumeDownloadButton'
import { Filter, Award, Users, Code } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'RideShareLy',
      description: 'Car and Bike Pooling Application - Complete UI/UX design for a ride-sharing platform with intuitive user interface and seamless user experience.',
      technologies: ['Figma', 'UI/UX Design', 'Mobile App Design', 'User Research'],
      category: 'App',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 2,
      title: 'Vein Healthcare Website',
      description: 'Pathology Lab website design for Vein Healthcare pvt. ltd. - Professional healthcare website with clean and modern design.',
      technologies: ['Figma', 'Web Design', 'UI/UX', 'Healthcare Design'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 3,
      title: 'Shinecoder Technology Website',
      description: 'Website design with animations for Shinecoder Technologies - Modern corporate website with engaging animations and interactive elements.',
      technologies: ['Figma', 'Adobe XD', 'Web Design', 'Animation'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 4,
      title: 'Era Ageless E-Commerce',
      description: 'Complete E-Commerce website design with user-friendly interface and seamless shopping experience.',
      technologies: ['Figma', 'E-Commerce Design', 'UI/UX', 'Web Design'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 5,
      title: 'HRMS Admin Panel',
      description: 'User-friendly dashboard design for HRMS project with comprehensive admin panel interface.',
      technologies: ['Figma', 'Dashboard Design', 'Admin Panel', 'UI/UX'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 6,
      title: 'Lottery Mobile App',
      description: 'Mobile application UI/UX design for lottery system with intuitive navigation and engaging user interface.',
      technologies: ['Figma', 'Mobile App Design', 'UI/UX', 'App Design'],
      category: 'App',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 7,
      title: 'Sapna Jewellers E-Commerce',
      description: 'E-Commerce website design for jewelry store with elegant and luxurious design aesthetic.',
      technologies: ['Figma', 'E-Commerce Design', 'UI/UX', 'Branding'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 8,
      title: 'Emerge Computers Website',
      description: 'Website design with Admin Panel for Emerge Computers - Complete web solution with backend interface.',
      technologies: ['Figma', 'Web Design', 'Admin Panel', 'UI/UX'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 9,
      title: 'Restaurant Project',
      description: 'Complete restaurant management system with Admin Panel and User Panel - Modern design for food ordering platform.',
      technologies: ['Figma', 'Web Design', 'Admin Panel', 'User Panel'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 10,
      title: 'Ticket Management System',
      description: 'Complete UI/UX design for ticket management system using Figma with efficient workflow design.',
      technologies: ['Figma', 'UI/UX Design', 'System Design', 'Workflow'],
      category: 'Design',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 11,
      title: 'Medicaps College UI Design',
      description: 'Educational institution UI design on Adobe XD for Medicaps college with modern and professional interface.',
      technologies: ['Adobe XD', 'UI Design', 'Education Design', 'Web Design'],
      category: 'Design',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 12,
      title: 'Multivendor Ecommerce',
      description: 'Complete multivendor e-commerce platform design with Admin Panel, Vendor Panel, and User Panel in Figma.',
      technologies: ['Figma', 'E-Commerce Design', 'Multi-panel Design', 'UI/UX'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 13,
      title: 'Science Clinic Website',
      description: 'Professional healthcare website design for scienceclinic.co.uk with clean and modern medical aesthetic.',
      technologies: ['Figma', 'Web Design', 'Healthcare Design', 'UI/UX'],
      category: 'Web',
      image: null,
      github: null,
      live: null,
    },
    {
      id: 14,
      title: 'Document Management Project',
      description: 'Complete UI/UX design for document management system using Figma with efficient file organization interface.',
      technologies: ['Figma', 'UI/UX Design', 'System Design', 'Document Management'],
      category: 'Design',
      image: null,
      github: null,
      live: null,
    },
  ]

  const filters = ['All', 'Web', 'App', 'Design']
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const featuredProject = projects[0]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Projects Overview Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A collection of projects showcasing my skills in UI/UX design, web design, mobile app design,
            and graphic design across various industries including healthcare, e-commerce, and SaaS.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Filter Bar */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-hover px-6 py-2 rounded-lg font-semibold transition-all relative overflow-hidden ${activeFilter === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Project Cards Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectShowcaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Featured Project Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Featured Project
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)'
            }}
            className="cursor-hover group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="md:flex relative z-10">
              <motion.div
                className="md:w-1/2 h-64 md:h-auto bg-gradient-to-r from-primary to-secondary flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {featuredProject.image ? (
                  <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover" />
                ) : (
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Code className="w-32 h-32 text-white opacity-50" />
                  </motion.div>
                )}
              </motion.div>
              <div className="md:w-1/2 p-8">
                <motion.h3
                  className="text-3xl font-bold mb-4"
                  whileHover={{ x: 5 }}
                >
                  {featuredProject.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {featuredProject.github && (
                    <motion.a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-hover px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      View Code
                    </motion.a>
                  )}
                  {featuredProject.live && (
                    <motion.a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-hover px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          ease: 'easeInOut',
                        }}
                      />
                      <span className="relative z-10">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Case Study Highlights */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Case Study Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'User Engagement', value: '+150%', description: 'Increased user engagement' },
              { title: 'Performance', value: '98%', description: 'Lighthouse score improvement' },
              { title: 'Conversion', value: '+45%', description: 'Higher conversion rates' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Technology Filter */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3"
          >
            <Filter className="w-8 h-8 text-primary" />
            Technologies Used
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Adobe XD', 'UI/UX Design', 'Web Design', 'Mobile App Design', 'Graphics Design', 'Logo Design', 'Product Design'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Project Pagination */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-lg font-semibold ${page === 1
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {page}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Awards & Recognition */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Award className="w-10 h-10 text-primary" />
            Awards & Recognition
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Best Web App 2023', issuer: 'Tech Awards', project: 'E-Commerce Platform' },
              { title: 'Innovation Award', issuer: 'Design Community', project: 'Task Management App' },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{award.issuer}</p>
                <p className="text-sm text-primary">{award.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Collaboration / Team Roles */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Users className="w-10 h-10 text-primary" />
            Team Collaboration
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: 'Frontend Lead', projects: 8, description: 'Leading frontend development' },
              { role: 'Full Stack Developer', projects: 5, description: 'End-to-end development' },
              { role: 'UI/UX Designer', projects: 3, description: 'Design and user experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{item.projects}+ Projects</p>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA: View Resume */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Want to Know More?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Check out my resume for more details about my experience and skills
          </motion.p>
          <ResumeDownloadButton />
        </div>
      </section>
    </div>
  )
}

export default Projects

