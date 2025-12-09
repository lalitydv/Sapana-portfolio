import { motion } from 'framer-motion'
import ServicesCard from '../components/ServicesCard'
import PricingCard from '../components/PricingCard'
import { Code, Palette, Smartphone, Search, Zap, Shield, CheckCircle, Clock, Users, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'App UI/UX Design',
      description: 'Mobile and web application interfaces with focus on usability and aesthetics',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: Code,
      title: 'Web Design',
      description: 'Modern and responsive website designs that enhance user experience',
      features: ['Responsive Design', 'Interactive Elements', 'Modern Layouts', 'Brand Consistency'],
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Creative graphics posts for social media and digital marketing',
      features: ['Social Media Graphics', 'Digital Marketing Materials', 'Visual Content', 'Brand Identity'],
    },
    {
      icon: Palette,
      title: 'Brochure & Flyer Design',
      description: 'Professional print and digital marketing materials',
      features: ['Print Design', 'Digital Flyers', 'Marketing Collaterals', 'Brand Guidelines'],
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique and memorable logo designs that strengthen brand identity',
      features: ['Brand Identity', 'Logo Variations', 'Brand Guidelines', 'Vector Graphics'],
    },
    {
      icon: Palette,
      title: 'Product Design',
      description: 'End-to-end product design from concept to final interface',
      features: ['Product Strategy', 'User Experience', 'Interface Design', 'Design Documentation'],
    },
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: 999,
      period: 'project',
      description: 'Perfect for small projects',
      features: [
        { text: 'Up to 5 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Basic SEO', included: true },
        { text: '1 month support', included: true },
        { text: 'Custom Features', included: false },
        { text: 'Priority Support', included: false },
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: 2499,
      period: 'project',
      description: 'Ideal for growing businesses',
      features: [
        { text: 'Up to 15 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Advanced SEO', included: true },
        { text: '3 months support', included: true },
        { text: 'Custom Features', included: true },
        { text: 'Priority Support', included: true },
      ],
      buttonText: 'Get Started',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 4999,
      period: 'project',
      description: 'For large-scale projects',
      features: [
        { text: 'Unlimited pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Full SEO Package', included: true },
        { text: '6 months support', included: true },
        { text: 'Custom Features', included: true },
        { text: 'Priority Support', included: true },
      ],
      buttonText: 'Contact Us',
    },
  ]

  const processSteps = [
    { step: 1, title: 'Discovery', description: 'Understanding your needs and goals' },
    { step: 2, title: 'Planning', description: 'Creating a detailed project plan' },
    { step: 3, title: 'Design', description: 'Designing the user interface' },
    { step: 4, title: 'Development', description: 'Building your solution' },
    { step: 5, title: 'Testing', description: 'Quality assurance and testing' },
    { step: 6, title: 'Launch', description: 'Deployment and go-live' },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Services Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive UI/UX and graphic design services to bring your ideas to life
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Services Overview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What I Offer
          </motion.h2>
          <ServicesCard services={services} />
        </div>
      </section>

      {/* SECTION 3 - Service Details */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Detailed Service Information
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-primary to-secondary">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Pricing Plans */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                index={index}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Work Process */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Work Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Why Choose Me */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Why Choose Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Quality Work', description: 'High-quality code and design' },
              { icon: Clock, title: 'On Time', description: 'Always meet deadlines' },
              { icon: Users, title: 'Collaborative', description: 'Work closely with clients' },
              { icon: CheckCircle, title: 'Support', description: 'Ongoing maintenance and support' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Technologies Used */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
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
              'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design',
              'Web Design', 'Graphics Design', 'Logo Design', 'Product Design', 'Branding',
            ].map((tech, index) => (
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

      {/* SECTION 8 - Project Timeline */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Typical Project Timeline
          </motion.h2>
          <div className="space-y-6">
            {[
              { phase: 'Week 1-2', title: 'Planning & Design', description: 'Requirements gathering and design mockups' },
              { phase: 'Week 3-6', title: 'Development', description: 'Building the solution' },
              { phase: 'Week 7', title: 'Testing & Review', description: 'Quality assurance and client feedback' },
              { phase: 'Week 8', title: 'Launch & Handover', description: 'Deployment and documentation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-4 py-1 bg-primary text-white rounded-full font-semibold">
                    {item.phase}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - FAQ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. A simple website typically takes 4-6 weeks, while complex applications can take 8-12 weeks or more.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, I offer maintenance and support packages. All projects include at least 1 month of free support after launch.',
              },
              {
                question: 'Can you work with existing designs?',
                answer: 'Absolutely! I can work with your existing designs or create new ones based on your requirements.',
              },
              {
                question: 'What is your payment structure?',
                answer: 'Typically, I require 50% upfront and 50% upon completion. For larger projects, we can discuss milestone-based payments.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-primary">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
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
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Let's discuss how I can help bring your ideas to life
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Services

