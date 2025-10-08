'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Phone,
  CheckCircle
} from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Echipă empatică',
    description: 'Medicii noștri înțeleg că animalele sunt membri ai familiei și oferă îngrijire cu compasiune și respect.',
    features: ['Comunicare clară', 'Îngrijire personalizată', 'Suport emoțional']
  },
  {
    icon: Shield,
    title: 'Aparatură modernă',
    description: 'Utilizăm tehnologie de vârf pentru diagnostic precis și tratamente eficiente.',
    features: ['Ecograf digital', 'Analizator automat', 'Radiografie digitală']
  },
  {
    icon: Clock,
    title: 'Program flexibil',
    description: 'Adaptăm programul pentru a se potrivi nevoilor tale, inclusiv în weekend și seara.',
    features: ['Program extins', 'Weekend disponibil', 'Urgențe 24/7']
  },
  {
    icon: Users,
    title: 'Orientare prevenție',
    description: 'Ne concentrăm pe prevenirea bolilor prin programe de vaccinare și monitorizare.',
    features: ['Programe preventive', 'Monitorizare continuă', 'Consiliere nutrițională']
  },
  {
    icon: Award,
    title: 'Experiență dovedită',
    description: 'Peste 15 ani de experiență în medicina veterinară cu mii de pacienți fericiți.',
    features: ['15+ ani experiență', '5000+ pacienți', 'Recomandări pozitive']
  },
  {
    icon: Phone,
    title: 'Suport continuu',
    description: 'Suntem disponibili pentru întrebări și urmărirea tratamentelor după consultație.',
    features: ['Consultanță telefonică', 'Urmărire post-operator', 'Suport online']
  }
]

export default function WhyTrustVetSection() {
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
            De ce să alegi{' '}
            <span className="text-gradient">Trust Vet</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ne diferențiem prin abordarea noastră umană, tehnologia avansată 
            și angajamentul față de sănătatea animalelor de companie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Ani experiență</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                <div className="text-lg opacity-90">Pacienți fericiți</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Disponibilitate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Satisfacție clienți</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
