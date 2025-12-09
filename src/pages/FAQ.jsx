import { motion } from 'framer-motion'
import FAQAccordion from '../components/FAQAccordion'
import SearchBar from '../components/SearchBar'
import { HelpCircle, MessageSquare, Mail } from 'lucide-react'

const FAQ = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer web development, mobile app development, UI/UX design, SEO optimization, and consulting services. You can find detailed information on the Services page.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website typically takes 4-6 weeks, while complex applications can take 8-12 weeks or more. I provide detailed timelines during the initial consultation.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'I offer fixed-price packages for standard projects and custom quotes for unique requirements. Check the Pricing page for detailed information on packages and add-ons.',
    },
    {
      question: 'Do you work with remote clients?',
      answer: 'Yes, I work with clients worldwide and am experienced in remote collaboration. I use modern communication tools to ensure smooth project management.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'I primarily work with React, Next.js, TypeScript, Node.js, and modern web technologies. I stay updated with the latest tools and frameworks to deliver the best solutions.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, all projects include a support period. I also offer maintenance packages for long-term support and updates.',
    },
    {
      question: 'Can you work with existing codebases?',
      answer: 'Absolutely! I can work with your existing codebase, improve it, add new features, or migrate it to modern technologies.',
    },
    {
      question: 'What is your payment structure?',
      answer: 'Typically, I require 50% upfront and 50% upon completion. For larger projects, we can discuss milestone-based payments.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'I offer refunds within 14 days of project start if you\'re not satisfied. See our Terms of Service for detailed refund policy.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply contact me through the Contact page or email. We\'ll schedule a consultation to discuss your project requirements and create a plan.',
    },
  ]

  const categories = [
    { name: 'General', count: 4 },
    { name: 'Pricing', count: 2 },
    { name: 'Services', count: 2 },
    { name: 'Technical', count: 2 },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - FAQ Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            <HelpCircle className="w-12 h-12" />
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Find answers to common questions about my services, pricing, and process
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Search */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <SearchBar onSearch={() => {}} placeholder="Search FAQs..." />
        </div>
      </section>

      {/* SECTION 3 - Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Browse by Category
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.count} questions</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - FAQ Accordion */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            All Questions
          </motion.h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* SECTION 5 - Popular Questions */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Popular Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.slice(0, 4).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Still Have Questions */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white"
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-white/90 mb-6">
              Can't find the answer you're looking for? Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - Quick Links */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Quick Links
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Services', description: 'Learn about what I offer', link: '/services' },
              { title: 'Pricing', description: 'View pricing plans', link: '/pricing' },
              { title: 'Portfolio', description: 'See my work', link: '/projects' },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FAQ Statistics */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total FAQs', value: faqs.length },
              { label: 'Categories', value: categories.length },
              { label: 'Response Time', value: '< 24h' },
              { label: 'Satisfaction', value: '98%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Related Resources */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Related Resources
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Blog', 'Documentation', 'Support Center', 'Community Forum'].map((resource, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                {resource}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Need More Help?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Don't hesitate to reach out if you have any other questions
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default FAQ

