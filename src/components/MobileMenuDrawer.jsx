import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useEffect, useState } from 'react'

const MobileMenuDrawer = ({ isOpen, onClose, navLinks }) => {
  const location = useLocation()
  const { theme } = useTheme()
  const [bgColor, setBgColor] = useState('#ffffff')

  useEffect(() => {
    setBgColor(theme === 'dark' ? '#111827' : '#ffffff')
  }, [theme])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          />
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 w-64 z-[70] md:hidden shadow-2xl border-l border-gray-200 dark:border-gray-700 overflow-y-auto"
            style={{
              backgroundColor: bgColor,
            }}
          >
            <div
              className="flex flex-col p-4 space-y-4 h-full"
              style={{
                backgroundColor: bgColor,
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenuDrawer

