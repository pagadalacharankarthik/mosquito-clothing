'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductGrid from '@/components/product-grid'
import ShopFilters from '@/components/shop-filters'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight mb-4">
              Shop
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete collection of premium streetwear and casual fashion.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <ShopFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Products Grid */}
            <div className="flex-1">
              <ProductGrid
                viewMode={viewMode}
                sortBy={sortBy}
                category={selectedCategory}
                maxPrice={priceRange[1]}
                minPrice={priceRange[0]}
              />
            </div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
