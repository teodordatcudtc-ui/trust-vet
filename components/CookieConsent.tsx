'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }))
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      ...preferences,
      timestamp: Date.now()
    }))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-6 left-6 right-6 z-50 max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-dark mb-2">
                Utilizăm cookie-uri pentru a îmbunătăți experiența ta
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Trust Vet folosește cookie-uri pentru a personaliza conținutul, 
                analiza traficul și îmbunătăți serviciile noastre. 
                <a href="/politica-cookie" className="text-primary hover:underline ml-1">
                  Află mai multe
                </a>
              </p>

              {!showSettings ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Acceptă toate
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="btn-outline text-sm px-4 py-2 flex items-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Personalizează</span>
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-gray-500 hover:text-gray-700 text-sm px-4 py-2 transition-colors"
                  >
                    Refuză toate
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-dark">Cookie-uri necesare</p>
                        <p className="text-sm text-gray-600">Obligatorii pentru funcționarea site-ului</p>
                      </div>
                      <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-dark">Analiză</p>
                        <p className="text-sm text-gray-600">Pentru a înțelege cum folosești site-ul</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.analytics ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-dark">Marketing</p>
                        <p className="text-sm text-gray-600">Pentru personalizarea reclamelor</p>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                          preferences.marketing ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={handleAcceptSelected}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Salvează preferințele
                    </button>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="btn-outline text-sm px-4 py-2"
                    >
                      Înapoi
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={handleRejectAll}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
