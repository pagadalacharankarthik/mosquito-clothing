import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - MOSQUITO',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              MOSQUITO ("we" or "us" or "our") operates the mosquito.com website (the "Service").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Information Collection</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Contact information (name, email, phone)</li>
              <li>Billing and shipping address</li>
              <li>Payment information</li>
              <li>Account preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Use of Information</h2>
            <p className="text-muted-foreground">
              We use collected information to process orders, improve our service, and communicate with you about products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Security</h2>
            <p className="text-muted-foreground">
              Your information is protected with industry-standard security measures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@mosquito.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
