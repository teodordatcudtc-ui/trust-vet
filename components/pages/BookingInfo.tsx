'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Clock, 
  MapPin, 
  AlertCircle, 
  CheckCircle,
  Calendar,
  User,
  Heart
} from 'lucide-react'

const infoSections = [
  {
    icon: Clock,
    title: 'Program de lucru',
    details: [
      'Luni - Vineri: 08:00 - 20:00',
      'Sâmbătă: 09:00 - 18:00',
      'Duminică: 10:00 - 16:00',
      'Urgențe: 24/7'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Phone,
    title: 'Contact rapid',
    details: [
      'Telefon: +40 742 878 788',
      'Email: cabinet@trustvet.ro',
      'Răspundem în maxim 30 min',
      'Urgențe: răspuns imediat'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: MapPin,
    title: 'Locația noastră',
    details: [
      'Str. Jiului, nr. 145',
      'Sector 1, București',
      'Parcare disponibilă',
      'Acces ușor cu transportul public'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Trimite cererea',
    description: 'Completează formularul de programare cu toate detaliile necesare.',
    icon: Calendar
  },
  {
    step: 2,
    title: 'Confirmare programare',
    description: 'Te vom contacta în cel mai scurt timp pentru a confirma programarea.',
    icon: Phone
  },
  {
    step: 3,
    title: 'Vizita la cabinet',
    description: 'Vino la cabinet la data și ora programată pentru consultație.',
    icon: User
  },
  {
    step: 4,
    title: 'Urmărire post-consult',
    description: 'Oferim suport și urmărire după consultație pentru sănătatea animalului.',
    icon: Heart
  }
]

export default function BookingInfo() {
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
            Informații{' '}
            <span className="text-gradient">importante</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tot ce trebuie să știi despre programări, procesul de rezervare 
            și cum să ne contactezi pentru urgențe.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infoSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 ${section.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                <section.icon className={`w-8 h-8 ${section.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-dark mb-4">
                {section.title}
              </h3>
              
              <ul className="space-y-2">
                {section.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold text-dark text-center mb-12">
            Procesul de programare
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8" />
                  )}
                </div>
                
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-lg font-semibold text-dark mb-3">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-red-50 border border-red-200 rounded-3xl p-8"
        >
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">
                Urgență veterinară?
              </h3>
              <p className="text-red-700 mb-6">
                Dacă animalul tău prezintă simptome grave sau a fost rănit, 
                nu aștepta programarea - sună imediat!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Simptome care necesită urgență:</h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• Dificultăți de respirație</li>
                    <li>• Sângerare abundentă</li>
                    <li>• Pierderea conștiinței</li>
                    <li>• Convulsii</li>
                    <li>• Vărsături persistente</li>
                    <li>• Diaree cu sânge</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Contact urgență:</h4>
                  <div className="space-y-2">
                    <a 
                      href="tel:+40742878788" 
                      className="block text-lg font-semibold text-red-800 hover:text-red-600 transition-colors"
                    >
                      +40 742 878 788
                    </a>
                    <p className="text-sm text-red-700">
                      Disponibil 24/7 pentru urgențe
                    </p>
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ai întrebări despre programări?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Echipa noastră este aici să te ajute cu orice întrebare despre 
              programări sau serviciile noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+40742878788" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Sună acum
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
