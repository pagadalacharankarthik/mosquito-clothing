'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Award, Users, Leaf, Zap } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Each piece is crafted with precision and attention to detail.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We build for our community, not just to sell products.',
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    description: 'Eco-conscious production and ethical sourcing.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly evolving to meet modern fashion needs.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        {/* Logo Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-32 h-32 md:w-40 md:h-40"
          >
            <Image
              src="/mosquito-logo.svg"
              alt="MOSQUITO Logo"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl text-center mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
              About MOSQUITO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We&apos;re redefining premium streetwear by blending urban aesthetics with exceptional
              craftsmanship. Every piece tells a story of intention, quality, and rebellion against
              the ordinary.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">
                  Our Mission
                </p>
                <h2 className="text-5xl font-heading font-bold">Creating Timeless Pieces</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                MOSQUITO was born from a simple belief: fashion should be accessible without
                compromising on quality. We create timeless pieces that transcend trends, empowering
                individuals to express their authentic style with confidence.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Our design philosophy centers on minimalism, sustainability, and the urban spirit.
                Each collection reflects our commitment to delivering luxury at fair prices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
            >
              <span className="text-gray-500">Mission Image</span>
            </motion.div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-heading font-bold tracking-tight">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-4 p-6 border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
            >
              <span className="text-gray-600">Story Image</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">
                  Our Story
                </p>
                <h2 className="text-5xl font-heading font-bold">From Vision to Reality</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Started in 2024, MOSQUITO emerged from the streets of urban fashion. We noticed a gap
                in the market: premium quality streetwear that didn&apos;t require breaking the bank.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Today, we&apos;ve grown into a global community of fashion enthusiasts who believe in
                quality, sustainability, and authentic self-expression. Every piece we create is a
                testament to our promise: style without compromise.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-32 py-20 border-y border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '1M+', label: 'Pieces Sold' },
              { number: '40+', label: 'Countries' },
              { number: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-heading font-bold text-accent mb-2">{stat.number}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-heading font-bold">Join the Movement</h2>
            <p className="text-xl text-muted-foreground">
              Be part of a community that values quality, sustainability, and authentic expression.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-accent text-black font-heading text-lg font-bold tracking-wide hover:bg-opacity-90 transition-all"
            >
              SHOP NOW
            </motion.button>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
