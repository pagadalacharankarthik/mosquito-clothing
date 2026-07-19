'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    price: '₹999',
    image: '/placeholder.jpg',
    category: 'Tees',
  },
  {
    id: 2,
    name: 'Classic Polo',
    price: '₹1299',
    image: '/placeholder.jpg',
    category: 'Polos',
  },
  {
    id: 3,
    name: 'Urban Cargo Pants',
    price: '₹1999',
    image: '/placeholder.jpg',
    category: 'Pants',
  },
  {
    id: 4,
    name: 'Relaxed Fit Jeans',
    price: '₹2299',
    image: '/placeholder.jpg',
    category: 'Jeans',
  },
  {
    id: 5,
    name: 'Minimal Hoodie',
    price: '₹2499',
    image: '/placeholder.jpg',
    category: 'Hoodies',
  },
  {
    id: 6,
    name: 'Varsity Jacket',
    price: '₹3999',
    image: '/placeholder.jpg',
    category: 'Jackets',
  },
]

export default function BestSellers() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
            Best Sellers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative h-80 mb-4 overflow-hidden bg-secondary group-hover:bg-muted transition-colors">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <span className="text-muted-foreground">Product Image</span>
                </motion.div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-2">SIZE SELECTOR</p>
                    <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className="w-8 h-8 border border-accent text-accent text-xs font-bold hover:bg-accent hover:text-black transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-accent text-black hover:bg-opacity-90 transition-all ml-4 flex-shrink-0"
                  >
                    <ShoppingBag size={20} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:text-accent transition-colors"
                  >
                    <Heart size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
