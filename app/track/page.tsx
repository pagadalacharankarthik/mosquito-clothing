import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Track Order - MOSQUITO',
}

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Track Your Order</h1>
        
        <div className="space-y-8">
          <div className="bg-secondary p-8 rounded">
            <h2 className="text-2xl font-heading font-bold mb-6">Order Tracking</h2>
            <p className="text-muted-foreground mb-6">
              Track your order status using the tracking number provided in your order confirmation email.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Order Number</label>
                <input
                  type="text"
                  placeholder="Enter your order number"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 font-bold hover:bg-opacity-80 transition-all"
              >
                Track Order
              </button>
            </form>
          </div>

          <div className="bg-secondary p-8 rounded">
            <h3 className="text-xl font-heading font-bold mb-4">Tracking Tips</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Check your email for tracking number after order ships</li>
              <li>Tracking updates typically appear within 24 hours</li>
              <li>Standard shipping takes 5-7 business days</li>
              <li>For immediate help, contact support@mosquito.com</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
