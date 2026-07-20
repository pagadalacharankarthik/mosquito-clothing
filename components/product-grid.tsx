'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

interface ProductGridProps {
  viewMode: 'grid' | 'list'
  sortBy: string
  category?: string | null
  minPrice?: number
  maxPrice?: number
}

// Sample product data
const allProducts = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    price: 999,
    category: 'Oversized Tees',
    colors: ['Black', 'White', 'Gray'],
    image: '/product-1.png',
    isSale: false,
  },
  {
    id: 2,
    name: 'Classic Polo',
    price: 1299,
    category: 'Polo',
    colors: ['Black', 'Navy', 'Beige'],
    image: '/product-2.png',
    isSale: true,
  },
  {
    id: 3,
    name: 'Urban Cargo Pants',
    price: 1999,
    category: 'Cargo Pants',
    colors: ['Black', 'Beige'],
    image: '/product-3.png',
    isSale: false,
  },
  {
    id: 4,
    name: 'Relaxed Fit Jeans',
    price: 2299,
    category: 'Jeans',
    colors: ['Black', 'Navy'],
    image: '/product-4.png',
    isSale: true,
  },
  {
    id: 5,
    name: 'Minimal Hoodie',
    price: 2499,
    category: 'Hoodies',
    colors: ['Black', 'Gray', 'Beige'],
    image: '/product-5.png',
    isSale: false,
  },
  {
    id: 6,
    name: 'Varsity Jacket',
    price: 3999,
    category: 'Jackets',
    colors: ['Black', 'White'],
    image: '/product-6.png',
    isSale: true,
  },
  {
    id: 7,
    name: 'Premium Shirt',
    price: 1799,
    category: 'Shirts',
    colors: ['Black', 'White', 'Gray'],
    image: '/product-7.png',
    isSale: false,
  },
  {
    id: 8,
    name: 'Summer Linen Shirt',
    price: 1599,
    category: 'Shirts',
    colors: ['Beige', 'White'],
    image: '/product-8.png',
    isSale: false,
  },
]

export default function ProductGrid({
  viewMode,
  sortBy,
  category,
  minPrice = 0,
  maxPrice = 5000,
}: ProductGridProps) {
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({})
  const [wishlisted, setWishlisted] = useState<Set<number>>(new Set())

  let products = [...allProducts]

  // Filter by category
  if (category && category !== 'all') {
    products = products.filter((p) => p.category === category)
  }

  // Filter by price
  products = products.filter((p) => p.price >= minPrice && p.price <= maxPrice)

  // Sort
  if (sortBy === 'price-low') {
    products.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    products.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'best-sellers') {
    products.reverse()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  const toggleWishlist = (id: number) => {
    const newWishlisted = new Set(wishlisted)
    if (newWishlisted.has(id)) {
      newWishlisted.delete(id)
    } else {
      newWishlisted.add(id)
    }
    setWishlisted(newWishlisted)
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            className="flex gap-6 p-6 border border-border hover:border-accent transition-colors group"
          >
            {/* Product Image */}
            <Link href={`/product/${product.id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-40 h-40 bg-secondary flex-shrink-0 flex items-center justify-center cursor-pointer"
              >
                <span className="text-muted-foreground">Image</span>
              </motion.div>
            </Link>

            {/* Product Info */}
            <div className="flex-1">
              <Link href={`/product/${product.id}`}>
                <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors mb-2">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">{product.category}</p>
              <div className="mb-4">
                <p className="font-bold text-xl">₹{product.price}</p>
              </div>

              {/* Size Selector */}
              <div className="flex gap-2 mb-4">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                    className={`w-8 h-8 border text-xs font-bold transition-all ${
                      selectedSizes[product.id] === size
                        ? 'border-accent bg-accent text-black'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-black text-white font-heading font-bold hover:bg-accent hover:text-black transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-2 border-2 transition-all ${
                    wishlisted.has(product.id)
                      ? 'border-accent text-accent'
                      : 'border-border hover:border-accent'
                  }`}
                >
                  <Heart size={20} fill={wishlisted.has(product.id) ? 'currentColor' : 'none'} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`grid gap-6 ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product, index) => (
        <motion.div key={product.id} variants={itemVariants} className="group">
          <Link href={`/product/${product.id}`}>
            <div className="relative h-80 mb-4 overflow-hidden bg-secondary group-hover:bg-muted transition-colors">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full flex items-center justify-center"
              >
                <span className="text-muted-foreground">Product</span>
              </motion.div>

              {/* Sale Badge */}
              {product.isSale && (
                <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 text-xs font-bold">
                  SALE
                </div>
              )}

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="text-xs text-accent mb-2 font-bold">SIZE</p>
                  <div className="flex gap-2 flex-wrap">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className="w-7 h-7 border border-accent text-accent text-xs font-bold hover:bg-accent hover:text-black transition-colors text-center flex items-center justify-center"
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
          </Link>

          {/* Product Info */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {product.category}
            </p>
            <h3 className="text-lg font-heading font-bold group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold">₹{product.price}</span>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(product.id)}
                className={`p-2 transition-all ${
                  wishlisted.has(product.id) ? 'text-accent' : 'hover:text-accent'
                }`}
              >
                <Heart
                  size={18}
                  fill={wishlisted.has(product.id) ? 'currentColor' : 'none'}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
