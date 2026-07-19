'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  isVisible: boolean
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setProgress(0)
      return
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
    >
      {/* Logo Animation */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-12"
      >
        <div className="text-6xl font-heading font-bold text-accent">M</div>
      </motion.div>

      {/* Loading Text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl font-heading font-bold mb-8 tracking-widest"
      >
        MOSQUITO
      </motion.h2>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-border overflow-hidden mb-6">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-accent"
        />
      </div>

      {/* Loading Dots */}
      <div className="flex items-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -8, 0] }}
            transition={{ delay: i * 0.1, duration: 0.8, repeat: Infinity }}
            className="w-2 h-2 bg-accent rounded-full"
          />
        ))}
      </div>
    </motion.div>
  )
}
