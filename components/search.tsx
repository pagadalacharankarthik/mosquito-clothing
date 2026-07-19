'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search as SearchIcon, X } from 'lucide-react'
import Link from 'next/link'

const products = [
  { id: 1, name: 'Essential Oversized Tee', category: 'Tees' },
  { id: 2, name: 'Classic Polo', category: 'Polos' },
  { id: 3, name: 'Urban Cargo Pants', category: 'Pants' },
  { id: 4, name: 'Relaxed Fit Jeans', category: 'Jeans' },
  { id: 5, name: 'Minimal Hoodie', category: 'Hoodies' },
  { id: 6, name: 'Varsity Jacket', category: 'Jackets' },
  { id: 7, name: 'Premium Shirt', category: 'Shirts' },
  { id: 8, name: 'Summer Linen Shirt', category: 'Shirts' },
]

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(products)

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults(products)
    }
  }, [query])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-50 max-w-4xl mx-auto w-full"
          >
            <div className="bg-background border-b-2 border-accent">
              {/* Search Input */}
              <div className="flex items-center px-6 py-4">
                <SearchIcon size={24} className="text-accent mr-4" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 text-lg bg-transparent outline-none text-foreground placeholder-muted-foreground"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:text-accent transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-h-96 overflow-y-auto bg-background"
              >
                {results.length > 0 ? (
                  <div className="space-y-0">
                    {results.map((product) => (
                      <Link key={product.id} href={`/product/${product.id}`} onClick={onClose}>
                        <motion.div
                          whileHover={{ backgroundColor: 'rgba(198, 255, 0, 0.05)' }}
                          className="px-6 py-4 border-b border-border flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <div>
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.category}</p>
                          </div>
                          <span className="text-accent">→</span>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-12 text-center text-muted-foreground">
                    <p>No products found for "{query}"</p>
                    <p className="text-sm mt-2">Try searching for categories or product names</p>
                  </div>
                )}
              </motion.div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border text-xs text-muted-foreground flex justify-between">
                <span>Type to search • ESC to close</span>
                <span>{results.length} results</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
