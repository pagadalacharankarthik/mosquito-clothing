import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Press - MOSQUITO',
}

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Press</h1>
          <p className="text-xl text-muted-foreground">
            Latest news and media coverage about MOSQUITO
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-b border-border pb-8">
            <h3 className="text-2xl font-heading font-bold mb-2">Featured in Top Streetwear Publications</h3>
            <p className="text-muted-foreground mb-4">
              MOSQUITO has been featured in leading fashion and lifestyle publications worldwide.
            </p>
            <p className="text-sm text-muted-foreground">Last updated: July 2026</p>
          </div>

          <div className="border-b border-border pb-8">
            <h3 className="text-2xl font-heading font-bold mb-2">Contact Press</h3>
            <p className="text-muted-foreground">
              For media inquiries and press requests, please contact:
            </p>
            <p className="font-bold mt-4">press@mosquito.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
