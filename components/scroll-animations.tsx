'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  useEffect(() => {
    // Parallax sections
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-parallax') || '0.5'
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        y: window.innerHeight * parseFloat(speed),
        ease: 'none',
      })
    })

    // Fade in on scroll
    const fadeInElements = document.querySelectorAll('[data-fade-in]')
    fadeInElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
        opacity: 0,
        y: 30,
      })
    })

    // Scale on scroll
    const scaleElements = document.querySelectorAll('[data-scale]')
    scaleElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 20%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

export default function ScrollAnimationsProvider({ children }: { children: React.ReactNode }) {
  useScrollAnimations()
  return <>{children}</>
}
