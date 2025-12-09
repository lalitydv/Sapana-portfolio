import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'

const Press = () => {
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
                  <Newspaper className="w-12 h-12 text-primary" />
                  Press & Media
                </motion.h1>
              </>
            )}
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
              Content for press & media section {sectionNum}.
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Press

