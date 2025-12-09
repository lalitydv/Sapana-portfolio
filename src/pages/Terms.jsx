import { motion } from 'framer-motion'
import { FileText, Scale, Gavel } from 'lucide-react'

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.',
    },
    {
      title: 'Disclaimer',
      content: 'The materials on this website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.',
    },
    {
      title: 'Limitations',
      content: 'In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on this website.',
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any materials are accurate, complete, or current.',
    },
    {
      title: 'Links',
      content: 'We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.',
    },
    {
      title: 'Modifications',
      content: 'We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms.',
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.',
    },
    {
      title: 'Refund Policy',
      content: 'Refunds are available within 14 days of project start if you are not satisfied with the service. Contact us for details.',
    },
    {
      title: 'Intellectual Property',
      content: 'All content, designs, and code created as part of our services remain the property of the client upon full payment.',
    },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            <Scale className="w-12 h-12" />
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Last updated: January 2024
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Introduction */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Please read these terms of service carefully before using our website or services. By accessing or using
            our service, you agree to be bound by these terms.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 - Terms Sections */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  {index === 0 && <FileText className="w-6 h-6 text-primary" />}
                  {index === 7 && <Gavel className="w-6 h-6 text-primary" />}
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Important Points */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Important Points
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'All projects require signed agreement',
              'Payment terms are clearly outlined',
              'Intellectual property transfers upon payment',
              'Support period is specified in contract',
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Contact */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About Terms?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about these terms, please contact us.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms

