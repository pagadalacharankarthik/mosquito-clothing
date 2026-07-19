'use client'

import { motion } from 'framer-motion'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-2">Our Story</p>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
                Born from Urban Culture
              </h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              MOSQUITO is more than a brand—it&apos;s a movement. We believe in creating timeless pieces 
              that blend premium craftsmanship with urban aesthetics. Every garment is designed with 
              intention, produced with precision, and worn with confidence.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Our mission is to deliver luxury streetwear that transcends trends, empowering individuals 
              to express their authentic style without compromise.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 border-2 border-black font-heading font-bold tracking-wide hover:bg-black hover:text-white transition-all duration-300"
            >
              LEARN MORE
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-96 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
          >
            <span className="text-gray-500">Brand Image</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
