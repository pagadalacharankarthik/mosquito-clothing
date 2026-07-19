'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Share2, Mail, Zap } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'Collections', href: '/collections' },
    { label: 'Sale', href: '/sale' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'Track Order', href: '/track' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookies', href: '/cookies' },
  ],
}

const socialLinks = [
  { icon: Heart, href: '#', label: 'Instagram' },
  { icon: Share2, href: '#', label: 'Twitter' },
  { icon: Zap, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="block mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/mosquito-logo.svg"
                  alt="MOSQUITO"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400">
              Premium streetwear for the modern urbanite.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-heading font-bold mb-4 text-accent uppercase text-sm tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-sm text-gray-400 hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, color: '#c6ff00' }}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-right text-xs text-gray-500"
            >
              © 2026 MOSQUITO. All rights reserved. | Designed with precision.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
