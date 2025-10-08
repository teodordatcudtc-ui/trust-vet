import { Metadata } from 'next'
import BlogList from '@/components/pages/BlogList'
import BlogHero from '@/components/pages/BlogHero'

export const metadata: Metadata = {
  title: 'Blog Veterinar | Trust Vet - Articole despre îngrijirea animalelor',
  description: 'Descoperă articole utile despre îngrijirea animalelor de companie, vaccinări, nutriție, prevenție și multe altele. Ghiduri complete de la medicii noștri veterinari.',
  keywords: 'blog veterinar, articole despre animale, îngrijire câini, îngrijire pisici, vaccinări, nutriție, prevenție',
  openGraph: {
    title: 'Blog Veterinar | Trust Vet - Articole despre îngrijirea animalelor',
    description: 'Descoperă articole utile despre îngrijirea animalelor de companie, vaccinări, nutriție, prevenție și multe altele.',
    type: 'website',
    url: 'https://trustvet.ro/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Trust Vet Blog - Articole despre îngrijirea animalelor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Veterinar | Trust Vet - Articole despre îngrijirea animalelor',
    description: 'Descoperă articole utile despre îngrijirea animalelor de companie, vaccinări, nutriție, prevenție și multe altele.',
  },
  alternates: {
    canonical: 'https://trustvet.ro/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogList />
    </div>
  )
}