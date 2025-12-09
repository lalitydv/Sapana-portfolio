import { motion } from 'framer-motion'
import HeroIntro from '../components/HeroIntro'
import ProfileCard from '../components/ProfileCard'
import SkillsGrid from '../components/SkillsGrid'
import ProjectShowcaseCard from '../components/ProjectShowcaseCard'
import ServicesCard from '../components/ServicesCard'
import TestimonialsSlider from '../components/TestimonialsSlider'
import ResumeDownloadButton from '../components/ResumeDownloadButton'
import { Award, Code, Zap, Globe, Palette } from 'lucide-react'

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'RideShareLy',
      description: 'Car and Bike Pooling Application - Complete UI/UX design',
      technologies: ['Figma', 'UI/UX Design', 'Mobile App Design'],
      image: null,
      github: null,
      live: null,
    },
    {
      id: 2,
      title: 'Vein Healthcare Website',
      description: 'Pathology Lab website design for Vein Healthcare pvt. ltd.',
      technologies: ['Figma', 'Web Design', 'UI/UX'],
      image: null,
      github: null,
      live: null,
    },
    {
      id: 3,
      title: 'Shinecoder Technology Website',
      description: 'Website design with animations for Shinecoder Technologies',
      technologies: ['Figma', 'Adobe XD', 'Web Design'],
      image: null,
      github: null,
      live: null,
    },
  ]

  const techStack = [
    { name: 'Figma', icon: Code },
    { name: 'Adobe XD', icon: Code },
    { name: 'UI/UX Design', icon: Code },
    { name: 'Web Design', icon: Code },
    { name: 'Graphics Design', icon: Zap },
    { name: 'Product Design', icon: Zap },
  ]

  const certifications = [
    { title: 'ISO 9001:2001', issuer: 'ISO Certification', year: '2023' },
    { title: 'ITEP Course', issuer: 'Infobeans Foundation', year: '2022' },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Hero Introduction */}
      <HeroIntro />

      {/* SECTION 2 - Animated Role Title */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            UI/UX & Graphics Designer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            4+ years of experience crafting impactful digital experiences
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 - Short Bio / Mission Statement */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Creative and detail-oriented Senior UI/UX & Graphic Designer with 4+ years of experience 
            in crafting impactful digital experiences. Skilled in web and mobile UI/UX, branding, and 
            visual design, with a strong focus on usability and aesthetics. Adept at transforming client 
            requirements into modern, engaging interfaces that strengthen brand identity and user satisfaction.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4 - Resume Download CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Want to know more?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Download my resume to learn about my experience and skills
          </motion.p>
          <ResumeDownloadButton />
        </div>
      </section>

      {/* SECTION 5 - Skills Snapshot */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Skills Overview
          </motion.h2>
          <SkillsGrid skills={[
            { name: 'Figma', level: 95, icon: Code, category: 'Design Tool', color: 'from-purple-600 to-pink-500' },
            { name: 'Adobe XD', level: 90, icon: Code, category: 'Design Tool', color: 'from-pink-500 to-purple-500' },
            { name: 'UI/UX Design', level: 95, icon: Code, category: 'Design', color: 'from-purple-500 to-pink-500' },
            { name: 'Web Design', level: 90, icon: Code, category: 'Design', color: 'from-blue-500 to-cyan-500' },
            { name: 'Graphics Design', level: 92, icon: Zap, category: 'Graphics', color: 'from-pink-500 to-rose-500' },
            { name: 'Logo Design', level: 90, icon: Zap, category: 'Branding', color: 'from-yellow-500 to-orange-500' },
          ]} />
        </div>
      </section>

      {/* SECTION 6 - Featured Projects Carousel */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectShowcaseCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Services Overview */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Services I Offer
          </motion.h2>
          <ServicesCard services={[
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
          ]} />
        </div>
      </section>

      {/* SECTION 8 - Testimonials Preview */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What Clients Say
          </motion.h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* SECTION 9 - Tech Stack Icons Row */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
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
                  className="cursor-hover group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${gradientColor} tech-icon-glow relative overflow-hidden mb-2`}
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
                    <Icon className="w-12 h-12 text-white relative z-10" />
                  </motion.div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 relative z-10">
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Awards / Certifications */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Award className="w-10 h-10 text-primary tech-icon-glow" />
            </motion.div>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Certifications & Awards
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
              ]
              const gradientColor = colors[index % colors.length]

              return (
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
                  className="cursor-hover group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Award className={`w-8 h-8 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent tech-icon-glow relative z-10 mb-3`}
                      style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1 relative z-10">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 relative z-10">{cert.year}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 - Contact Quick CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Home

