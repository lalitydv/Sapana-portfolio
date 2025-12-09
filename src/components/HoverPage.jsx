import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'

const HoverPage = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 100 }
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig)
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig)
  
  // Hide navbar and footer for this page
  useEffect(() => {
    const navbar = document.querySelector('nav')
    const footer = document.querySelector('footer')
    if (navbar) navbar.style.display = 'none'
    if (footer) footer.style.display = 'none'
    
    return () => {
      if (navbar) navbar.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const xPos = (e.clientX - centerX) / rect.width
      const yPos = (e.clientY - centerY) / rect.height
      
      mouseX.set(xPos)
      mouseY.set(yPos)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* 3D Torus-like shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main Torus */}
        <motion.div
          className="relative w-[600px] h-[600px]"
          style={{ x, y }}
        >
          {/* Outer Ring - Gradient Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Gradient border using box-shadow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)',
                padding: '8px',
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl pointer-events-none" />
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-[100px] rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(225deg, #ec4899, #f97316, #3b82f6, #8b5cf6, #ec4899)',
                padding: '6px',
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 via-orange-500/20 to-blue-500/20 blur-lg pointer-events-none" />
          </motion.div>

          {/* Inner Core */}
          <motion.div
            className="absolute inset-[200px] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/30 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
              style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                x: [
                  `calc(-50% + ${Math.cos((i * Math.PI * 2) / 12) * 250}px)`,
                  `calc(-50% + ${Math.cos((i * Math.PI * 2) / 12) * 280}px)`,
                  `calc(-50% + ${Math.cos((i * Math.PI * 2) / 12) * 250}px)`,
                ],
                y: [
                  `calc(-50% + ${Math.sin((i * Math.PI * 2) / 12) * 250}px)`,
                  `calc(-50% + ${Math.sin((i * Math.PI * 2) / 12) * 280}px)`,
                  `calc(-50% + ${Math.sin((i * Math.PI * 2) / 12) * 250}px)`,
                ],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Secondary Torus */}
        <motion.div
          className="absolute top-20 right-20 w-[400px] h-[400px] opacity-60"
          style={{
            x: useTransform(x, (val) => val * 0.5),
            y: useTransform(y, (val) => val * 0.5),
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-6 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 blur-2xl"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Tertiary Torus */}
        <motion.div
          className="absolute bottom-20 left-20 w-[300px] h-[300px] opacity-40"
          style={{
            x: useTransform(x, (val) => val * -0.3),
            y: useTransform(y, (val) => val * -0.3),
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 bg-gradient-to-br from-pink-500/30 via-orange-500/30 to-yellow-500/30 blur-xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          {/* Main Title */}
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Welcome
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl text-blue-200 mb-8 font-light"
          >
            Experience the Future of Design
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg text-blue-300/80 mb-12 max-w-2xl mx-auto"
          >
            Immerse yourself in a world of vibrant gradients, fluid animations, and interactive 3D elements.
            Move your cursor to explore the dynamic space.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white overflow-hidden cursor-hover"
            >
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
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all cursor-hover"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center gap-8 mt-16"
          >
            {[
              { icon: Sparkles, label: '3D Graphics' },
              { icon: Zap, label: 'Smooth Animations' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className="p-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Icon className="w-8 h-8 text-blue-300" />
                  </motion.div>
                  <span className="text-sm text-blue-200">{item.label}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive cursor effect */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 blur-xl" />
        </motion.div>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  )
}

export default HoverPage

