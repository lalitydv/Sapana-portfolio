import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Smartphone, Globe, Zap, Layers, Terminal, Server, Cpu, GitBranch } from 'lucide-react'

const SkillsGrid = ({ skills = [] }) => {
  const defaultSkills = [
    { name: 'React', level: 90, icon: Code, category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', level: 85, icon: Code, category: 'Language', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 80, icon: Code, category: 'Language', color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind CSS', level: 90, icon: Palette, category: 'Styling', color: 'from-cyan-500 to-teal-500' },
    { name: 'Node.js', level: 75, icon: Cloud, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', level: 70, icon: Database, category: 'Database', color: 'from-green-600 to-green-400' },
  ]

  const skillsToShow = skills.length > 0 ? skills : defaultSkills

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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {skillsToShow.map((skill, index) => {
        const Icon = skill.icon || Code
        const gradientColor = skill.color || 'from-primary to-secondary'
        
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

            {/* Icon container with enhanced effects */}
            <div className="relative z-10 flex items-center mb-4">
              <motion.div
                className={`p-4 rounded-xl bg-gradient-to-br ${gradientColor} mr-4 tech-icon-glow relative overflow-hidden`}
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
                <Icon className="w-7 h-7 text-white relative z-10" />
              </motion.div>
              
              <div className="flex-1">
                <motion.h4 
                  className="font-bold text-lg text-gray-900 dark:text-white"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {skill.name}
                </motion.h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.category}</p>
              </div>
            </div>

            {/* Progress bar with animation */}
            <div className="relative z-10">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className={`h-3 rounded-full bg-gradient-to-r ${gradientColor} relative overflow-hidden`}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.div
                className="flex justify-between items-center mt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                <motion.span
                  className={`text-sm font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.8,
                    type: 'spring',
                    stiffness: 200,
                  }}
                >
                  {skill.level}%
                </motion.span>
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
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default SkillsGrid

