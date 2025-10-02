import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
