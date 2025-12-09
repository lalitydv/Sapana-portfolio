import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SkillsGrid from '../components/SkillsGrid'
import { Code, Palette, Database, Cloud, Award, Zap } from 'lucide-react'

const Skills = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  const designTools = [
    { name: 'Figma', level: 95, icon: Palette, category: 'Design Tool', color: 'from-purple-600 to-pink-500' },
    { name: 'Adobe XD', level: 90, icon: Palette, category: 'Design Tool', color: 'from-pink-500 to-purple-500' },
    { name: 'Adobe Photoshop', level: 85, icon: Palette, category: 'Graphics', color: 'from-blue-500 to-cyan-500' },
    { name: 'Adobe Illustrator', level: 85, icon: Palette, category: 'Graphics', color: 'from-orange-500 to-red-500' },
  ]

  const designSkills = [
    { name: 'UI/UX Design', level: 95, icon: Palette, category: 'Design', color: 'from-purple-500 to-pink-500' },
    { name: 'Web Design', level: 90, icon: Palette, category: 'Design', color: 'from-blue-500 to-cyan-500' },
    { name: 'Mobile App Design', level: 88, icon: Palette, category: 'Design', color: 'from-green-500 to-emerald-500' },
    { name: 'Product Design', level: 85, icon: Palette, category: 'Design', color: 'from-indigo-500 to-purple-500' },
    { name: 'Logo Design', level: 90, icon: Palette, category: 'Branding', color: 'from-yellow-500 to-orange-500' },
    { name: 'Graphics Design', level: 92, icon: Palette, category: 'Graphics', color: 'from-pink-500 to-rose-500' },
  ]

  const uiTools = [
    { name: 'Brochure Design', level: 90, icon: Palette, category: 'Print Design', color: 'from-cyan-500 to-teal-500' },
    { name: 'Flyer Design', level: 90, icon: Palette, category: 'Print Design', color: 'from-purple-500 to-pink-500' },
    { name: 'Social Media Graphics', level: 92, icon: Palette, category: 'Digital Marketing', color: 'from-blue-500 to-indigo-500' },
    { name: 'Dashboard Design', level: 88, icon: Palette, category: 'UI Design', color: 'from-green-500 to-emerald-500' },
    { name: 'Admin Panel Design', level: 90, icon: Palette, category: 'UI Design', color: 'from-orange-500 to-red-500' },
  ]


  const softSkills = [
    'Communication', 'Team Leadership', 'Problem Solving', 'Time Management',
    'Adaptability', 'Critical Thinking', 'Project Management', 'Mentoring',
  ]

  const certifications = [
    { title: 'ISO 9001:2001', issuer: 'ISO Certification', year: '2023' },
    { title: 'ITEP Course', issuer: 'Infobeans Foundation', year: '2020' },
  ]

  const tools = [
    { name: 'Figma', icon: Palette },
    { name: 'Adobe XD', icon: Palette },
    { name: 'Photoshop', icon: Palette },
    { name: 'Illustrator', icon: Palette },
    { name: 'InDesign', icon: Palette },
    { name: 'Sketch', icon: Palette },
  ]

  return (
    <div ref={containerRef} className="pt-16 relative overflow-hidden">
      {/* Animated background elements with ground motion */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ y }}
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
          className="absolute top-40 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          style={{ y, opacity }}
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
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
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

      {/* SECTION 1 - Hard Skills Categories */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient cursor-hover"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Skills & Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12"
            >
              A comprehensive overview of my design skills, tools, and expertise across
              various domains of UI/UX design, graphics design, and web design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - Programming Languages */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          {/* Floating decorative icon */}
          <motion.div
            className="absolute -top-10 -right-10 opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Code className="w-32 h-32 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3 cursor-hover"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="w-8 h-8 text-primary tech-icon-glow" />
            </motion.div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Design Tools
            </span>
          </motion.h2>
          <SkillsGrid skills={designTools} />
        </div>
      </section>

      {/* SECTION 3 - Frameworks & Libraries */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3 cursor-hover"
          >
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-8 h-8 text-primary tech-icon-glow" />
            </motion.div>
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Design Skills
            </span>
          </motion.h2>
          <SkillsGrid skills={designSkills} />
        </div>
      </section>

      {/* SECTION 4 - UI/UX Tools */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3 cursor-hover"
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
                y: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Palette className="w-8 h-8 text-primary tech-icon-glow" />
            </motion.div>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              UI/UX Tools
            </span>
          </motion.h2>
          <SkillsGrid skills={uiTools} />
        </div>
      </section>


      {/* SECTION 8 - Soft Skills Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-hover"
          >
            Soft Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotateZ: 2,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-hover bg-white dark:bg-gray-800 rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <span className="relative z-10">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Interactive Skill Bars / Progress */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient cursor-hover"
          >
            Skill Proficiency Overview
          </motion.h2>
          <div className="space-y-6">
            {[
              { skill: 'UI/UX Design', level: 95, color: 'from-purple-500 to-pink-500' },
              { skill: 'Web Design', level: 90, color: 'from-blue-500 to-cyan-500' },
              { skill: 'Graphics Design', level: 92, color: 'from-pink-500 to-rose-500' },
              { skill: 'Mobile App Design', level: 88, color: 'from-green-500 to-emerald-500' },
              { skill: 'Product Design', level: 85, color: 'from-indigo-500 to-purple-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.02,
                  x: 10,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
                }}
                className="cursor-hover bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="flex justify-between mb-2 relative z-10">
                  <motion.span
                    className="font-semibold text-gray-900 dark:text-white"
                    whileHover={{ x: 5 }}
                  >
                    {item.skill}
                  </motion.span>
                  <motion.span
                    className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: 'spring',
                      stiffness: 200
                    }}
                  >
                    {item.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    className={`h-4 rounded-full bg-gradient-to-r ${item.color} relative overflow-hidden`}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Skill Certifications */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3 cursor-hover"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-8 h-8 text-primary tech-icon-glow" />
            </motion.div>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3)'
                }}
                className="cursor-hover bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Glowing background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4 tech-icon-glow relative z-10" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 relative z-10">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1 relative z-10">{cert.issuer}</p>
                <p className="text-sm text-gray-500 relative z-10">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 - Tools Icons Grid */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-hover"
          >
            Design Tools & Software
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500',
                'from-teal-500 to-cyan-500',
              ]
              const color = colors[index % colors.length]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    rotate: [0, -5, 5, 0],
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-hover bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-r ${color} bg-clip-text text-transparent tech-icon-glow relative z-10`}
                      style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }}
                    />
                  </motion.div>
                  <p className="font-semibold text-gray-900 dark:text-white relative z-10">{tool.name}</p>

                  {/* Floating particles */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${30 + i * 40}%`,
                        top: `${20 + i * 30}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

