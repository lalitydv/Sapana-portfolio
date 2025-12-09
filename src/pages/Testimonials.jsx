import { useState } from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from '../components/TestimonialCard'
import FilterTabs from '../components/FilterTabs'
import { Star, Quote, Users, Award } from 'lucide-react'

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web Development', 'Design', 'Mobile Apps', 'Consulting']

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Startup Inc',
      content: 'Exceptional work! The website exceeded our expectations and has significantly improved our online presence.',
      rating: 5,
      category: 'Web Development',
      project: 'E-Commerce Platform',
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      company: 'Design Co',
      content: 'Professional, creative, and always on time. Highly recommended for any design project!',
      rating: 5,
      category: 'Design',
      project: 'Brand Redesign',
    },
    {
      name: 'Mike Johnson',
      role: 'Founder',
      company: 'Mobile App Co',
      content: 'The best developer I\'ve worked with. Attention to detail is outstanding and the final product is flawless.',
      rating: 5,
      category: 'Mobile Apps',
      project: 'Fitness App',
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      company: 'Retail Corp',
      content: 'Outstanding service from start to finish. The team was responsive and delivered exactly what we needed.',
      rating: 5,
      category: 'Web Development',
      project: 'Corporate Website',
    },
    {
      name: 'David Brown',
      role: 'CTO',
      company: 'SaaS Company',
      content: 'Expert consultation helped us make critical technical decisions. Very knowledgeable and professional.',
      rating: 5,
      category: 'Consulting',
      project: 'Technical Consultation',
    },
    {
      name: 'Emily Davis',
      role: 'Creative Director',
      company: 'Agency',
      content: 'Beautiful designs and seamless implementation. The collaboration was smooth and productive.',
      rating: 5,
      category: 'Design',
      project: 'Portfolio Website',
    },
  ]

  const filteredTestimonials =
    activeFilter === 'All'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter)

  const stats = {
    totalClients: 50,
    averageRating: 4.9,
    projectsCompleted: 75,
    satisfactionRate: 98,
  }

  return (
    <div className="pt-16">
      {/* SECTION 1 - Testimonials Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            See what clients say about working with me
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Statistics */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Happy Clients', value: `${stats.totalClients}+`, icon: Users },
              { label: 'Average Rating', value: stats.averageRating, icon: Star },
              { label: 'Projects', value: `${stats.projectsCompleted}+`, icon: Award },
              { label: 'Satisfaction', value: `${stats.satisfactionRate}%`, icon: Quote },
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
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Filter Tabs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* SECTION 4 - Testimonials Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Featured Testimonial */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Featured Testimonial
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
          >
            <Quote className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-xl mb-6 italic">
              "{testimonials[0].content}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                {testimonials[0].name?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-lg">{testimonials[0].name}</p>
                <p className="text-white/80">{testimonials[0].role}, {testimonials[0].company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - Rating Breakdown */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Rating Breakdown
          </motion.h2>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-2 w-24">
                  <span className="font-semibold">{rating}</span>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(rating === 5 ? 90 : rating === 4 ? 8 : rating === 3 ? 1 : rating === 2 ? 0.5 : 0.5)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                  {rating === 5 ? '90%' : rating === 4 ? '8%' : rating === 3 ? '1%' : rating === 2 ? '0.5%' : '0.5%'}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Client Companies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Trusted By
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-center justify-center h-24"
              >
                <div className="text-2xl font-bold text-gray-400">Logo {index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - Video Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Video Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg aspect-video flex items-center justify-center"
              >
                <div className="text-gray-500 dark:text-gray-400">Video Testimonial {item}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Testimonial Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Share Your Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Role & Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Testimonial</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 text-gray-300 cursor-pointer hover:text-yellow-400" />
                  ))}
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Submit Testimonial
              </button>
            </form>
          </motion.div>
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
            Ready to Work Together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join the list of satisfied clients and let's create something amazing
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Testimonials

