import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Award } from 'lucide-react'
import ProjectShowcaseCard from '../components/ProjectShowcaseCard'

const ProjectDetail = () => {
  const { id } = useParams()

  // Mock project data - in real app, fetch from API
  const project = {
    id: id,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution built with modern web technologies, featuring a complete shopping experience from product browsing to checkout.',
    fullDescription: `This project is a full-featured e-commerce platform that provides a seamless shopping experience. 
    Built with React and Node.js, it includes advanced features like real-time inventory management, 
    secure payment processing, and an intuitive admin dashboard. The platform handles thousands of 
    products and supports multiple payment gateways.`,
    role: 'Lead Frontend Developer',
    responsibilities: [
      'Designed and implemented the user interface',
      'Developed responsive layouts for all devices',
      'Integrated payment gateway (Stripe)',
      'Optimized performance and loading times',
      'Implemented state management with Redux',
    ],
    timeline: {
      start: 'January 2023',
      end: 'June 2023',
      duration: '6 months',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redux'],
    challenges: [
      {
        challenge: 'Handling large product catalogs',
        solution: 'Implemented virtual scrolling and pagination to optimize performance',
      },
      {
        challenge: 'Real-time inventory updates',
        solution: 'Used WebSocket connections for live inventory synchronization',
      },
      {
        challenge: 'Payment security',
        solution: 'Integrated Stripe with proper tokenization and PCI compliance',
      },
    ],
    results: [
      '40% increase in conversion rate',
      '98% Lighthouse performance score',
      '50% reduction in page load time',
      '99.9% uptime achieved',
    ],
    github: 'https://github.com',
    live: 'https://example.com',
    image: null,
  }

  const relatedProjects = [
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind'],
      image: null,
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      technologies: ['React', 'D3.js', 'Node.js'],
      image: null,
    },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Project Hero Banner */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
            <div className="flex flex-wrap gap-4 mt-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 font-semibold"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - Project Description */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Project Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {project.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 - Role & Responsibilities */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
          >
            <Users className="w-8 h-8 text-primary" />
            My Role & Responsibilities
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
            <p className="text-xl font-semibold text-primary mb-4">{project.role}</p>
            <ul className="space-y-3">
              {project.responsibilities.map((resp, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Project Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
          >
            <Calendar className="w-8 h-8 text-primary" />
            Project Timeline
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Start Date</p>
                <p className="text-lg font-semibold">{project.timeline.start}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">End Date</p>
                <p className="text-lg font-semibold">{project.timeline.end}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Duration</p>
                <p className="text-lg font-semibold">{project.timeline.duration}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Technologies Used */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 flex items-center gap-3"
          >
            <Code className="w-8 h-8 text-primary" />
            Technologies Used
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
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

      {/* SECTION 6 - Challenges & Solutions */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Challenges & Solutions
          </motion.h2>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.challenge}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Gallery / Screenshots */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Project Screenshots
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center"
              >
                <Code className="w-24 h-24 text-gray-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Video Demo (optional) */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Video Demo
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center"
          >
            <p className="text-gray-500 dark:text-gray-400">Video placeholder - Add your demo video here</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - Results / Outcome */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-primary" />
            Results & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <p className="text-2xl font-bold text-primary mb-2">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Testimonials (if any) */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Client Feedback
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-4">
              "Outstanding work! The platform exceeded our expectations and has significantly
              improved our online sales. The attention to detail and user experience is exceptional."
            </p>
            <p className="font-semibold">— Client Name, Company</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 - Related Projects */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Related Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj, index) => (
              <ProjectShowcaseCard key={proj.id} project={proj} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail

