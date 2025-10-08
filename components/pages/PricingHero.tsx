'use client'

import { motion } from 'framer-motion'
import { DollarSign, Shield, CheckCircle, Clock } from 'lucide-react'

export default function PricingHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Tarife{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              transparente
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Prețuri clare și corecte pentru toate serviciile noastre veterinare. 
            Fără surprize, fără costuri ascunse - doar calitate la prețuri echitabile.
          </p>

          {/* Pricing highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                <DollarSign className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Prețuri corecte</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                <Shield className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Fără costuri ascunse</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Calitate garantată</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
                <Clock className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Estimări clare</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
