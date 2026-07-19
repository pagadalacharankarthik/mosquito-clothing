'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const collections = [
  {
    id: 1,
    name: 'Summer Collection 2026',
    description: 'Light, breathable pieces perfect for warm seasons.',
    image: '/placeholder.jpg',
    products: 24,
    featured: true,
  },
  {
    id: 2,
    name: 'Urban Essentials',
    description: 'Functional style for city living and everyday wear.',
    image: '/placeholder.jpg',
    products: 18,
    featured: false,
  },
  {
    id: 3,
    name: 'Luxury Basics',
    description: 'Premium quality staples that never go out of style.',
    image: '/placeholder.jpg',
    products: 15,
    featured: false,
  },
  {
    id: 4,
    name: 'Street Heritage',
    description: 'Bold designs inspired by urban street culture.',
    image: '/placeholder.jpg',
    products: 20,
    featured: true,
  },
  {
    id: 5,
    name: 'Minimalist Edit',
    description: 'Clean lines and timeless silhouettes.',
    image: '/placeholder.jpg',
    products: 12,
    featured: false,
  },
  {
    id: 6,
    name: 'Limited Edition',
    description: 'Exclusive pieces available in limited quantities.',
    image: '/placeholder.jpg',
    products: 8,
    featured: true,
  },
]

export default function CollectionsPage() {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight mb-4">
              Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our curated collections of premium streetwear and casual fashion pieces.
            </p>
          </motion.div>

          {/* Featured Collections */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-8">Featured</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {collections
                .filter((col) => col.featured)
                .map((collection) => (
                  <Link key={collection.id} href={`/shop?collection=${collection.id}`}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-96 mb-6 overflow-hidden bg-secondary">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <span className="text-muted-foreground">Collection Image</span>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                          {collection.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{collection.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-accent">
                            {collection.products} Products
                          </span>
                          <ChevronRight
                            size={20}
                            className="text-accent group-hover:translate-x-2 transition-transform"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </motion.div>
          </div>

          {/* All Collections */}
          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">All Collections</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {collections.map((collection) => (
                <Link key={collection.id} href={`/shop?collection=${collection.id}`}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative h-80 mb-4 overflow-hidden bg-secondary">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <span className="text-muted-foreground">Image</span>
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {collection.description}
                    </p>
                    <p className="text-xs text-accent font-bold mt-3">
                      {collection.products} Products →
                    </p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
