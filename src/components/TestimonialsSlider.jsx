import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TestimonialsSlider = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Startup',
      content: 'Exceptional work! Delivered exactly what we needed and more.',
      avatar: null,
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      content: 'Professional, creative, and always on time. Highly recommended!',
      avatar: null,
    },
    {
      name: 'Mike Johnson',
      role: 'Design Lead',
      content: 'The best developer I\'ve worked with. Attention to detail is outstanding.',
      avatar: null,
    },
  ]

  const testimonialsToShow = testimonials.length > 0 ? testimonials : defaultTestimonials
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsToShow.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsToShow.length) % testimonialsToShow.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <Quote className="w-12 h-12 text-primary mb-4" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
            "{testimonialsToShow[currentIndex].content}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
              {testimonialsToShow[currentIndex].name?.charAt(0) || 'T'}
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {testimonialsToShow[currentIndex].name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonialsToShow[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonialsToShow.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default TestimonialsSlider

