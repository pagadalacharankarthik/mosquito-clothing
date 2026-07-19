'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface DrawerContextType {
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  isWishlistOpen: boolean
  openWishlist: () => void
  closeWishlist: () => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  return (
    <DrawerContext.Provider
      value={{
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isWishlistOpen,
        openWishlist: () => setIsWishlistOpen(true),
        closeWishlist: () => setIsWishlistOpen(false),
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)
  if (!context) {
    return {
      isCartOpen: false,
      openCart: () => {},
      closeCart: () => {},
      isWishlistOpen: false,
      openWishlist: () => {},
      closeWishlist: () => {},
    }
  }
  return context
}
