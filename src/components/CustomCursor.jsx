import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if device supports mouse (not touch)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(hover: none)').matches)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    if (!isDesktop) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', checkDesktop)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      {/* Outer dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-white dark:bg-white border-2 border-white shadow-lg" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.3,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-primary"
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.8 : 1,
          }}
        />
      </motion.div>

      {/* Ripple effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.3, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-primary" />
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor

