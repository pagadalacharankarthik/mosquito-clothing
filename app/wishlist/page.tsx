'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Heart, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import MobileNav from '@/components/mobile-nav'

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist))
      } catch (e) {
        console.error('[v0] Error loading wishlist:', e)
      }
    }
  }, [])

  const removeFromWishlist = (productId: string) => {
    const updated = wishlist.filter((item) => item.id !== productId)
    setWishlist(updated)
    localStorage.setItem('wishlist', JSON.stringify(updated))
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MobileNav />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <div className="flex items-center gap-4 mb-12">
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-secondary rounded transition-colors"
            >
              <ArrowLeft size={24} />
            </motion.button>
          </Link>
          <h1 className="text-5xl md:text-6xl font-heading font-bold">My Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={64} className="mx-auto mb-6 text-muted-foreground opacity-50" />
            <h2 className="text-2xl font-heading font-bold mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">Start adding items to your wishlist</p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-3 font-bold hover:bg-opacity-80 transition-all"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary rounded group cursor-pointer overflow-hidden"
              >
                <div className="aspect-square bg-background mb-4 relative overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">{item.name}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Heart size={20} fill="currentColor" />
                  </motion.button>
                </div>

                <div className="p-4">
                  <h3 className="font-heading font-bold mb-2 line-clamp-2">{item.name}</h3>
                  <p className="text-accent font-bold mb-4">₹{item.price.toLocaleString()}</p>
                  <Link href={`/product/${item.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-primary-foreground py-2 font-bold hover:bg-opacity-80 transition-all"
                    >
                      View Product
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
