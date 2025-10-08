'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Popescu',
    pet: 'Max (Golden Retriever)',
    rating: 5,
    text: 'Echipa de la Trust Vet a salvat viața lui Max când avea o infecție gravă. Profesionalismul și empatia lor au făcut diferența. Recomand cu încredere!',
    image: '/testimonials/maria.jpg'
  },
  {
    name: 'Alexandru Ionescu',
    pet: 'Luna (Pisică)',
    rating: 5,
    text: 'Serviciul de urgență 24/7 mi-a salvat pisica în mijlocul nopții. Sunt foarte recunoscător pentru promptitudinea și îngrijirea oferită.',
    image: '/testimonials/alexandru.jpg'
  },
  {
    name: 'Elena Dumitrescu',
    pet: 'Rex (Câine)',
    rating: 5,
    text: 'De la consultații la chirurgie, totul a fost perfect. Medicul a explicat totul pas cu pas și m-a liniștit în momentele dificile.',
    image: '/testimonials/elena.jpg'
  },
  {
    name: 'Cristian Marinescu',
    pet: 'Whiskers (Pisică)',
    rating: 5,
    text: 'Cabinetul are aparatură modernă și echipă foarte competentă. Whiskers s-a vindecat complet după operația de sterilizare.',
    image: '/testimonials/cristian.jpg'
  },
  {
    name: 'Ana Constantinescu',
    pet: 'Buddy (Câine)',
    rating: 5,
    text: 'Programul flexibil mi-a permis să vin cu Buddy după munca. Calitatea serviciilor este excepțională și prețurile sunt corecte.',
    image: '/testimonials/ana.jpg'
  },
  {
    name: 'Mihai Radu',
    pet: 'Simba (Pisică)',
    rating: 5,
    text: 'Consultanța nutrițională a schimbat complet sănătatea lui Simba. Acum este mai activ și mai fericit ca niciodată.',
    image: '/testimonials/mihai.jpg'
  }
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            Ce spun{' '}
            <span className="text-gradient">clienții noștri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mii de familii ne-au ales pentru îngrijirea animalelor lor. 
            Descoperă experiențele lor și de ce ne recomandă.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-lg opacity-90">Rating mediu</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Recenzii pozitive</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Clienți mulțumiți</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
