'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation,
  Calendar,
  Heart,
  AlertTriangle
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Telefon',
    primary: '+40 742 878 788',
    description: 'Disponibil 24/7 pentru urgențe',
    action: 'Sună acum',
    href: 'tel:+40742878788',
    urgent: true
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'cabinet@trustvet.ro',
    description: 'Răspundem în maxim 2 ore',
    action: 'Trimite email',
    href: 'mailto:cabinet@trustvet.ro',
    urgent: false
  },
  {
    icon: MapPin,
    title: 'Adresă',
    primary: 'Str. Jiului, nr. 145, Sector 1',
    description: 'București, România',
    action: 'Deschide în Maps',
    href: 'https://maps.google.com/?q=Str.+Jiului,+nr.+145,+Sector+1,+București',
    urgent: false
  }
]

const workingHours = [
  { day: 'Luni - Vineri', hours: '08:00 - 20:00' },
  { day: 'Sâmbătă', hours: '09:00 - 18:00' },
  { day: 'Duminică', hours: '10:00 - 16:00' },
  { day: 'Urgențe', hours: '24/7', urgent: true }
]

export default function ContactInfo() {
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
            Informații de{' '}
            <span className="text-gradient">contact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem ușor de contactat prin multiple canale. Alege metoda 
            care îți este cea mai convenabilă.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark mb-6">
              Cum ne poți contacta
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  method.urgent ? 'border-red-200 bg-red-50' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    method.urgent ? 'bg-red-100' : 'bg-primary/10'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      method.urgent ? 'text-red-600' : 'text-primary'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-dark">
                        {method.title}
                      </h4>
                      {method.urgent && (
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                    
                    <p className="text-xl font-semibold text-primary mb-2">
                      {method.primary}
                    </p>
                    
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                        method.urgent
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                    >
                      <span>{method.action}</span>
                      <Navigation className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Working Hours & Map */}
          <div className="space-y-8">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Program de lucru
              </h3>
              
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between">
                    <span className={`font-medium ${
                      schedule.urgent ? 'text-red-600' : 'text-dark'
                    }`}>
                      {schedule.day}
                    </span>
                    <span className={`font-semibold ${
                      schedule.urgent ? 'text-red-600' : 'text-primary'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-dark mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-primary mr-3" />
                Locația noastră
              </h3>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.4612476406237!2d26.0529821766633!3d44.48521489822259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203007661f64f%3A0x28a2a9866a80bbe0!2sTrust%20Vet!5e0!3m2!1sen!2sro!4v1759910739554!5m2!1sen!2sro"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p><strong>Adresă completă:</strong> Str. Jiului, nr. 145, Sector 1, București</p>
                <p><strong>Parcare:</strong> Disponibilă în fața cabinetului</p>
                <p><strong>Transport public:</strong> Stația cel mai apropiată la 5 min</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-red-50 border border-red-200 rounded-3xl p-8"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold text-red-800 mb-4">
                Urgență veterinară?
              </h3>
              <p className="text-red-700 mb-6">
                Dacă animalul tău prezintă simptome grave sau a fost rănit, 
                nu aștepta - sună imediat pentru asistență de urgență!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+40742878788" 
                  className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Sună pentru urgențe: +40 742 878 788
                </a>
                <a 
                  href="/programari" 
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-colors text-center"
                >
                  Programează consultație
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
