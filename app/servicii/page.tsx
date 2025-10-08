import { Metadata } from 'next'
import ServicesHero from '@/components/pages/ServicesHero'
import ServicesList from '@/components/pages/ServicesList'
import ServicesFAQ from '@/components/pages/ServicesFAQ'

export const metadata: Metadata = {
  title: 'Servicii Veterinare - Trust Vet',
  description: 'Servicii complete de medicină veterinară: consultații, vaccinări, chirurgie, analize, ecografie, urgențe 24/7. Calitate superioară pentru animalele tale.',
  keywords: 'servicii veterinare, consultații, vaccinări, chirurgie veterinară, analize, ecografie, urgențe veterinare',
  openGraph: {
    title: 'Servicii Veterinare - Trust Vet',
    description: 'Servicii complete de medicină veterinară pentru animalele de companie. Calitate superioară și îngrijire empatică.',
  },
}

export default function ServiciiPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesFAQ />
    </>
  )
}
