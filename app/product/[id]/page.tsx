'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Share2, ShoppingBag } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '@/lib/cart-context'

const products: any = {
  '1': {
    id: 1,
    name: 'Essential Oversized Tee',
    price: 999,
    originalPrice: 999,
    category: 'Oversized Tees',
    description:
      'Premium quality oversized t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable, relaxed fit.',
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
    colors: ['Black', 'White', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    features: [
      '100% Organic Cotton',
      'Comfortable fit',
      'Premium quality',
      'Sustainable production',
      'Care instructions included',
    ],
  },
  '2': {
    id: 2,
    name: 'Classic Polo',
    price: 999,
    originalPrice: 1299,
    category: 'Polo',
    description:
      'Timeless polo shirt designed for modern style. Quality fabric with excellent drape and comfort.',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    colors: ['Black', 'Navy', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.6,
    reviews: 145,
    features: ['Premium fabric blend', 'Perfect fit', 'Easy to style', 'Long-lasting quality'],
  },
  '3': {
    id: 3,
    name: 'Cargo Pants',
    price: 2499,
    originalPrice: 2999,
    category: 'Cargo Pants',
    description: 'Premium cargo pants with multiple pockets and comfortable fit.',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    colors: ['Black', 'Khaki', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    rating: 4.7,
    reviews: 189,
    features: ['Multiple pockets', 'Durable fabric', 'Comfortable fit'],
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const { addToCart } = useCart()
  const productId = params.id as string
  const product = products[productId]

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors?.[0] || 'Black')
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [mainImageIndex, setMainImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold">Product Not Found</h1>
          <Link href="/shop" className="mt-6 inline-block text-accent hover:underline">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }

    if (!addToCart) {
      alert('Cart functionality unavailable. Please try refreshing the page.')
      return
    }

    addToCart({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
      image: '/placeholder.jpg',
    })
    
    alert('Item added to cart!')
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-sm mb-12 text-muted-foreground overflow-x-auto"
          >
            <Link href="/shop" className="hover:text-accent whitespace-nowrap">
              Shop
            </Link>
            <span>/</span>
            <Link href={`/shop?category=${product.category}`} className="hover:text-accent whitespace-nowrap">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground font-bold whitespace-nowrap">{product.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div
                  key={mainImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-square bg-secondary flex items-center justify-center border border-border rounded"
                >
                  <span className="text-muted-foreground">Main Image {mainImageIndex + 1}</span>
                </motion.div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((_img: string, idx: number) => (
                    <motion.button
                      key={idx}
                      onClick={() => setMainImageIndex(idx)}
                      whileHover={{ scale: 1.05 }}
                      className={`aspect-square bg-secondary flex items-center justify-center border-2 transition-colors rounded ${
                        mainImageIndex === idx ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <span className="text-xs text-muted-foreground">Img {idx + 1}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Header */}
              <div>
                <p className="text-xs uppercase tracking-widest text-accent mb-2 font-bold">{product.category}</p>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg">★★★★★</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-end space-x-4 flex-wrap gap-2">
                <span className="text-3xl md:text-4xl font-bold">₹{product.price}</span>
                {discount > 0 && (
                  <>
                    <span className="text-lg line-through text-muted-foreground">₹{product.originalPrice}</span>
                    <span className="text-lg bg-accent text-black px-3 py-1 font-bold">{discount}% OFF</span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              {product.inStock && (
                <p className="text-sm text-accent font-bold">In Stock - Ships within 2-3 business days</p>
              )}

              {/* Color Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold">COLOR: {selectedColor}</label>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color: string) => (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 md:px-6 py-2 md:py-3 border-2 font-bold text-sm transition-all ${
                        selectedColor === color
                          ? 'border-accent bg-accent text-black'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold">SIZE: {selectedSize || 'Select'}</label>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {product.sizes.map((size: string) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`py-2 md:py-3 border-2 font-bold transition-all ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-black'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
                <Link href="#" className="text-xs text-accent hover:underline">
                  Size Guide
                </Link>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <label className="text-sm font-bold">QUANTITY</label>
                <div className="flex items-center space-x-4 border border-border w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors font-bold"
                  >
                    −
                  </button>
                  <span className="px-4 font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="flex-1 px-6 md:px-8 py-3 md:py-4 bg-accent text-black font-heading font-bold tracking-wide hover:bg-opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  Add to Bag
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 md:p-4 border-2 transition-all ${
                    isFavorite ? 'border-accent text-accent' : 'border-border hover:border-accent'
                  }`}
                >
                  <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
                </motion.button>
              </div>

              {/* Share */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full py-3 border border-border hover:border-accent transition-colors flex items-center justify-center gap-2 text-sm font-bold"
              >
                <Share2 size={18} />
                Share
              </motion.button>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <h3 className="font-heading font-bold">Key Features</h3>
                <ul className="space-y-2 text-sm">
                  {product.features.map((feature: string) => (
                    <li key={feature} className="flex items-center space-x-2 text-muted-foreground">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 py-6 border-y text-center text-xs md:text-sm">
                <div>
                  <div className="text-lg mb-1">🚚</div>
                  <p className="text-muted-foreground">Free shipping on orders above ₹2000</p>
                </div>
                <div>
                  <div className="text-lg mb-1">↩️</div>
                  <p className="text-muted-foreground">30-day returns</p>
                </div>
                <div>
                  <div className="text-lg mb-1">💳</div>
                  <p className="text-muted-foreground">Easy payments</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-32 pt-12 md:pt-16 border-t"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} className="group cursor-pointer" whileHover={{ y: -5 }}>
                  <div className="h-48 md:h-64 bg-secondary mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Product {i}</span>
                  </div>
                  <h3 className="font-heading font-bold group-hover:text-accent">Related Product {i}</h3>
                  <p className="text-lg font-bold mt-2">₹{999 + i * 300}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}
