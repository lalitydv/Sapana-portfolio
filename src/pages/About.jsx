import { motion } from 'framer-motion'
import ProfileCard from '../components/ProfileCard'
import ExperienceTimeline from '../components/ExperienceTimeline'
import EducationTimeline from '../components/EducationTimeline'
import { Heart, Target, Users, Lightbulb, Coffee, Music, Book, Gamepad2 } from 'lucide-react'

const About = () => {
  const strengths = [
    { title: 'Problem Solving', icon: Lightbulb, description: 'Analytical thinking and creative solutions' },
    { title: 'Team Collaboration', icon: Users, description: 'Effective communication and teamwork' },
    { title: 'Attention to Detail', icon: Target, description: 'Meticulous approach to quality' },
    { title: 'Continuous Learning', icon: Book, description: 'Always staying updated with latest trends' },
  ]

  const softSkills = [
    'Communication', 'Leadership', 'Time Management', 'Adaptability',
    'Critical Thinking', 'Empathy', 'Creativity', 'Resilience',
  ]

  const hobbies = [
    { name: 'Reading', icon: Book },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Music', icon: Music },
    { name: 'Coffee', icon: Coffee },
  ]

  const profile = {
    name: 'Sapna Prajapat',
    title: 'UI/UX & Graphics Designer',
    location: 'Indore, M.P., India',
    email: 'sejmaprajapat079@gmail.com',
    phone: '+91 9171208053',
    linkedin: null,
    github: null,
    twitter: null,
  }

  return (
    <div className="pt-16">
      {/* SECTION 1 - About Me Introduction */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto"
          >
            Welcome to my portfolio! I'm a creative and detail-oriented UI/UX & Graphic Designer 
            with 4+ years of experience crafting impactful digital experiences.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Personal Story */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            My Story
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              My journey in UI/UX and Graphic Design began with a passion for creating visually 
              appealing and user-friendly digital experiences. Over 4+ years, I've honed my skills 
              in transforming client requirements into modern, engaging interfaces.
            </p>
            <p>
              I've worked with various companies including Shinecoder Technologies, Cerbosys Technology, 
              and Corusview IT Services, designing interactive web interfaces, admin panels, dashboards, 
              and marketing materials. Each project has strengthened my expertise in usability and aesthetics.
            </p>
            <p>
              I specialize in App UI/UX, Web Design, Graphics Posts, Brochures/Flyers, Logo Design, 
              and Product Design. My goal is to continue creating designs that not only look great but 
              also provide exceptional user experiences and strengthen brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - Background Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Background
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I hold a Bachelor of Computer Application (BCA) degree from PMB Gujrati Science College, 
                Indore. My academic background provided a strong foundation in computer applications 
                and design principles.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I've also completed ITEP Course from Infobeans Foundation (1 Year Offline Training) 
                and continue to enhance my skills through hands-on projects and staying updated with 
                the latest design trends and tools.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With 4+ years of experience, I've worked with multiple software development companies 
                including Shinecoder Technologies, Cerbosys Technology, and Corusview IT Services. 
                Each role has contributed to my growth in UI/UX and graphic design.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I've designed interactive web interfaces, admin panels, dashboards, marketing graphics, 
                social media posts, and branding materials for various SaaS, e-commerce, healthcare, 
                and HRMS projects, giving me a well-rounded perspective on design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Strength Highlights */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            My Strengths
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{strength.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{strength.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Soft Skills Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Soft Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-4 text-center font-semibold shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Experience Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Work Experience
          </motion.h2>
          <ExperienceTimeline experiences={[
            {
              title: 'UI/UX & Graphic Designer',
              company: 'Shinecoder Technologies pvt ltd',
              location: 'Indore, M.P., India',
              period: '2022 - Present',
              description: 'Designed interactive and animated web interfaces using Figma and Adobe XD. Created user-friendly dashboards for HRMS and healthcare projects. Enhanced brand presence through consistent design systems and marketing creatives.',
            },
            {
              title: 'UI/UX & Graphic Designer',
              company: 'Cerbosys Technology pvt ltd',
              location: 'Indore, M.P., India',
              period: '2021 - 2022',
              description: 'Designed admin panels and landing pages for SaaS and e-commerce clients. Developed marketing graphics, social media posts, Flyers, Brochures and branding materials.',
            },
            {
              title: 'UI/UX Designer',
              company: 'Corusview IT Services Pvt. Ltd.',
              location: 'Indore, M.P., India',
              period: '2020 - 2021',
              description: 'Created web layouts, infographics, and video content for client campaigns. Focused on SaaS-based solutions, UI/UX, and Web Designs.',
            },
          ]} />
        </div>
      </section>

      {/* SECTION 7 - Education Timeline */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <EducationTimeline education={[
            {
              degree: 'Bachelor of Computer Application',
              institution: 'PMB Gujrati Science College, Indore',
              period: '2016 - 2019',
              description: 'Focused on computer applications, programming, and design principles.',
            },
            {
              degree: 'ITEP Course',
              institution: 'Infobeans Foundation',
              period: '2019 - 2020',
              description: '1 Year Offline Training in IT and design technologies.',
            },
          ]} />
        </div>
      </section>

      {/* SECTION 8 - Achievements & Certifications */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Achievements & Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO 9001:2001', issuer: 'ISO Certification', year: '2023' },
              { title: 'ITEP Course', issuer: 'Infobeans Foundation', year: '2020' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Tools & Technologies Used */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Tools & Technologies
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Figma', 'Adobe XD', 'UI/UX Design', 'Web Design', 'Graphics Design',
              'Logo Design', 'Product Design', 'Brochure Design', 'Flyer Design',
              'Social Media Graphics', 'Branding', 'Marketing Creatives', 'Dashboard Design',
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - Hobbies & Interests */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Heart className="w-8 h-8 text-primary" />
            Hobbies & Interests
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-gray-900 dark:text-white">{hobby.name}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 - Call to Action */}
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
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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

export default About

