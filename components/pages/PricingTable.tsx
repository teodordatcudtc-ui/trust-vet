'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { CheckCircle, Info, AlertCircle } from 'lucide-react'

const pricingCategories = [
  {
    title: 'Consultații & Examinări',
    services: [
      { name: 'Consultație generală', price: '150 RON', duration: '30-45 min', popular: false },
      { name: 'Consultație de urgență', price: '200 RON', duration: 'Imediat', popular: true },
      { name: 'Consultație de control', price: '100 RON', duration: '15-30 min', popular: false },
      { name: 'Consultație la domiciliu', price: '250 RON', duration: '45-60 min', popular: false },
      { name: 'Consultație nutrițională', price: '120 RON', duration: '30 min', popular: false }
    ]
  },
  {
    title: 'Vaccinări & Prevenție',
    services: [
      { name: 'Vaccin DHPP (câini)', price: '80 RON', duration: '15 min', popular: false },
      { name: 'Vaccin FVRCP (pisici)', price: '70 RON', duration: '15 min', popular: false },
      { name: 'Vaccin anti-rabic', price: '60 RON', duration: '15 min', popular: false },
      { name: 'Deparazitare internă', price: '40 RON', duration: '10 min', popular: false },
      { name: 'Deparazitare externă', price: '50 RON', duration: '10 min', popular: false },
      { name: 'Microcipare', price: '100 RON', duration: '20 min', popular: false }
    ]
  },
  {
    title: 'Chirurgie & Proceduri',
    services: [
      { name: 'Sterilizare pisică', price: '300 RON', duration: '1-2 ore', popular: false },
      { name: 'Sterilizare câine', price: '400 RON', duration: '1-2 ore', popular: false },
      { name: 'Castrare pisic', price: '250 RON', duration: '1-2 ore', popular: false },
      { name: 'Castrare câine', price: '350 RON', duration: '1-2 ore', popular: false },
      { name: 'Chirurgie minoră', price: '200 RON', duration: '30-60 min', popular: false },
      { name: 'Chirurgie majoră', price: '500 RON+', duration: '2-4 ore', popular: false }
    ]
  },
  {
    title: 'Analize & Investigări',
    services: [
      { name: 'Analize de sânge complete', price: '80 RON', duration: '15 min', popular: false },
      { name: 'Analize de urină', price: '50 RON', duration: '10 min', popular: false },
      { name: 'Cultura bacteriană', price: '120 RON', duration: '5 min', popular: false },
      { name: 'Teste alergice', price: '200 RON', duration: '20 min', popular: false },
      { name: 'Ecografie abdominală', price: '200 RON', duration: '30 min', popular: true },
      { name: 'Radiografie', price: '150 RON', duration: '20 min', popular: false }
    ]
  },
  {
    title: 'Servicii Specializate',
    services: [
      { name: 'Dentistrie veterinară', price: '300 RON', duration: '1-2 ore', popular: false },
      { name: 'Dermatologie', price: '180 RON', duration: '45 min', popular: false },
      { name: 'Cardiologie', price: '250 RON', duration: '60 min', popular: false },
      { name: 'Oftalmologie', price: '200 RON', duration: '45 min', popular: false },
      { name: 'Fizioterapie', price: '120 RON', duration: '45 min', popular: false },
      { name: 'Consultanță comportamentală', price: '150 RON', duration: '60 min', popular: false }
    ]
  }
]

export default function PricingTable() {
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
            Prețuri{' '}
            <span className="text-gradient">detaliate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tarife transparente pentru toate serviciile noastre. Prețurile pot varia 
            în funcție de complexitatea cazului și de serviciile suplimentare necesare.
          </p>
        </motion.div>

        <div className="space-y-12">
          {pricingCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`p-4 rounded-2xl border transition-all duration-300 hover:shadow-md ${
                        service.popular 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-dark text-sm leading-tight">
                          {service.name}
                        </h4>
                        {service.popular && (
                          <div className="bg-primary text-white text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0">
                            Popular
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            {service.price}
                          </span>
                          <span className="text-xs text-gray-500">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Informații importante despre prețuri
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <p>Prețurile pot varia în funcție de greutatea și vârsta animalului</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <p>Pentru urgențe în afara programului, se aplică un supliment de 50 RON</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <p>Anestezia și medicamentele sunt incluse în prețul intervențiilor chirurgicale</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <p>Oferim reduceri pentru pachete de servicii și clienți fideli</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ai întrebări despre prețuri?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Contactează-ne pentru o estimare personalizată sau pentru a afla 
              despre pachetele noastre de servicii.
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
