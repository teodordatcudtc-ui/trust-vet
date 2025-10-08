'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { X, Heart, Shield, Camera, Award } from 'lucide-react'

const galleryCategories = [
  {
    id: 'cabinet',
    title: 'Cabinet & Spații',
    icon: Camera,
    description: 'Spațiile noastre moderne și confortabile'
  },
  {
    id: 'echipamente',
    title: 'Echipamente',
    icon: Shield,
    description: 'Tehnologia avansată pentru diagnostic și tratament'
  },
  {
    id: 'cazuri',
    title: 'Cazuri de succes',
    icon: Heart,
    description: 'Transformări și vindecări care ne fac mândri'
  },
  {
    id: 'echipa',
    title: 'Echipa în acțiune',
    icon: Award,
    description: 'Medicii noștri la lucru'
  }
]

const galleryItems = [
  {
    id: 1,
    category: 'cabinet',
    title: 'Recepția principală',
    description: 'Spațiu primitor și modern pentru clienți',
    image: '/gallery/reception.jpg',
    featured: true
  },
  {
    id: 2,
    category: 'cabinet',
    title: 'Sala de consultații',
    description: 'Spațiu spațios pentru examinări confortabile',
    image: '/gallery/consultation-room.jpg',
    featured: false
  },
  {
    id: 3,
    category: 'cabinet',
    title: 'Sala de așteptare',
    description: 'Zonă relaxantă pentru proprietari și animale',
    image: '/gallery/waiting-room.jpg',
    featured: false
  },
  {
    id: 4,
    category: 'echipamente',
    title: 'Ecograf digital',
    description: 'Tehnologie de vârf pentru diagnostic precis',
    image: '/gallery/ultrasound.jpg',
    featured: true
  },
  {
    id: 5,
    category: 'echipamente',
    title: 'Radiografie digitală',
    description: 'Imagini clare pentru diagnostic rapid',
    image: '/gallery/xray.jpg',
    featured: false
  },
  {
    id: 6,
    category: 'echipamente',
    title: 'Laborator de analize',
    description: 'Rezultate rapide și precise',
    image: '/gallery/laboratory.jpg',
    featured: false
  },
  {
    id: 7,
    category: 'cazuri',
    title: 'Tratament dermatologic',
    description: 'Rezultatul după 2 săptămâni de tratament',
    image: '/gallery/dermatology-before-after.jpg',
    featured: true
  },
  {
    id: 8,
    category: 'cazuri',
    title: 'Chirurgie de succes',
    description: 'Intervenție complexă finalizată cu succes',
    image: '/gallery/surgery-success.jpg',
    featured: false
  },
  {
    id: 9,
    category: 'cazuri',
    title: 'Vindecare completă',
    description: 'Animalul după tratamentul complet',
    image: '/gallery/healing-complete.jpg',
    featured: false
  },
  {
    id: 10,
    category: 'echipa',
    title: 'Dr. Maria la lucru',
    description: 'Examinare atentă și profesională',
    image: '/gallery/doctor-at-work.jpg',
    featured: true
  },
  {
    id: 11,
    category: 'echipa',
    title: 'Echipa în acțiune',
    description: 'Colaborare perfectă pentru bunăstarea animalelor',
    image: '/gallery/team-work.jpg',
    featured: false
  },
  {
    id: 12,
    category: 'echipa',
    title: 'Consultanță nutrițională',
    description: 'Consiliere personalizată pentru alimentație',
    image: '/gallery/nutrition-consultation.jpg',
    featured: false
  }
]

export default function GalleryGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Descoperă{' '}
            <span className="text-gradient">Trust Vet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O privire în spatele scenelor la cabinetul nostru modern, 
            echipamentele avansate și cazurile de succes care ne fac mândri.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Toate
          </button>
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-primary" />
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="h-96 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <Camera className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-dark mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Vrei să vezi mai multe?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Programează o vizită la cabinetul nostru pentru a vedea 
              personal spațiile și echipamentele noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programari" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Programează vizită
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Contactează-ne
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
