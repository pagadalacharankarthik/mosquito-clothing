import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Returns - MOSQUITO',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Returns & Exchanges</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Return Policy</h2>
            <p className="text-muted-foreground mb-4">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer hassle-free returns.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>30-day return window from purchase date</li>
              <li>Items must be unworn and in original condition</li>
              <li>Return shipping is free on orders over 2000</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">How to Return</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Contact our support team at returns@mosquito.com</li>
              <li>Pack your items securely</li>
              <li>Ship to our returns center</li>
              <li>Refund processed within 5-7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Exchanges</h2>
            <p className="text-muted-foreground">
              Need a different size or color? We offer free exchanges within 30 days of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              Have questions about returns or exchanges?
            </p>
            <Link href="/contact">
              <button className="bg-primary text-primary-foreground px-8 py-3 font-bold hover:bg-opacity-80 transition-all">
                Contact Support
              </button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
