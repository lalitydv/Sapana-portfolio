import { useState } from 'react'
import { motion } from 'framer-motion'
import CaseStudyCard from '../components/CaseStudyCard'
import FilterTabs from '../components/FilterTabs'
import SearchBar from '../components/SearchBar'
import { Briefcase, TrendingUp, Target, Award } from 'lucide-react'

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filters = ['All', 'Web Development', 'Mobile Apps', 'E-Commerce', 'SaaS']

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      description: 'Complete redesign and rebuild of a legacy e-commerce platform resulting in 150% increase in conversions',
      category: 'E-Commerce',
      results: [
        { label: 'Conversion Rate', value: '+150%' },
        { label: 'Page Load Time', value: '-60%' },
        { label: 'User Engagement', value: '+200%' },
      ],
      image: null,
    },
    {
      id: 2,
      title: 'Mobile App for Fitness Tracking',
      description: 'Cross-platform mobile application with real-time sync and social features',
      category: 'Mobile Apps',
      results: [
        { label: 'Downloads', value: '50K+' },
        { label: 'User Rating', value: '4.8/5' },
        { label: 'Active Users', value: '10K+' },
      ],
      image: null,
    },
    {
      id: 3,
      title: 'SaaS Dashboard Redesign',
      description: 'Modern dashboard redesign improving user experience and reducing support tickets by 40%',
      category: 'SaaS',
      results: [
        { label: 'Support Tickets', value: '-40%' },
        { label: 'User Satisfaction', value: '+85%' },
        { label: 'Feature Adoption', value: '+120%' },
      ],
      image: null,
    },
    {
      id: 4,
      title: 'Corporate Website Overhaul',
      description: 'Complete website redesign with modern UI and improved SEO',
      category: 'Web Development',
      results: [
        { label: 'Organic Traffic', value: '+250%' },
        { label: 'Bounce Rate', value: '-45%' },
        { label: 'Lead Generation', value: '+180%' },
      ],
      image: null,
    },
  ]

  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesFilter = activeFilter === 'All' || cs.category === activeFilter
    const matchesSearch =
      searchQuery === '' ||
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="pt-16">
      {/* SECTION 1 - Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Detailed stories of successful projects and their impact
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Search */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={setSearchQuery} placeholder="Search case studies..." />
        </div>
      </section>

      {/* SECTION 3 - Filters */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FilterTabs filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>
      </section>

      {/* SECTION 4 - Case Studies Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Featured Case Study */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 flex items-center gap-3"
          >
            <Award className="w-10 h-10 text-primary" />
            Featured Case Study
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-r from-primary to-secondary" />
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-4">{caseStudies[0].title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{caseStudies[0].description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudies[0].results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary">{result.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={`/case-studies/${caseStudies[0].id}`}
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - Success Metrics */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Overall Impact
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, label: 'Projects Completed', value: '50+' },
              { icon: Target, label: 'Client Satisfaction', value: '98%' },
              { icon: Award, label: 'Awards Won', value: '5' },
              { icon: Briefcase, label: 'Years Experience', value: '5+' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Process Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding client needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Execution', description: 'Building and developing the solution' },
              { step: '04', title: 'Launch', description: 'Deployment and ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Client Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Outstanding results! The project exceeded all expectations.',
                author: 'John Doe',
                role: 'CEO',
              },
              {
                quote: 'Professional service and exceptional attention to detail.',
                author: 'Jane Smith',
                role: 'Product Manager',
              },
              {
                quote: 'The best investment we made for our digital presence.',
                author: 'Mike Johnson',
                role: 'Founder',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Technologies Used */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Technologies & Tools
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
              'Tailwind CSS', 'Framer Motion', 'AWS', 'Docker', 'Figma', 'Git',
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Let's create your success story together
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies

