import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import ResumeDownloadButton from './ResumeDownloadButton'

const HeroIntro = () => {
  const roles = ['UI/UX Designer', 'Graphics Designer', 'Web Designer', 'Product Designer']

  return (
    <section className="section-padding min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hello, I'm Sapna Prajapat
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            I'm a{' '}
            <span className="text-primary inline-block">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block"
                >
                  {role}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          Creative and detail-oriented Senior UI/UX & Graphic Designer with 4+ years of experience in crafting impactful digital experiences. 
          I transform client requirements into modern, engaging interfaces that strengthen brand identity and user satisfaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ResumeDownloadButton />
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroIntro

