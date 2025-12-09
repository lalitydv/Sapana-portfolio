import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'

const ProfileCard = ({ profile }) => {
  const socialLinks = [
    { icon: Linkedin, href: profile?.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile?.github, label: 'GitHub' },
    { icon: Twitter, href: profile?.twitter, label: 'Twitter' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary p-1"
        >
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-primary">
            {profile?.name?.charAt(0) || 'P'}
          </div>
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {profile?.name || 'Your Name'}
        </h3>
        <p className="text-primary font-semibold">{profile?.title || 'Frontend Developer'}</p>
      </div>

      <div className="space-y-4 mb-6">
        {profile?.location && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 mr-3" />
            <span>{profile.location}</span>
          </div>
        )}
        {profile?.email && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Mail className="w-5 h-5 mr-3" />
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
          </div>
        )}
        {profile?.phone && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Phone className="w-5 h-5 mr-3" />
            <span>{profile.phone}</span>
          </div>
        )}
      </div>

      <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {socialLinks.map((social, index) => (
          social.href && (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          )
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileCard

