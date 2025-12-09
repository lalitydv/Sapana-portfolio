import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Search, Zap, Shield } from 'lucide-react'

const ServicesCard = ({ services = [] }) => {
  const defaultServices = [
    {
      icon: Palette,
      title: 'App UI/UX',
      description: 'Mobile and web application interfaces with focus on usability and aesthetics.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Web Design',
      description: 'Modern and responsive website designs that enhance user experience.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Graphics Post',
      description: 'Creative graphics posts for social media and digital marketing campaigns.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Palette,
      title: 'Brochure/Flyer',
      description: 'Professional print and digital marketing materials including brochures and flyers.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique and memorable logo designs that strengthen brand identity.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Palette,
      title: 'Product Design',
      description: 'End-to-end product design from concept to final interface.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  const servicesToShow = services.length > 0 ? services : defaultServices

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
    >
      {servicesToShow.map((service, index) => {
        const Icon = service.icon || Code
        const gradientColor = service.color || 'from-primary to-secondary'

        return (
          <motion.div
            key={index}
            variants={itemVariants}
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
              className={`p-4 rounded-xl bg-gradient-to-br ${gradientColor} w-fit mb-4 tech-icon-glow relative overflow-hidden`}
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
              <Icon className="w-8 h-8 text-white relative z-10" />
            </motion.div>

            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {service.title}
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 relative z-10">{service.description}</p>

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
      })}
    </motion.div>
  )
}

export default ServicesCard

