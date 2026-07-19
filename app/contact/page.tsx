'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
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
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Have questions? We&apos;d love to hear from you. Drop us a message and we&apos;ll get back to you
              as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'support@mosquito.com',
                href: 'mailto:support@mosquito.com',
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                content: '+91 9876 543 210',
                href: 'https://wa.me/919876543210',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Hyderabad, India',
                href: '#',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-1">{item.title}</h3>
                    <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-6 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-6 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full px-6 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-accent font-medium"
                >
                  Thank you for your message. We&apos;ll get back to you soon!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Response Time Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-secondary text-center"
          >
            <p className="text-sm text-muted-foreground">
              Response time: Usually within 24 hours | Customer support available Monday-Friday, 9 AM - 6 PM
              IST
            </p>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
