'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, X, AlertTriangle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmergencyDock() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
        <div className="relative">
          {/* Expanded state */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Urgență veterinară?</h3>
                      <p className="text-sm text-gray-600">Suntem aici pentru tine!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="tel:+40742878788"
                    className="flex items-center space-x-3 p-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Sună acum</p>
                      <p className="text-sm opacity-90">+40 742 878 788</p>
                    </div>
                  </a>
                  
                  <div className="text-xs text-gray-500">
                    <p>• Disponibil 24/7 pentru urgențe</p>
                    <p>• Răspundem în maxim 30 de secunde</p>
                    <p>• Consultație telefonică gratuită</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <Link href="/programari">
            <motion.button
              className="w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
            </motion.button>
          </Link>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-primary rounded-full opacity-30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
  )
}
