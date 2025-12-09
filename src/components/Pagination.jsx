import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center gap-2">
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        whileHover={{ scale: currentPage !== 1 ? 1.1 : 1 }}
        whileTap={{ scale: currentPage !== 1 ? 0.9 : 1 }}
        className={`p-2 rounded-lg ${
          currentPage === 1
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
        } transition-colors`}
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() => onPageChange(page)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            currentPage === page
              ? 'bg-gradient-to-r from-primary to-secondary text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        whileHover={{ scale: currentPage !== totalPages ? 1.1 : 1 }}
        whileTap={{ scale: currentPage !== totalPages ? 0.9 : 1 }}
        className={`p-2 rounded-lg ${
          currentPage === totalPages
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
        } transition-colors`}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  )
}

export default Pagination

