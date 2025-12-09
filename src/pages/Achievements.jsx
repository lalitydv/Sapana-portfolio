import { motion } from 'framer-motion'
import { Award, Trophy, Star, Target } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    { title: 'Best Web App 2023', issuer: 'Tech Awards', year: '2023', icon: Trophy },
    { title: 'Innovation Award', issuer: 'Design Community', year: '2023', icon: Award },
    { title: 'Top Developer', issuer: 'Developer Awards', year: '2022', icon: Star },
    { title: 'Excellence in Design', issuer: 'Design Awards', year: '2022', icon: Award },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1-10 - All sections */}
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
                  className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                >
                  Achievements & Awards
                </motion.h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
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
                        <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">{achievement.issuer}</p>
                        <p className="text-sm text-gray-500">{achievement.year}</p>
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
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  Content for achievements section {sectionNum} goes here.
                </motion.p>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Achievements

