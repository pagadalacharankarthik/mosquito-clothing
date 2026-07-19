'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  { name: 'Oversized Tees', slug: 'oversized-tees', color: 'from-black to-gray-900' },
  { name: 'Shirts', slug: 'shirts', color: 'from-gray-900 to-black' },
  { name: 'Polo', slug: 'polo', color: 'from-black to-gray-800' },
  { name: 'Cargo Pants', slug: 'cargo-pants', color: 'from-gray-800 to-black' },
  { name: 'Jeans', slug: 'jeans', color: 'from-black to-gray-900' },
  { name: 'Hoodies', slug: 'hoodies', color: 'from-gray-900 to-black' },
  { name: 'Jackets', slug: 'jackets', color: 'from-black to-gray-800' },
  { name: 'Accessories', slug: 'accessories', color: 'from-gray-800 to-black' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function CategoriesGrid() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-4">
            Explore All Products
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl">
            Discover our comprehensive collection of premium streetwear designed for the modern urbanite. Browse by category to find your perfect fit.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <Link key={category.slug} href={`/shop?category=${category.slug}`}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-80 group cursor-pointer overflow-hidden bg-gradient-to-br from-gray-900 to-black"
              >
                {/* Background with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Accent highlight on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <motion.h3
                    className="text-xl md:text-2xl font-heading font-bold text-center tracking-wide text-white group-hover:text-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-gray-800 group-hover:border-accent transition-colors" />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
