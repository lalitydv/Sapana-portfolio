import { motion } from 'framer-motion'
import PricingCard from '../components/PricingCard'
import FAQAccordion from '../components/FAQAccordion'
import { CheckCircle, Zap, Shield, Headphones } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 999,
      period: 'project',
      description: 'Perfect for small projects and startups',
      features: [
        { text: 'Up to 5 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Basic SEO', included: true },
        { text: '1 month support', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Social Media Integration', included: false },
        { text: 'Custom Features', included: false },
        { text: 'Priority Support', included: false },
        { text: 'Content Management System', included: false },
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Professional',
      price: 2499,
      period: 'project',
      description: 'Ideal for growing businesses',
      features: [
        { text: 'Up to 15 pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Advanced SEO', included: true },
        { text: '3 months support', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Custom Features', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Content Management System', included: false },
      ],
      buttonText: 'Get Started',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 4999,
      period: 'project',
      description: 'For large-scale projects',
      features: [
        { text: 'Unlimited pages', included: true },
        { text: 'Responsive Design', included: true },
        { text: 'Full SEO Package', included: true },
        { text: '6 months support', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Custom Features', included: true },
        { text: 'Priority Support', included: true },
        { text: 'Content Management System', included: true },
      ],
      buttonText: 'Contact Us',
    },
  ]

  const addons = [
    { name: 'Additional Pages', price: '$100/page' },
    { name: 'E-Commerce Integration', price: '$500' },
    { name: 'Custom Animations', price: '$300' },
    { name: 'Advanced Analytics', price: '$200' },
    { name: 'Multi-language Support', price: '$400' },
    { name: 'API Integration', price: '$600' },
  ]

  return (
    <div className="pt-16">
      {/* SECTION 1 - Pricing Hero */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Pricing Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your project. All plans include quality work and ongoing support.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 - Pricing Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} featured={plan.featured} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - What's Included */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What's Included in All Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: 'Quality Code', description: 'Clean, maintainable code' },
              { icon: Zap, title: 'Fast Delivery', description: 'Timely project completion' },
              { icon: Shield, title: 'Secure', description: 'Security best practices' },
              { icon: Headphones, title: 'Support', description: 'Ongoing assistance' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Add-ons */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Additional Services & Add-ons
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-primary">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Comparison Table */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Plan Comparison
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Starter</th>
                  <th className="p-4 text-center">Professional</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingPlans[0].features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4">{feature.text}</td>
                    <td className="p-4 text-center">
                      {pricingPlans[0].features[index].included ? '✓' : '✗'}
                    </td>
                    <td className="p-4 text-center">
                      {pricingPlans[1].features[index].included ? '✓' : '✗'}
                    </td>
                    <td className="p-4 text-center">
                      {pricingPlans[2].features[index].included ? '✓' : '✗'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Payment Options */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Payment Options
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { method: 'Bank Transfer', description: 'Direct bank transfer' },
              { method: 'Credit Card', description: 'Visa, Mastercard, Amex' },
              { method: 'PayPal', description: 'PayPal payments accepted' },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2">{option.method}</h3>
                <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <FAQAccordion
            faqs={[
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Contact us to discuss your needs.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfers, credit cards, and PayPal. Payment terms can be discussed based on project size.',
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer refunds within 14 days of project start if you\'re not satisfied. See our refund policy for details.',
              },
              {
                question: 'Are there any hidden fees?',
                answer: 'No hidden fees. All costs are clearly outlined in your chosen plan. Additional services are discussed upfront.',
              },
            ]}
          />
        </div>
      </section>

      {/* SECTION 8 - Custom Quote */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl text-white/90 mb-6">
              Have specific requirements? Let's discuss a custom plan tailored to your needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 - Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What Clients Say About Our Pricing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Great value for money. The quality exceeded expectations.',
                author: 'John Doe',
                role: 'CEO',
              },
              {
                quote: 'Transparent pricing with no surprises. Highly recommended.',
                author: 'Jane Smith',
                role: 'Founder',
              },
              {
                quote: 'Worth every penny. The results speak for themselves.',
                author: 'Mike Johnson',
                role: 'Director',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Choose a plan that fits your needs or contact us for a custom solution
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Pricing

