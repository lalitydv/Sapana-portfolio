import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const EducationTimeline = ({ education = [] }) => {
  const defaultEducation = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and web technologies.',
      gpa: '3.8/4.0',
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      period: '2010 - 2014',
      description: 'Graduated with honors in Mathematics and Science.',
    },
  ]

  const educationToShow = education.length > 0 ? education : defaultEducation

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block" />
      <div className="space-y-8">
        {educationToShow.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16 md:pl-20"
          >
            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hidden md:flex">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {edu.degree}
              </h3>
              <p className="text-primary font-semibold mb-3">{edu.institution}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
                {edu.gpa && (
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default EducationTimeline

