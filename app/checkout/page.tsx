'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '@/lib/cart-context'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notes: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const generateOrderId = () => {
    const date = new Date()
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
    const randomNum = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')
    return `MOS-${dateStr}-${randomNum}`
  }

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    const orderId = generateOrderId()
    const date = new Date().toLocaleDateString('en-GB')
    const time = new Date().toLocaleTimeString('en-GB')

    // Build order message
    let message = `🛍 NEW ORDER\n\n`
    message += `Order ID:\n${orderId}\n\n`
    message += `Date:\n${date}\n\n`
    message += `Time:\n${time}\n\n`
    message += `Customer:\n${formData.name}\n\n`
    message += `Phone:\n${formData.phone}\n\n`
    message += `Products:\n`

    items.forEach((item, index) => {
      const skuCode = `MOS-${item.id.toString().padStart(3, '0')}`
      message += `${index + 1}. ${item.name}\n`
      message += `   SKU: ${skuCode}\n`
      message += `   Size: ${item.size}\n`
      message += `   Color: ${item.color}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: ₹${item.price}\n`
      message += `   Subtotal: ₹${item.price * item.quantity}\n\n`
    })

    const shippingCost = total > 2000 ? 0 : 99
    message += `Subtotal: ₹${total}\n`
    message += `Shipping: ${shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}\n`
    message += `Total: ₹${total + shippingCost}\n\n`
    message += `Address:\n${formData.address}\n${formData.city}, ${formData.state} ${formData.zipCode}\n\n`

    if (formData.notes) {
      message += `Notes:\n${formData.notes}\n\n`
    }

    message += `Please confirm my order.`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // WhatsApp URL - Contact number for orders
    const whatsappNumber = '919876543210' // +91 987654321 (format: country code + number)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp
    if (window.self !== window.top) {
      // We're in an iframe, open in new tab
      window.open(whatsappURL, '_blank')
    } else {
      // Not in iframe, can open in current tab
      window.location.href = whatsappURL
    }

    setIsLoading(false)
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
            <h1 className="text-4xl font-heading font-bold mb-4">Your Bag is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Add some premium pieces to your collection before checking out.
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-accent text-black font-heading font-bold tracking-wide"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Customer Info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold">Shipping Address</h2>
                <input
                  type="text"
                  name="address"
                  placeholder="Address *"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code *"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                />
              </div>

              {/* Order Notes */}
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold">Additional Notes</h2>
                <textarea
                  name="notes"
                  placeholder="Special instructions or delivery notes (optional)"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
                />
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32 space-y-6 p-6 border border-border">
                <h2 className="text-2xl font-heading font-bold">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold">{item.name}</span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.color} - Size {item.size} x {item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="font-bold">{total > 2000 ? 'FREE' : '₹99'}</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-accent">₹{total > 2000 ? total : total + 99}</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <motion.button
                  onClick={handleWhatsAppOrder}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {isLoading ? 'Processing...' : 'Order via WhatsApp'}
                </motion.button>

                <p className="text-xs text-muted-foreground text-center">
                  You&apos;ll be redirected to WhatsApp to confirm your order.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
