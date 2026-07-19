'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Plus } from 'lucide-react'

const faqs = [
  {
    category: 'Shipping & Delivery',
    items: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 5-7 business days. Express delivery (2-3 days) is available for an additional charge.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we ship within India. International shipping will be available soon.',
      },
      {
        q: 'Is there free shipping?',
        a: 'Yes! Free shipping on all orders above ₹2000. Orders below ₹2000 have a flat shipping charge of ₹99.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We offer 30-day returns on all items in original condition with tags attached. Simply initiate a return through your account.',
      },
      {
        q: 'How do I exchange an item?',
        a: 'You can exchange items for a different size or color within 30 days of purchase at no additional cost.',
      },
      {
        q: 'How long do refunds take?',
        a: 'Refunds are processed within 7-10 business days after we receive and inspect your returned item.',
      },
    ],
  },
  {
    category: 'Products',
    items: [
      {
        q: 'What materials are your products made from?',
        a: 'Our products are made from premium quality fabrics including 100% organic cotton, premium cotton blends, and sustainable materials.',
      },
      {
        q: 'Do you have size guides?',
        a: 'Yes! Each product page has a detailed size guide. We recommend checking it before placing an order.',
      },
      {
        q: 'Are your products vegan?',
        a: 'Most of our collection is vegan. Check individual product descriptions for specific material information.',
      },
    ],
  },
  {
    category: 'Orders',
    items: [
      {
        q: 'How do I track my order?',
        a: 'You can track your order using the WhatsApp link shared after checkout, or visit the Track Order page.',
      },
      {
        q: 'Can I cancel my order?',
        a: 'Orders can be cancelled within 24 hours of placement. After that, you can initiate a return once the item arrives.',
      },
      {
        q: 'Do you offer bulk orders?',
        a: 'Yes! For bulk orders, please contact us at support@mosquito.com for special pricing.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight mb-4">
              FAQ
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>

          {/* FAQs */}
          <div className="space-y-12">
            {faqs.map((section, sectionIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIdx * 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold mb-6">{section.category}</h2>
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => {
                    const globalIndex = sectionIdx * 10 + itemIdx
                    const isOpen = openIndex === globalIndex

                    return (
                      <motion.div
                        key={item.q}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="border border-border overflow-hidden"
                      >
                        <motion.button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : globalIndex)
                          }
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors text-left"
                        >
                          <span className="font-bold text-lg">{item.q}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Plus size={24} className="text-accent" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-border px-6 py-4 bg-secondary/50"
                            >
                              <p className="text-muted-foreground leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 border border-border text-center"
          >
            <h3 className="text-2xl font-heading font-bold mb-2">Didn&apos;t find what you need?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help. Get in touch with us.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
