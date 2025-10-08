import { Metadata } from 'next'
import BookingHero from '@/components/pages/BookingHero'
import BookingForm from '@/components/pages/BookingForm'
import BookingInfo from '@/components/pages/BookingInfo'

export const metadata: Metadata = {
  title: 'Programări - Trust Vet',
  description: 'Programează o vizită la Trust Vet. Formular simplu și rapid pentru a rezerva o consultație veterinară. Disponibili pentru urgențe 24/7.',
  keywords: 'programări veterinare, rezervare vizită, consultație veterinară, urgențe, București',
  openGraph: {
    title: 'Programări - Trust Vet',
    description: 'Programează o vizită la Trust Vet. Formular simplu și rapid pentru rezervări.',
  },
}

export default function ProgramariPage() {
  return (
    <>
      <BookingHero />
      <BookingForm />
      <BookingInfo />
    </>
  )
}
