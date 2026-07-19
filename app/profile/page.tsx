import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Profile - MOSQUITO',
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">My Account</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded">
            <h2 className="text-2xl font-heading font-bold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 font-bold hover:bg-opacity-80 transition-all">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-secondary p-8 rounded">
            <h2 className="text-2xl font-heading font-bold mb-6">Quick Links</h2>
            <div className="space-y-4">
              <Link href="/wishlist">
                <div className="p-4 bg-background rounded hover:bg-opacity-80 transition-all cursor-pointer">
                  <p className="font-bold">My Wishlist</p>
                  <p className="text-sm text-muted-foreground">View saved items</p>
                </div>
              </Link>

              <Link href="/track">
                <div className="p-4 bg-background rounded hover:bg-opacity-80 transition-all cursor-pointer">
                  <p className="font-bold">Track Orders</p>
                  <p className="text-sm text-muted-foreground">Check order status</p>
                </div>
              </Link>

              <Link href="/returns">
                <div className="p-4 bg-background rounded hover:bg-opacity-80 transition-all cursor-pointer">
                  <p className="font-bold">Returns</p>
                  <p className="text-sm text-muted-foreground">Returns & exchanges</p>
                </div>
              </Link>

              <div className="p-4 bg-background rounded cursor-pointer hover:bg-opacity-80 transition-all">
                <p className="font-bold">Logout</p>
                <p className="text-sm text-muted-foreground">Sign out of account</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
