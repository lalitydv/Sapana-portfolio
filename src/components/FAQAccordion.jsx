import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const defaultFaqs = [
    {
      question: 'What services do you offer?',
      answer: 'I offer web development, mobile app development, UI/UX design, and consulting services.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, typically ranging from 2-12 weeks.',
    },
    {
      question: 'Do you work with remote clients?',
      answer: 'Yes, I work with clients worldwide and am experienced in remote collaboration.',
    },
  ]

  const faqsToShow = faqs.length > 0 ? faqs : defaultFaqs

  return (
    <div className="space-y-4">
      {faqsToShow.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="font-semibold text-gray-900 dark:text-white pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion

