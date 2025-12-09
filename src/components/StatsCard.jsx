import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

const StatsCard = ({ stat, index = 0 }) => {
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
      className="cursor-hover group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-center"
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

      {stat.icon && (
        <motion.div
          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center tech-icon-glow relative overflow-hidden`}
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.15,
          }}
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
          <stat.icon className="w-8 h-8 text-white relative z-10" />
        </motion.div>
      )}
      <motion.div
        className={`text-4xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent mb-2 relative z-10`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1 relative z-10">
        {stat.label}
      </div>
      {stat.change && (
        <motion.div
          className="flex items-center justify-center gap-1 text-sm text-green-600 dark:text-green-400 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <TrendingUp className="w-4 h-4" />
          </motion.div>
          <span>{stat.change}</span>
        </motion.div>
      )}
      {stat.description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 relative z-10">
          {stat.description}
        </p>
      )}

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

export default StatsCard

