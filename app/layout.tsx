import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import { DrawerProvider } from '@/lib/drawer-context'
import { WishlistProvider } from '@/lib/wishlist-context'
import AppWrapper from '@/components/app-wrapper'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'MOSQUITO - Premium Streetwear',
  description: 'Premium streetwear and casual fashion for the modern urbanite',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/mosquito-logo.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'MOSQUITO - Premium Streetwear',
    description: 'Premium streetwear and casual fashion for the modern urbanite',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ color: '#000000' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        <WishlistProvider>
          <CartProvider>
            <DrawerProvider>
              <AppWrapper>
                {children}
              </AppWrapper>
            </DrawerProvider>
          </CartProvider>
        </WishlistProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
