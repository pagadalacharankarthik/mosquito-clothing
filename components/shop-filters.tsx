'use client'

import { motion } from 'framer-motion'
import { Filter, Grid3x3, List } from 'lucide-react'
import { useState } from 'react'

interface ShopFiltersProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  priceRange: [number, number]
  onPriceChange: (range: [number, number]) => void
  sortBy: string
  onSortChange: (sort: string) => void
  viewMode: 'grid' | 'list'
  onViewModeChange: (mode: 'grid' | 'list') => void
}

const categories = [
  'Oversized Tees',
  'Shirts',
  'Polo',
  'Cargo Pants',
  'Jeans',
  'Hoodies',
  'Jackets',
  'Accessories',
]

const colors = ['Black', 'White', 'Gray', 'Beige', 'Navy']

export default function ShopFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: ShopFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center space-x-2 mb-6 p-3 border border-border"
      >
        <Filter size={20} />
        <span>Filters</span>
      </motion.button>

      {/* Filters Panel */}
      <motion.aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block w-full lg:w-64 space-y-8`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Sort */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">Sort</h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-3 border border-border bg-background text-foreground"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="best-sellers">Best Sellers</option>
          </select>
        </div>

        {/* View Mode */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">View</h3>
          <div className="flex gap-2">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-3 border-2 transition-colors ${
                viewMode === 'grid'
                  ? 'border-accent bg-accent/10'
                  : 'border-border'
              }`}
            >
              <Grid3x3 size={20} />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-3 border-2 transition-colors ${
                viewMode === 'list'
                  ? 'border-accent bg-accent/10'
                  : 'border-border'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">Category</h3>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={`block text-sm transition-colors ${
                selectedCategory === null
                  ? 'text-accent font-bold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block text-sm transition-colors ${
                  selectedCategory === category
                    ? 'text-accent font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">Price Range</h3>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[0]}
              onChange={(e) =>
                onPriceChange([Number(e.target.value), priceRange[1]])
              }
              className="w-full"
            />
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <div className="flex justify-between text-sm">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">Color</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="text-xs px-3 py-2 border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg">Availability</h3>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm">In Stock</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">On Sale</span>
          </label>
        </div>
      </motion.aside>
    </>
  )
}
