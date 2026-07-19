import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Shipping - MOSQUITO',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Shipping Information</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Shipping Options</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded">
                <h3 className="font-bold mb-2">Standard Shipping</h3>
                <p className="text-muted-foreground">5-7 business days - FREE</p>
              </div>
              <div className="bg-secondary p-6 rounded">
                <h3 className="font-bold mb-2">Express Shipping</h3>
                <p className="text-muted-foreground">2-3 business days - 299</p>
              </div>
              <div className="bg-secondary p-6 rounded">
                <h3 className="font-bold mb-2">Overnight Shipping</h3>
                <p className="text-muted-foreground">Next day delivery - 599</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Domestic Shipping</h2>
            <p className="text-muted-foreground">
              We ship to all major cities across the country. Tracking information will be provided with your order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">International Shipping</h2>
            <p className="text-muted-foreground">
              We offer international shipping to select countries. International orders may take 2-3 weeks for delivery. Custom fees may apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              For shipping inquiries, please contact support@mosquito.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
