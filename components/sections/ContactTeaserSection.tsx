'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowRight, Navigation } from 'lucide-react'

export default function ContactTeaserSection() {
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
            Găsește-ne{' '}
            <span className="text-gradient">ușor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Suntem localizați în centrul Bucureștiului, cu acces ușor și parcare disponibilă. 
            Contactează-ne pentru orice întrebare sau programare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-dark mb-6">Informații de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Adresă</h4>
                    <p className="text-gray-600">
                      Str. Jiului, nr. 145<br />
                      Sector 1, București, România
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Str.+Jiului,+nr.+145,+Sector+1,+București"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-flex items-center"
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Deschide în Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Telefon</h4>
                    <a 
                      href="tel:+40742878788" 
                      className="text-primary hover:underline text-lg font-medium"
                    >
                      +40 742 878 788
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Disponibil 24/7 pentru urgențe</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Email</h4>
                    <a 
                      href="mailto:cabinet@trustvet.ro" 
                      className="text-primary hover:underline"
                    >
                      cabinet@trustvet.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-1">Program de lucru</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Luni - Vineri: 08:00 - 20:00</p>
                      <p>Sâmbătă: 09:00 - 18:00</p>
                      <p>Duminică: 10:00 - 16:00</p>
                      <p className="text-sm text-primary font-medium">Urgențe: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/programari" className="btn-primary flex-1 text-center">
                  Programează vizită
                </Link>
                <a 
                  href="tel:+40742878788" 
                  className="btn-secondary flex-1 text-center"
                >
                  Sună acum
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.4612476406237!2d26.0529821766633!3d44.48521489822259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203007661f64f%3A0x28a2a9866a80bbe0!2sTrust%20Vet!5e0!3m2!1sen!2sro!4v1759910739554!5m2!1sen!2sro"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
            
            {/* Map overlay info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Trust Vet</h4>
                    <p className="text-sm text-gray-600">Str. Jiului, nr. 145, Sector 1</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ai întrebări sau vrei să programezi o vizită?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Suntem aici să te ajutăm cu orice ai nevoie pentru animalul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Contactează-ne
              </Link>
              <Link href="/programari" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Programează acum
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
