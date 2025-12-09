import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and payment information.',
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products and services.',
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business.',
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You can also opt-out of certain communications from us.',
    },
    {
      title: 'Cookies',
      content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
    },
    {
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.',
    },
    {
      title: 'Children\'s Privacy',
      content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.',
    },
    {
      title: 'Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
    },
    {
      title: 'Contact Us',
      content: 'If you have any questions about this Privacy Policy, please contact us at privacy@example.com.',
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
            <Shield className="w-12 h-12" />
            Privacy Policy
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
            We respect your privacy and are committed to protecting your personal data. This privacy policy explains
            how we collect, use, and safeguard your information when you visit our website or use our services.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 - Policy Sections */}
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
                  {index === 3 && <Lock className="w-6 h-6 text-primary" />}
                  {index === 4 && <Eye className="w-6 h-6 text-primary" />}
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Key Points */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Key Points
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Secure', description: 'Your data is protected' },
              { icon: Lock, title: 'Private', description: 'We never sell your information' },
              { icon: Eye, title: 'Transparent', description: 'Clear about what we collect' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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

      {/* SECTION 5 - Contact */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions or concerns about our privacy practices, please contact us.
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

export default PrivacyPolicy

