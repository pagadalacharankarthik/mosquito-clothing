'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import CategoriesGrid from '@/components/categories-grid'
import NewCollection from '@/components/new-collection'
import BestSellers from '@/components/best-sellers'
import BrandStory from '@/components/brand-story'
import Newsletter from '@/components/newsletter'
import MobileNav from '@/components/mobile-nav'

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 hidden lg:block"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="w-full h-full border-2 border-accent rounded-full" />
      </div>

      <Navbar />
      <MobileNav onSearchClick={() => setSearchOpen(true)} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pb-20 md:pb-0"
      >
        <HeroSection />
        <CategoriesGrid />
        <NewCollection />
        <BestSellers />
        <BrandStory />
        <Newsletter />
      </motion.main>

      <Footer />
    </div>
  )
}
