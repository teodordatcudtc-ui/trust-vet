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
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Consultații generale',
    description: 'Examinări complete și diagnostic pentru sănătatea animalului tău',
    price: 'de la 150 RON',
    href: '/servicii#consultatii'
  },
  {
    icon: Syringe,
    title: 'Vaccinări',
    description: 'Program complet de vaccinări pentru protecție optimă',
    price: 'de la 80 RON',
    href: '/servicii#vaccinari'
  },
  {
    icon: Scissors,
    title: 'Chirurgie',
    description: 'Intervenții chirurgicale minore și majore cu tehnologie avansată',
    price: 'de la 300 RON',
    href: '/servicii#chirurgie'
  },
  {
    icon: Microscope,
    title: 'Analize medicale',
    description: 'Analize de sânge, urină și alte investigații de laborator',
    price: 'de la 50 RON',
    href: '/servicii#analize'
  },
  {
    icon: Camera,
    title: 'Ecografie',
    description: 'Imagini ultrasonice pentru diagnostic precis și monitorizare',
    price: 'de la 200 RON',
    href: '/servicii#ecografie'
  },
  {
    icon: Heart,
    title: 'Urgențe 24/7',
    description: 'Servicii de urgență disponibile non-stop pentru cazuri critice',
    price: 'de la 200 RON',
    href: '/servicii#urgente'
  }
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Servicii complete pentru{' '}
            <span className="text-gradient">animalele tale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferim o gamă largă de servicii veterinare de calitate superioară, 
            adaptate nevoilor specifice ale fiecărui animal de companie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="glass-card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Preț</p>
                      <p className="text-lg font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Detalii</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Nu știi ce serviciu ai nevoie?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactează-ne pentru o consultație gratuită și îți vom recomanda 
              serviciile potrivite pentru animalul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programari" className="btn-primary">
                Programează consultație
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contactează-ne
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
