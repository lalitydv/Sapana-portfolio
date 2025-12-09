import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const BlogCard = ({ post, index = 0 }) => {
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

      {post.image && (
        <motion.div
          className={`h-48 bg-gradient-to-r ${gradientColor} overflow-hidden relative`}
          whileHover={{ scale: 1.05 }}
        >
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      )}
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <motion.span
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <Calendar className="w-4 h-4" />
            {post.date}
          </motion.span>
          <motion.span
            className="flex items-center gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <Clock className="w-4 h-4" />
            {post.readTime}
          </motion.span>
          {post.author && (
            <motion.span
              className="flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              <User className="w-4 h-4" />
              {post.author}
            </motion.span>
          )}
        </div>
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {post.title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 3).map((tag, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${gradientColor} bg-opacity-10 text-primary dark:bg-opacity-20 font-medium`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.div
          whileHover={{ x: 5 }}
        >
          <Link
            to={`/blog/${post.id}`}
            className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 cursor-hover"
          >
            Read More
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

export default BlogCard

