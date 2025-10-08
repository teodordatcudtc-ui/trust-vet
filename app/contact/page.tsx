import { Metadata } from 'next'
import ContactHero from '@/components/pages/ContactHero'
import ContactInfo from '@/components/pages/ContactInfo'
import ContactForm from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Trust Vet',
  description: 'Contactează Trust Vet pentru programări, întrebări sau urgențe. Telefon: +40 742 878 788, Email: cabinet@trustvet.ro, Adresă: Str. Jiului, nr. 145, Sector 1, București.',
  keywords: 'contact veterinar, programări, urgențe, București, telefon, email, adresă',
  openGraph: {
    title: 'Contact - Trust Vet',
    description: 'Contactează Trust Vet pentru programări, întrebări sau urgențe.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  )
}
