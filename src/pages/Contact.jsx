import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, HelpCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = {
    email: 'sejmaprajapat079@gmail.com',
    phone: '+91 9171208053',
    location: 'Indore, M.P., India',
    timezone: 'IST (UTC+5:30)',
    businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
  }

  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'I typically respond within 24-48 hours during business days.',
    },
    {
      question: 'Do you work with remote clients?',
      answer: 'Yes, I work with clients worldwide and am comfortable with remote collaboration.',
    },
    {
      question: 'What is your availability for new projects?',
      answer: 'I\'m currently available for new projects. Let\'s discuss your timeline and requirements.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, I provide maintenance and support packages for projects I develop.',
    },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Contact Hero Title */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Quick Info */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-primary hover:text-secondary">
                {contactInfo.email}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-primary hover:text-secondary">
                {contactInfo.phone}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">{contactInfo.location}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Contact Form Fields */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Send a Message
          </motion.h2>
          <ContactForm />
        </div>
      </section>

      {/* SECTION 4 - Social Media Icons */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Connect on Social Media
          </motion.h2>
          <div className="flex justify-center gap-6">
            {[
              { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
              { name: 'GitHub', icon: '💻', href: 'https://github.com' },
              { name: 'Twitter', icon: '🐦', href: 'https://twitter.com' },
              { name: 'Email', icon: '✉️', href: `mailto:${contactInfo.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-2xl shadow-lg hover:bg-primary hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Office / Country Timezone */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Timezone</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <strong>Location:</strong> {contactInfo.location}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Timezone:</strong> {contactInfo.timezone}
            </p>
          </motion.div>
        </div>
      </section>

    

      {/* SECTION 7 - Contact Response Message UI */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white text-center"
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
            <p className="text-lg opacity-90">
              I aim to respond to all inquiries within 24-48 hours. For urgent matters,
              please call or use the contact form above.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - Animation / Illustration */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl mb-4"
          >
            💬
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Let's Start a Conversation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Whether you have a question, a project idea, or just want to say hello,
            I'm here and ready to help!
          </motion.p>
        </div>
      </section>

      {/* SECTION 9 - Business Hours */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              {contactInfo.businessHours}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm available for meetings and consultations during these hours.
              Outside these hours, I'll respond to messages as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 - FAQ Block */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <HelpCircle className="w-8 h-8 text-primary" />
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
    </div>
  )
}

export default Contact

