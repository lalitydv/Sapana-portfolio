import { motion } from 'framer-motion'
import { Award, BookOpen, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    { title: 'React Developer', issuer: 'Meta', year: '2023', icon: Award },
    { title: 'AWS Certified', issuer: 'Amazon', year: '2023', icon: Award },
    { title: 'JavaScript Advanced', issuer: 'Udemy', year: '2022', icon: BookOpen },
  ]

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
                  className="text-5xl md:text-6xl font-bold text-center mb-8"
                >
                  Certifications
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => {
                    const Icon = cert.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                      >
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{cert.issuer} - {cert.year}</p>
                      </motion.div>
                    )
                  })}
                </div>
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
                  Content for certifications section {sectionNum}.
                </motion.p>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Certifications

