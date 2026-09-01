import { MotionConfig } from "framer-motion"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollProgress } from "@/components/ScrollProgress"
import { Hero } from "@/sections/Hero"
import { Stats } from "@/sections/Stats"
import { About } from "@/sections/About"
import { Treatments } from "@/sections/Treatments"
import { Technology } from "@/sections/Technology"
import { Team } from "@/sections/Team"
import { FeaturedDoctor } from "@/sections/FeaturedDoctor"
import { Results } from "@/sections/Results"
import { ClinicGallery } from "@/sections/ClinicGallery"
import { Testimonials } from "@/sections/Testimonials"
import { ClinicsContact } from "@/sections/ClinicsContact"
import { FAQ } from "@/sections/FAQ"
import { ContactCTA } from "@/sections/ContactCTA"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Treatments />
        <Technology />
        <Team />
        <FeaturedDoctor />
        <Results />
        <ClinicGallery />
        <Testimonials />
        <ClinicsContact />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  )
}
