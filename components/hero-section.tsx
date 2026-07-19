'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background pt-20">
      {/* Background Video/Image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            custom={0}
            variants={textVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-none"
          >
            NOT MADE
          </motion.h1>

          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter leading-none text-accent"
            style={{
              textShadow: '2px 2px 0 #000, 4px 4px 0 rgba(0,0,0,0.2)',
              WebkitTextStroke: '1px #000',
            }}
          >
            TO FOLLOW
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Premium streetwear for the modern urbanite. Designed with precision, worn with attitude.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={3}
            variants={textVariants}
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 md:px-12 py-4 md:py-5 bg-accent text-black font-heading text-lg md:text-xl font-bold tracking-wide hover:bg-opacity-90 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">SHOP NOW</span>
                <motion.div
                  className="absolute inset-0 bg-black"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <ChevronDown size={20} className="text-accent" />
        </div>
      </motion.div>
    </section>
  )
}
