import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
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
        scale: 1.08,
        y: -10,
        rotateY: 5,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-hover group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
        className="relative z-10"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Quote className={`w-8 h-8 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent mb-4 tech-icon-glow`}
          style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }}
        />
      </motion.div>
      <p className="text-gray-700 dark:text-gray-300 mb-4 italic relative z-10">
        "{testimonial.content}"
      </p>
      {testimonial.rating && (
        <div className="flex gap-1 mb-4 relative z-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.1 }}
            >
              <Star
                className={`w-4 h-4 ${i < testimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                  }`}
              />
            </motion.div>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 relative z-10">
        <motion.div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradientColor} flex items-center justify-center text-white font-bold tech-icon-glow relative overflow-hidden`}
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {/* Shine effect */}
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
          <span className="relative z-10">{testimonial.name?.charAt(0) || 'T'}</span>
        </motion.div>
        <div>
          <motion.p
            className="font-semibold text-gray-900 dark:text-white"
            whileHover={{ x: 5 }}
          >
            {testimonial.name}
          </motion.p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
          </p>
          {testimonial.company && (
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {testimonial.company}
            </p>
          )}
        </div>
      </div>

      {/* Floating particles effect */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${30 + i * 40}%`,
            top: `${20 + i * 30}%`,
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

export default TestimonialCard

