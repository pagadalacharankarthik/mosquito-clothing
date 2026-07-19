'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const collections = [
  {
    id: 1,
    title: 'Summer Essentials',
    description: 'Light, breathable pieces for warm days',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Urban Utility',
    description: 'Functional style for city living',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    title: 'Luxury Basics',
    description: 'Premium quality everyday wear',
    image: '/placeholder.jpg',
  },
]

export default function NewCollection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4">
            New Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our latest releases designed with modern aesthetics and premium quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-96 mb-6 overflow-hidden bg-gray-200">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-500">Collection Image</span>
                  </div>
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground">{collection.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
