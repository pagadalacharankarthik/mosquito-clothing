'use client'

import { createContext, useContext, useState, useEffect } from 'react'

export interface WishlistItem {
  id: string | number
  name: string
  price: number
  image?: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string | number) => void
  isInWishlist: (id: string | number) => boolean
  itemCount: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (error) {
        console.log('[v0] Error loading wishlist:', error)
      }
    }
  }, [])

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  const addToWishlist = (item: WishlistItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev
      }
      return [...prev, item]
    })
  }

  const removeFromWishlist = (id: string | number) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const isInWishlist = (id: string | number) => {
    return items.some((i) => i.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        itemCount: items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    return {
      items: [],
      addToWishlist: (item: WishlistItem) => {},
      removeFromWishlist: (id: string | number) => {},
      isInWishlist: (id: string | number) => false,
      itemCount: 0,
    }
  }
  return context
}
