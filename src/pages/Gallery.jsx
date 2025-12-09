import { useState } from 'react'
import { motion } from 'framer-motion'
import FilterTabs from '../components/FilterTabs'
import { Image as ImageIcon, Grid, List } from 'lucide-react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  const filters = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'UI/UX']

  const galleryItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ['Web Design', 'Mobile Apps', 'Branding', 'UI/UX'][i % 4],
    image: null,
  }))

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="pt-16">
      {/* SECTION 1 - Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4"
          >
            <ImageIcon className="w-12 h-12" />
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            A visual showcase of my work
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Filters */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <FilterTabs filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-6'
            }
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Statistics */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', value: galleryItems.length },
              { label: 'Categories', value: filters.length - 1 },
              { label: 'Years Experience', value: '5+' },
              { label: 'Happy Clients', value: '50+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5-10 - Additional sections */}
      {[5, 6, 7, 8, 9, 10].map((sectionNum) => (
        <section key={sectionNum} className={`section-padding ${sectionNum % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              Section {sectionNum}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400"
            >
              Content for section {sectionNum} goes here. This is a placeholder for additional gallery content and features.
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Gallery

