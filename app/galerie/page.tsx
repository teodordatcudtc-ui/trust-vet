import { Metadata } from 'next'
import GalleryHero from '@/components/pages/GalleryHero'
import GalleryGrid from '@/components/pages/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie - Trust Vet',
  description: 'Galerie foto cu cabinetul nostru, echipamentele moderne și cazuri de succes. Vezi cum arată Trust Vet și rezultatele tratamentelor noastre.',
  keywords: 'galerie veterinară, cabinet, echipamente, cazuri de succes, București',
  openGraph: {
    title: 'Galerie - Trust Vet',
    description: 'Galerie foto cu cabinetul nostru și rezultatele tratamentelor.',
  },
}

export default function GaleriePage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
