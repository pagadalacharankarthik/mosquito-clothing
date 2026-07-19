'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react'
import SearchModal from './search'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Collections', href: '/collections' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-border'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
            <Image
              src="/mosquito-logo.svg"
              alt="MOSQUITO Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                className="text-sm font-medium tracking-wide hover:text-accent transition-colors"
                whileHover={{ color: '#c6ff00' }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchOpen(true)}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Search"
            title="Search (Cmd+K)"
          >
            <Search size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-border"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {menuItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <motion.span 
                    className="text-sm font-medium block py-2 px-2 hover:text-accent hover:bg-secondary transition-colors rounded"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:text-accent hover:bg-secondary rounded transition-colors" 
                  aria-label="Search"
                >
                  <Search size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:text-accent hover:bg-secondary rounded transition-colors" 
                  aria-label="Wishlist"
                >
                  <Heart size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:text-accent hover:bg-secondary rounded transition-colors" 
                  aria-label="Cart"
                >
                  <ShoppingBag size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.nav>
  )
}
