'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar, 
  Stethoscope, 
  Heart, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Programare',
    description: 'Contactezi cabinetul pentru a programa o vizită la data și ora potrivită pentru tine.',
    details: ['Programare online sau telefonică', 'Flexibilitate în programare', 'Confirmare automată']
  },
  {
    icon: Stethoscope,
    title: 'Consultație',
    description: 'Medicul examinează animalul și stabilește un diagnostic precis.',
    details: ['Examinare completă', 'Diagnostic profesional', 'Explicarea tratamentului']
  },
  {
    icon: Heart,
    title: 'Tratament',
    description: 'Aplicăm tratamentul potrivit pentru a restabili sănătatea animalului.',
    details: ['Tratament personalizat', 'Monitorizare atentă', 'Suport continuu']
  },
  {
    icon: CheckCircle,
    title: 'Urmărire',
    description: 'Urmărim evoluția și oferim consiliere pentru menținerea sănătății.',
    details: ['Urmărire post-operator', 'Consiliere preventivă', 'Suport pe termen lung']
  }
]

export default function CareStepsSection() {
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
            Procesul nostru de{' '}
            <span className="text-gradient">îngrijire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la programare la urmărire, asigurăm un proces complet și transparent 
            pentru sănătatea animalului tău.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-dark mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Gata să începi procesul de îngrijire?
            </h3>
            <p className="text-gray-600 mb-6">
              Programează o vizită și începe drumul către sănătatea optimă a animalului tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/programari" className="btn-primary">
                Programează acum
              </a>
              <a href="tel:+40742878788" className="btn-secondary">
                Sună acum
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
