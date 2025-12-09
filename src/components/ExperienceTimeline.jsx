import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const ExperienceTimeline = ({ experiences = [] }) => {
  const defaultExperiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development initiatives and mentoring junior developers.',
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and modern JavaScript.',
    },
    {
      title: 'Junior Developer',
      company: 'Web Agency',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Built and maintained client websites using HTML, CSS, and JavaScript.',
    },
  ]

  const experiencesToShow = experiences.length > 0 ? experiences : defaultExperiences

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
      <div className="space-y-8">
        {experiencesToShow.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16 md:pl-20"
          >
            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hidden md:flex">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {exp.title}
              </h3>
              <p className="text-primary font-semibold mb-3">{exp.company}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline

