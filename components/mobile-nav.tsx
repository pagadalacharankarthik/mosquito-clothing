'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

interface MobileNavProps {
  onSearchClick?: () => void
}

export default function MobileNav({ onSearchClick }: MobileNavProps) {
  const { itemCount } = useCart()
  const [active, setActive] = useState('home')

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'search', icon: Search, label: 'Search', href: '#', onClick: onSearchClick },
    { id: 'wishlist', icon: Heart, label: 'Wishlist', href: '/wishlist' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', href: '/checkout' },
    { id: 'profile', icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-border z-30"
    >
      <div className="flex items-center justify-around h-20">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => {
                if (item.onClick) {
                  item.onClick()
                } else {
                  setActive(item.id)
                }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center justify-center p-3 relative"
              >
                <Icon
                  size={24}
                  className={`transition-colors ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`}
                />
                <span
                  className={`text-xs mt-1 transition-colors ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </span>

                {/* Cart Badge */}
                {item.id === 'cart' && itemCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 w-5 h-5 bg-accent text-black rounded-full flex items-center justify-center text-xs font-bold"
                  >
                    {itemCount > 9 ? '9+' : itemCount}
                  </motion.div>
                )}
              </motion.div>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
