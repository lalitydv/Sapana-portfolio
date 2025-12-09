import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const PricingCard = ({ plan, index = 0, featured = false }) => {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
  ]
  const gradientColor = colors[index % colors.length]

  return (
    <motion.div
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
        scale: featured ? 1.1 : 1.08,
        y: -10,
        rotateY: 5,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-hover group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${featured ? 'ring-2 ring-primary' : ''
        }`}
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

      {featured && (
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
        >
          <span className={`bg-gradient-to-r ${gradientColor} text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg`}>
            Popular
          </span>
        </motion.div>
      )}
      <div className="text-center mb-6 relative z-10">
        <motion.h3
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          whileHover={{ scale: 1.05 }}
        >
          {plan.name}
        </motion.h3>
        <div className="mb-4">
          <motion.span
            className={`text-4xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
          >
            ${plan.price}
          </motion.span>
          {plan.period && (
            <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
      </div>
      <ul className="space-y-3 mb-8 relative z-10">
        {plan.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="flex items-start gap-3"
            whileHover={{ x: 5 }}
          >
            {feature.included ? (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              </motion.div>
            ) : (
              <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            )}
            <span
              className={`${feature.included
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-400 line-through'
                }`}
            >
              {feature.text}
            </span>
          </motion.li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 w-full py-3 rounded-lg font-semibold transition-colors overflow-hidden ${featured
            ? `bg-gradient-to-r ${gradientColor} text-white`
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
      >
        {/* Button shine effect */}
        {featured && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />
        )}
        <span className="relative z-10">{plan.buttonText || 'Get Started'}</span>
      </motion.button>

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
    </motion.div>
  )
}

export default PricingCard

