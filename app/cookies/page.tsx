import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Cookie Policy - MOSQUITO',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Cookie Policy</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small files that are stored on your device when you visit our website. They help us remember your preferences and improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Types of Cookies We Use</h2>
            <p className="text-muted-foreground mb-4">We use the following types of cookies:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Essential Cookies: Required for the website to function</li>
              <li>Analytics Cookies: Help us understand how you use our website</li>
              <li>Marketing Cookies: Used to track your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Your Choices</h2>
            <p className="text-muted-foreground">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about our cookie policy, please contact us at privacy@mosquito.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
