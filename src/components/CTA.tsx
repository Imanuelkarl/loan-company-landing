import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="py-20 bg-blue-gradient-light">
      <div className="container mx-auto px-4">
        <div
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center"
          data-aos="zoom-in"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apply for a loan today and get a decision in minutes. Our simple
            online application takes just a few minutes to complete.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-50 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA