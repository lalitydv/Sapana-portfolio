import { useState } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import FilterTabs from '../components/FilterTabs'
import Pagination from '../components/Pagination'
import { BookOpen, TrendingUp, Calendar } from 'lucide-react'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const categories = ['All', 'Web Development', 'Design', 'Tutorials', 'Tips', 'News']

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React 18',
      excerpt: 'Learn the new features and improvements in React 18 and how to migrate your existing applications.',
      content: 'Full content here...',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Your Name',
      tags: ['React', 'JavaScript', 'Web Development'],
      category: 'Web Development',
      image: null,
    },
    {
      id: 2,
      title: 'Design Systems: Building Consistency',
      excerpt: 'How to create and maintain a design system that scales with your product.',
      content: 'Full content here...',
      date: '2024-01-10',
      readTime: '8 min read',
      author: 'Your Name',
      tags: ['Design', 'UI/UX', 'Design Systems'],
      category: 'Design',
      image: null,
    },
    {
      id: 3,
      title: 'Performance Optimization Techniques',
      excerpt: 'Advanced techniques to improve your web application performance.',
      content: 'Full content here...',
      date: '2024-01-05',
      readTime: '6 min read',
      author: 'Your Name',
      tags: ['Performance', 'Optimization', 'Web Development'],
      category: 'Tips',
      image: null,
    },
    {
      id: 4,
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for modern web development.',
      content: 'Full content here...',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'Your Name',
      tags: ['TypeScript', 'JavaScript', 'Web Development'],
      category: 'Tutorials',
      image: null,
    },
    {
      id: 5,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies shaping the future of web development.',
      content: 'Full content here...',
      date: '2023-12-20',
      readTime: '10 min read',
      author: 'Your Name',
      tags: ['Web Development', 'Future', 'Technology'],
      category: 'News',
      image: null,
    },
    {
      id: 6,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'When to use CSS Grid and when to use Flexbox for your layouts.',
      content: 'Full content here...',
      date: '2023-12-15',
      readTime: '6 min read',
      author: 'Your Name',
      tags: ['CSS', 'Web Development', 'Tutorials'],
      category: 'Tutorials',
      image: null,
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 4)

  return (
    <div className="pt-16">
      {/* SECTION 1 - Blog Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Blog & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Insights, tutorials, and thoughts on web development, design, and technology
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Search Bar */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={setSearchQuery} placeholder="Search articles..." />
        </div>
      </section>

      {/* SECTION 3 - Category Filters */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <FilterTabs
            filters={categories}
            activeFilter={activeCategory}
            onFilterChange={setActiveCategory}
          />
        </div>
      </section>

      {/* SECTION 4 - Featured Post */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <TrendingUp className="w-8 h-8 text-primary" />
            Featured Article
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-r from-primary to-secondary" />
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <a
                  href={`/blog/${featuredPost.id}`}
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <BookOpen className="w-8 h-8 text-primary" />
            All Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - Recent Posts Sidebar */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Recent Posts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h4 className="font-bold mb-2">{post.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Blog Statistics */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Articles', value: blogPosts.length },
              { label: 'Categories', value: categories.length - 1 },
              { label: 'Total Views', value: '10K+' },
              { label: 'Subscribers', value: '500+' },
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

      {/* SECTION 8 - Popular Tags */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Popular Tags
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'JavaScript', 'TypeScript', 'CSS', 'Design', 'Web Development', 'Tutorials', 'Tips'].map(
              (tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Newsletter Signup */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-white/90 mb-6">Get the latest articles and updates delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 - Pagination */}
      {totalPages > 1 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      )}
    </div>
  )
}

export default Blog

