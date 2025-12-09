import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlogCard from '../components/BlogCard'
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()

  const post = {
    id: id,
    title: 'Getting Started with React 18',
    excerpt: 'Learn the new features and improvements in React 18',
    content: `
      <h2>Introduction</h2>
      <p>React 18 introduces several exciting new features and improvements that make building user interfaces even more powerful and efficient.</p>
      
      <h2>New Features</h2>
      <h3>Concurrent Rendering</h3>
      <p>One of the most significant additions is concurrent rendering, which allows React to interrupt rendering work to handle more urgent updates.</p>
      
      <h3>Automatic Batching</h3>
      <p>React 18 automatically batches state updates, reducing the number of re-renders and improving performance.</p>
      
      <h3>New Hooks</h3>
      <p>Several new hooks have been introduced, including useTransition, useDeferredValue, and useId.</p>
      
      <h2>Migration Guide</h2>
      <p>Migrating to React 18 is straightforward. Most applications will work without changes, but you can opt into new features gradually.</p>
      
      <h2>Conclusion</h2>
      <p>React 18 brings powerful new capabilities while maintaining backward compatibility. Start exploring these features today!</p>
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Your Name',
    tags: ['React', 'JavaScript', 'Web Development'],
    category: 'Web Development',
    image: null,
  }

  const relatedPosts = [
    {
      id: 2,
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'Your Name',
      tags: ['TypeScript', 'JavaScript'],
      category: 'Tutorials',
      image: null,
    },
    {
      id: 3,
      title: 'Performance Optimization Techniques',
      excerpt: 'Advanced techniques to improve performance',
      date: '2024-01-05',
      readTime: '6 min read',
      author: 'Your Name',
      tags: ['Performance', 'Optimization'],
      category: 'Tips',
      image: null,
    },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Post Header */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-white">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {post.title}
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Post Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* SECTION 3 - Tags */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Share Buttons */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Share2 className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <span className="font-semibold">Share:</span>
            {['Twitter', 'LinkedIn', 'Facebook'].map((platform, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                {platform}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Author Bio */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                {post.author?.charAt(0) || 'A'}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Frontend developer passionate about creating beautiful and functional web experiences.
                  Sharing knowledge and insights about web development.
                </p>
                <a href="/about" className="text-primary hover:text-secondary font-semibold">
                  Learn more →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - Related Posts */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <BookOpen className="w-8 h-8 text-primary" />
            Related Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Comments Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Comments
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <textarea
              placeholder="Add a comment..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white mb-4"
              rows="4"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Post Comment
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Reading Progress */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-2">Reading Progress</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - Table of Contents */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4"
          >
            Table of Contents
          </motion.h3>
          <ul className="space-y-2">
            {['Introduction', 'New Features', 'Concurrent Rendering', 'Automatic Batching', 'Migration Guide', 'Conclusion'].map(
              (item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary cursor-pointer"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* SECTION 10 - Newsletter CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-white/90 mb-6">Subscribe to get more articles like this delivered to your inbox</p>
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
    </div>
  )
}

export default BlogPost

