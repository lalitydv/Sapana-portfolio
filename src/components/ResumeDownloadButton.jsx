import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Replace with actual resume file path
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update with your resume file path
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
    >
      <Download className="w-5 h-5" />
      Download Resume
    </motion.button>
  )
}

export default ResumeDownloadButton

