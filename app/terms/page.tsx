import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Terms of Service - MOSQUITO',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-12">Terms of Service</h1>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the MOSQUITO website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on our website are provided on an 'as is' basis. MOSQUITO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall MOSQUITO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at support@mosquito.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
