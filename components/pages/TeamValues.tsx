'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Lightbulb, 
  Handshake,
  CheckCircle
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Empatie & Compasiune',
    description: 'Înțelegem că animalele sunt membri ai familiei și oferim îngrijire cu respect și înțelegere.',
    details: [
      'Comunicare empatică cu proprietarii',
      'Îngrijire personalizată pentru fiecare animal',
      'Suport emoțional în momentele dificile',
      'Respect pentru deciziile familiei'
    ]
  },
  {
    icon: Shield,
    title: 'Profesionalism & Calitate',
    description: 'Ne angajăm să oferim servicii de cea mai înaltă calitate, folosind tehnologia cea mai avansată.',
    details: [
      'Echipamente medicale de ultimă generație',
      'Proceduri medicale standardizate',
      'Formare continuă a echipei',
      'Monitorizare calitate servicii'
    ]
  },
  {
    icon: Users,
    title: 'Colaborare & Echipa',
    description: 'Lucrăm ca o echipă unită, unde fiecare membru contribuie la succesul comun.',
    details: [
      'Comunicare deschisă în echipă',
      'Împărtășirea cunoștințelor',
      'Suport reciproc',
      'Dezvoltare profesională comună'
    ]
  },
  {
    icon: Award,
    title: 'Excellență & Inovație',
    description: 'Căutăm mereu să ne îmbunătățim și să adoptăm cele mai noi tehnologii și tehnici.',
    details: [
      'Cercetare și dezvoltare continuă',
      'Adoptarea tehnologiilor noi',
      'Participare la conferințe medicale',
      'Inovație în tratamente'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Educație & Prevenție',
    description: 'Credem în puterea educației pentru prevenirea bolilor și îmbunătățirea calității vieții.',
    details: [
      'Consiliere pentru proprietari',
      'Programe de prevenție',
      'Materiale educaționale',
      'Workshop-uri și seminarii'
    ]
  },
  {
    icon: Handshake,
    title: 'Încredere & Transparență',
    description: 'Construim relații de încredere prin transparență, comunicare clară și onestitate.',
    details: [
      'Comunicare clară despre tratamente',
      'Transparență în prețuri',
      'Explicarea procedurilor medicale',
      'Suport în luarea deciziilor'
    ]
  }
]

export default function TeamValues() {
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
            Valorile{' '}
            <span className="text-gradient">noastre</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Principiile care ne ghidează în fiecare zi și ne fac să oferim 
            servicii veterinare de calitate superioară.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                <ul className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-semibold mb-6">
              Misiunea noastră
            </h3>
            <p className="text-xl opacity-90 leading-relaxed max-w-4xl mx-auto">
              Să oferim îngrijire veterinară de calitate superioară, bazată pe empatie, 
              profesionalism și inovație, pentru a asigura sănătatea și bunăstarea 
              animalelor de companie și a familiilor lor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
