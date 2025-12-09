import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react'

const CaseStudyCard = ({ caseStudy, index = 0 }) => {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
  ]
  const gradientColor = colors[index % colors.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.08,
        y: -10,
        rotateY: 5,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-hover group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Animated background gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className={`h-48 bg-gradient-to-r ${gradientColor} relative overflow-hidden`}
        whileHover={{ scale: 1.05 }}
      >
        {caseStudy.image ? (
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
        ) : (
          <motion.div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {caseStudy.title?.charAt(0) || 'C'}
          </motion.div>
        )}
        {caseStudy.category && (
          <motion.span
            className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold z-10"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {caseStudy.category}
          </motion.span>
        )}
      </motion.div>
      <div className="p-6 relative z-10">
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {caseStudy.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {caseStudy.description}
        </p>
        {caseStudy.results && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            {caseStudy.results.slice(0, 3).map((result, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`text-lg font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                  {result.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
        )}
        <motion.div
          whileHover={{ x: 5 }}
        >
          <Link
            to={`/case-studies/${caseStudy.id}`}
            className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 cursor-hover"
          >
            View Case Study
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.article>
  )
}

export default CaseStudyCard

