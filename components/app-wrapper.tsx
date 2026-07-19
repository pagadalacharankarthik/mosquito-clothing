'use client'

import { ReactNode } from 'react'
import { useDrawer } from '@/lib/drawer-context'
import CartDrawer from './cart-drawer'

export default function AppWrapper({ children }: { children: ReactNode }) {
  const { isCartOpen, closeCart } = useDrawer()

  return (
    <>
      {children}
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  )
}
