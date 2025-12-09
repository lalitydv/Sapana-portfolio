import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, Bell } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="pt-16">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sectionNum) => (
        <section
          key={sectionNum}
          className={`section-padding ${sectionNum % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            {sectionNum === 1 && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-6xl font-bold text-center mb-8 flex items-center justify-center gap-4"
                >
                  <Bell className="w-12 h-12 text-primary" />
                  Newsletter
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  {!subscribed ? (
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                      <h2 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Get the latest updates, articles, and resources delivered to your inbox.
                      </p>
                      <div className="flex gap-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email"
                          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                          required
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                      <p className="text-gray-600 dark:text-gray-400">You've successfully subscribed to our newsletter.</p>
                    </motion.div>
                  )}
                </motion.div>
              </>
            )}
            {sectionNum > 1 && (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-8"
                >
                  Section {sectionNum}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  Content for newsletter section {sectionNum}.
                </motion.p>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Newsletter

