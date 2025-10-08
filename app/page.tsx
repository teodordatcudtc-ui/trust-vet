import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyTrustVetSection from '@/components/sections/WhyTrustVetSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CareStepsSection from '@/components/sections/CareStepsSection'
import BlogTeaserSection from '@/components/sections/BlogTeaserSection'
import ContactTeaserSection from '@/components/sections/ContactTeaserSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyTrustVetSection />
      <CareStepsSection />
      <TestimonialsSection />
      <BlogTeaserSection />
      <ContactTeaserSection />
    </>
  )
}
