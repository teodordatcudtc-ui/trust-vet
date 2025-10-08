'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Star, Shield, Heart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/20 pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-dark"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-dark">Cabinet veterinar premium</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
            >
              Îngrijirea perfectă pentru{' '}
              <span className="text-gradient">
                animalele tale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Echipa noastră empatică și aparatura modernă oferă servicii veterinare 
              de calitate superioară pentru sănătatea și bunăstarea animalelor de companie.
            </motion.p>

            {/* Motto - displayed once */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <p className="text-lg font-medium text-primary italic">
                "HEALTH, BEAUTY & BEYOND"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/programari"
                className="group bg-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Programează vizită</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/servicii"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Vezi servicii</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Licențiat ANVSA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-gray-600">Urgențe 24/7</span>
                </div>
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main image container */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Hero image */}
                <div className="relative w-full h-full">
                  <img
                    src="/images/hero/hero-main.jpg"
                    alt="Trust Vet - Cabinet Veterinar Premium"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback dacă imaginea nu există
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  
                  {/* Fallback content dacă imaginea nu există */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  
                  {/* Overlay cu informații */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-4">
                        Sănătate & Bunăstare
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold">15+</div>
                          <div className="text-sm text-white/80">Ani experiență</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold">5000+</div>
                          <div className="text-sm text-white/80">Pacienți fericiți</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Star className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
