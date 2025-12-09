import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'
import MobileMenuDrawer from './MobileMenuDrawer'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="relative group flex items-center gap-2"
            >
              {/* Animated gradient background circle */}
              <motion.div
                className="absolute -left-2 w-10 h-10 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Design icon/logo */}
              <motion.div
                className="relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(59, 130, 246, 0.8)',
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.span
                    className="text-white font-bold text-sm"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    S
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Animated name */}
              <motion.span
                className="text-2xl font-bold relative z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  Sapna
                </motion.span>

                {/* Glowing underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === link.path
                    ? 'text-primary dark:text-primary'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenuDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} navLinks={navLinks} />
    </>
  )
}

export default Navbar

