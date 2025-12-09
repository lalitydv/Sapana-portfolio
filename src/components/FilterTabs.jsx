import { motion } from 'framer-motion'

const FilterTabs = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            activeFilter === filter
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
}

export default FilterTabs

