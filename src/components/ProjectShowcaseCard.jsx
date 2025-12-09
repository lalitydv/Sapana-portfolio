import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'

const ProjectShowcaseCard = ({ project, index = 0 }) => {
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-cyan-500',
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

      <div className={`relative h-48 bg-gradient-to-r ${gradientColor} overflow-hidden`}>
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.div
            className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {project.title?.charAt(0) || 'P'}
          </motion.div>
        )}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-hover"
              aria-label="View on GitHub"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-hover"
              aria-label="View live site"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          )}
        </div>
      </div>
      <div className="p-6 relative z-10">
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {project.title || 'Project Title'}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description || 'Project description goes here...'}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${gradientColor} bg-opacity-10 text-primary dark:bg-opacity-20 font-medium`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        {project.id && (
          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link
              to={`/projects/${project.id}`}
              className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 cursor-hover"
            >
              Learn More
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        )}
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
}

export default ProjectShowcaseCard

