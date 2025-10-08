import { Metadata } from 'next'
import PricingHero from '@/components/pages/PricingHero'
import PricingTable from '@/components/pages/PricingTable'
import PricingFAQ from '@/components/pages/PricingFAQ'

export const metadata: Metadata = {
  title: 'Tarife - Trust Vet',
  description: 'Tarife transparente pentru serviciile veterinare. Consultații, vaccinări, chirurgie, analize - prețuri clare și corecte pentru îngrijirea animalelor tale.',
  keywords: 'tarife veterinare, prețuri, consultații, vaccinări, chirurgie, analize, București',
  openGraph: {
    title: 'Tarife - Trust Vet',
    description: 'Tarife transparente pentru serviciile veterinare. Prețuri clare și corecte.',
  },
}

export default function TarifePage() {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <PricingFAQ />
    </>
  )
}
