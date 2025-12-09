import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import CaseStudyCard from '../components/CaseStudyCard'
import { ArrowLeft, TrendingUp, Users, Clock, Target, Award } from 'lucide-react'

const CaseStudyDetail = () => {
  const { id } = useParams()

  const caseStudy = {
    id: id,
    title: 'E-Commerce Platform Transformation',
    description: 'Complete redesign and rebuild of a legacy e-commerce platform',
    fullDescription: `This case study details the complete transformation of a legacy e-commerce platform into a modern, high-performing solution. The project involved redesigning the user interface, rebuilding the backend infrastructure, and implementing advanced features to improve user experience and business metrics.`,
    client: 'Tech Retail Co',
    industry: 'E-Commerce',
    duration: '6 months',
    team: '5 members',
    challenge: 'The existing platform had poor performance, outdated design, and low conversion rates.',
    solution: 'We rebuilt the platform using modern technologies, implemented a new design system, and optimized for performance and conversions.',
    results: [
      { metric: 'Conversion Rate', before: '2.5%', after: '6.25%', improvement: '+150%' },
      { metric: 'Page Load Time', before: '4.2s', after: '1.7s', improvement: '-60%' },
      { metric: 'User Engagement', before: '2.1 min', after: '6.3 min', improvement: '+200%' },
      { metric: 'Bounce Rate', before: '65%', after: '35%', improvement: '-46%' },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: null,
  }

  const relatedCaseStudies = [
    {
      id: 2,
      title: 'Mobile App for Fitness Tracking',
      description: 'Cross-platform mobile application',
      category: 'Mobile Apps',
      results: [
        { label: 'Downloads', value: '50K+' },
        { label: 'User Rating', value: '4.8/5' },
      ],
      image: null,
    },
    {
      id: 3,
      title: 'SaaS Dashboard Redesign',
      description: 'Modern dashboard redesign',
      category: 'SaaS',
      results: [
        { label: 'Support Tickets', value: '-40%' },
        { label: 'User Satisfaction', value: '+85%' },
      ],
      image: null,
    },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-white">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            {caseStudy.description}
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Project Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
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
            className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl"
          >
            {caseStudy.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 - Project Details */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Project Details
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Client', value: caseStudy.client },
              { icon: Target, label: 'Industry', value: caseStudy.industry },
              { icon: Clock, label: 'Duration', value: caseStudy.duration },
              { icon: Users, label: 'Team Size', value: caseStudy.team },
            ].map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{detail.label}</p>
                  <p className="text-lg font-semibold">{detail.value}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Challenge */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            The Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {caseStudy.challenge}
          </motion.p>
        </div>
      </section>

      {/* SECTION 5 - Solution */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            The Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {caseStudy.solution}
          </motion.p>
        </div>
      </section>

      {/* SECTION 6 - Results */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 flex items-center gap-3"
          >
            <TrendingUp className="w-10 h-10 text-primary" />
            Results & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{result.metric}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Before: {result.before}</span>
                  <span className="text-gray-600 dark:text-gray-400">After: {result.after}</span>
                </div>
                <div className="text-2xl font-bold text-primary">{result.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Technologies */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Technologies Used
          </motion.h2>
          <div className="flex flex-wrap gap-4">
            {caseStudy.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Screenshots/Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
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
                className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-64 flex items-center justify-center"
              >
                <span className="text-gray-500">Screenshot {item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Client Testimonial */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Award className="w-8 h-8 text-primary" />
            Client Feedback
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
              "The transformation exceeded our expectations. The new platform has significantly improved our business metrics and user experience. The team was professional, responsive, and delivered on time."
            </p>
            <div>
              <p className="font-semibold text-lg">John Doe</p>
              <p className="text-gray-600 dark:text-gray-400">CEO, {caseStudy.client}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 - Related Case Studies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Related Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((cs, index) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyDetail

