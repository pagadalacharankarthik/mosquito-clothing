'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

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

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-background z-50 flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-heading font-bold">Shopping Bag</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-muted-foreground text-lg mb-4">Your bag is empty</p>
                  <Link href="/shop" onClick={onClose}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-accent font-bold hover:underline"
                    >
                      Continue Shopping
                    </motion.button>
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex gap-4 pb-4 border-b border-border"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-secondary flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground">
                      Image
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold truncate">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.color} - Size {item.size}
                      </p>
                      <p className="text-sm font-bold mt-1">₹{item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2 w-fit border border-border">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-secondary"
                        >
                          <Minus size={14} />
                        </motion.button>
                        <span className="text-xs font-bold px-2">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-secondary"
                        >
                          <Plus size={14} />
                        </motion.button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                    >
                      <X size={18} />
                    </motion.button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                {/* Totals */}
                <div className="space-y-2 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-bold">{total > 2000 ? 'Free' : '₹99'}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2">
                    <span>Total</span>
                    <span className="text-accent">₹{total > 2000 ? total : total + 99}</span>
                  </div>
                </div>

                {/* Buttons */}
                <Link href="/checkout" onClick={onClose} className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all"
                  >
                    Checkout
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full px-6 py-3 border border-border hover:border-accent text-foreground transition-all"
                >
                  Clear Bag
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
