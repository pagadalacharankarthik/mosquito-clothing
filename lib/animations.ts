import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateTextReveal = (element: HTMLElement, stagger = 0.1) => {
  const text = element.textContent || ''
  const chars = text.split('')
  
  element.innerHTML = chars
    .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('')

  gsap.from(element.querySelectorAll('span'), {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: stagger,
    ease: 'power2.out',
  })
}

export const animateImageReveal = (element: HTMLElement, delay = 0) => {
  gsap.from(element, {
    duration: 1,
    opacity: 0,
    scale: 1.05,
    delay: delay,
    ease: 'power2.out',
  })
}

export const animateParallax = (element: HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
    y: window.innerHeight * speed,
    ease: 'none',
  })
}

export const animateScrollProgress = () => {
  const progressBar = document.querySelector('.scroll-progress') as HTMLElement
  if (!progressBar) return

  gsap.to(progressBar, {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(progressBar, {
          width: `${self.getVelocity() * 100}%`,
          duration: 0.3,
        })
      },
    },
  })
}

export const magneticButton = (button: HTMLElement) => {
  const animate = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const reset = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'back.out',
    })
  }

  button.addEventListener('mousemove', animate)
  button.addEventListener('mouseleave', reset)
}
