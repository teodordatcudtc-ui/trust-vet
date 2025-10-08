'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Microscope, 
  Camera, 
  Heart,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'consultatii',
    icon: Stethoscope,
    title: 'Consultații generale',
    description: 'Examinări complete și diagnostic pentru sănătatea animalului tău',
    price: 'de la 150 RON',
    features: [
      'Examinare completă a animalului',
      'Diagnostic profesional',
      'Recomandări de tratament',
      'Consiliere pentru proprietar'
    ],
    duration: '30-45 min'
  },
  {
    id: 'vaccinari',
    icon: Syringe,
    title: 'Vaccinări',
    description: 'Program complet de vaccinări pentru protecție optimă',
    price: 'de la 80 RON',
    features: [
      'Vaccinări obligatorii',
      'Vaccinări recomandate',
      'Program personalizat',
      'Certificat de vaccinare'
    ],
    duration: '15-30 min'
  },
  {
    id: 'chirurgie',
    icon: Scissors,
    title: 'Chirurgie',
    description: 'Intervenții chirurgicale minore și majore cu tehnologie avansată',
    price: 'de la 300 RON',
    features: [
      'Chirurgie minoră',
      'Sterilizare/castrație',
      'Chirurgie majoră',
      'Monitorizare post-operatorie'
    ],
    duration: '1-3 ore'
  },
  {
    id: 'analize',
    icon: Microscope,
    title: 'Analize medicale',
    description: 'Analize de sânge, urină și alte investigații de laborator',
    price: 'de la 50 RON',
    features: [
      'Analize de sânge complete',
      'Analize de urină',
      'Cultura bacteriană',
      'Rezultate rapide'
    ],
    duration: '15-30 min'
  },
  {
    id: 'ecografie',
    icon: Camera,
    title: 'Ecografie',
    description: 'Imagini ultrasonice pentru diagnostic precis și monitorizare',
    price: 'de la 200 RON',
    features: [
      'Ecografie abdominală',
      'Ecografie cardiacă',
      'Monitorizare sarcină',
      'Imagini HD'
    ],
    duration: '30-45 min'
  },
  {
    id: 'urgente',
    icon: Heart,
    title: 'Urgențe 24/7',
    description: 'Servicii de urgență disponibile non-stop pentru cazuri critice',
    price: 'de la 200 RON',
    features: [
      'Disponibilitate 24/7',
      'Răspuns rapid',
      'Echipă specializată',
      'Aparatură de urgență'
    ],
    duration: 'Imediat'
  }
]

export default function ServicesList() {
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
            Servicii{' '}
            <span className="text-gradient">detaliate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fiecare serviciu este adaptat nevoilor specifice ale animalului tău, 
            cu echipă specializată și tehnologie modernă.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Service info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-dark mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Durată: {service.duration}</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:col-span-1">
                  <div className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {service.price}
                    </div>
                    <p className="text-gray-600 mb-6">
                      Prețul poate varia în funcție de complexitatea cazului
                    </p>
                    
                    <div className="space-y-3">
                      <Link 
                        href="/programari" 
                        className="btn-primary w-full block text-center"
                      >
                        Programează acum
                      </Link>
                      <Link 
                        href="/contact" 
                        className="btn-outline w-full block text-center"
                      >
                        Întrebări
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Nu știi ce serviciu ai nevoie?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Contactează-ne pentru o consultație gratuită și îți vom recomanda 
              serviciile potrivite pentru animalul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programari" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Programează consultație
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Contactează-ne
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
