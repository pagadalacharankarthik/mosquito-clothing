import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Careers - MOSQUITO',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-20 pb-40 md:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building something amazing. If you're passionate about streetwear and want to be part of the movement, get in touch.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-secondary p-8 rounded">
            <h3 className="text-2xl font-heading font-bold mb-4">Design</h3>
            <p className="text-muted-foreground mb-6">
              We're looking for talented designers to join our creative team.
            </p>
            <Link href="/contact" className="text-accent font-bold hover:underline">
              Apply Now
            </Link>
          </div>
          
          <div className="bg-secondary p-8 rounded">
            <h3 className="text-2xl font-heading font-bold mb-4">Marketing</h3>
            <p className="text-muted-foreground mb-6">
              Help us tell the MOSQUITO story to the world.
            </p>
            <Link href="/contact" className="text-accent font-bold hover:underline">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Don't see a position you like? Send your portfolio to us anyway.
          </p>
          <Link href="/contact">
            <button className="bg-primary text-primary-foreground px-8 py-3 font-bold hover:bg-opacity-80 transition-all">
              Get In Touch
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
