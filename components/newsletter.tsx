'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground">
              Get exclusive drops, early access, and urban culture insights delivered to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 mt-8"
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-6 py-4 bg-white border-2 border-black focus:outline-none focus:border-accent transition-colors"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </motion.button>
          </motion.form>

          <motion.p
            animate={submitted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-accent font-medium"
          >
            {submitted ? '✓ Thank you for subscribing!' : ''}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
