import { Metadata } from 'next'
import TeamHero from '@/components/pages/TeamHero'
import TeamMembers from '@/components/pages/TeamMembers'
import TeamValues from '@/components/pages/TeamValues'

export const metadata: Metadata = {
  title: 'Echipa noastră - Trust Vet',
  description: 'Cunoaște echipa noastră de medici veterinari și asistenți specializați. Experiență, empatie și pasiune pentru îngrijirea animalelor.',
  keywords: 'medici veterinari, echipă veterinară, specialiști, București, experiență',
  openGraph: {
    title: 'Echipa noastră - Trust Vet',
    description: 'Cunoaște echipa noastră de medici veterinari și asistenți specializați cu experiență și pasiune.',
  },
}

export default function EchipaPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <TeamValues />
    </>
  )
}
