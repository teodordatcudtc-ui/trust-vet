'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus, DollarSign, Info } from 'lucide-react'

const faqs = [
  {
    question: 'Prețurile includ toate serviciile necesare?',
    answer: 'Da, prețurile afișate includ toate serviciile de bază necesare pentru fiecare procedură. Pentru consultații, prețul include examinarea completă, diagnosticul și recomandările de tratament. Pentru intervenții chirurgicale, prețul include anestezia, medicamentele și monitorizarea post-operatorie. Vă vom informa în avans despre orice costuri suplimentare.'
  },
  {
    question: 'Oferiți reduceri pentru pachete de servicii?',
    answer: 'Da, oferim reduceri pentru pachete de servicii și pentru clienții fideli. De exemplu, pentru sterilizare oferim un pachet complet care include consultația pre-operatorie, intervenția, monitorizarea și consultația de control. Pentru clienții care programează servicii regulate, oferim reduceri de 10-15%. Contactați-ne pentru detalii despre pachetele disponibile.'
  },
  {
    question: 'Cum se calculează prețul pentru urgențe?',
    answer: 'Pentru urgențele în afara programului normal (după 20:00, weekend-uri și sărbători), se aplică un supliment de 50 RON la prețul standard al serviciului. Pentru urgențele critice care necesită intervenție imediată, prețul poate fi mai mare în funcție de complexitatea cazului. Vă vom informa despre costuri înainte de a începe tratamentul.'
  },
  {
    question: 'Pot plăti în rate pentru intervențiile costisitoare?',
    answer: 'Da, pentru intervențiile chirurgicale majore (peste 1000 RON) oferim posibilitatea de plată în rate fără dobândă. Ratele pot fi plătite în 2-3 tranșe, cu prima tranșă la momentul intervenției. Pentru a beneficia de această opțiune, este necesar să ne contactați în avans pentru a stabili condițiile.'
  },
  {
    question: 'Prețurile se schimbă frecvent?',
    answer: 'Prețurile noastre sunt stabile și se actualizează doar o dată pe an, de obicei în ianuarie. Vă vom anunța cu cel puțin o lună înainte despre orice modificări de prețuri. Pentru serviciile programate, prețul rămâne cel stabilit la momentul programării, chiar dacă se schimbă prețurile generale.'
  },
  {
    question: 'Ce se întâmplă dacă procedura durează mai mult decât estimat?',
    answer: 'Dacă o procedură durează mai mult decât estimat din cauza complicațiilor neprevăzute, nu veți fi taxați suplimentar pentru timpul extra. Prețul rămâne cel stabilit inițial. Singurele excepții sunt cazurile în care sunt necesare proceduri suplimentare neprevăzute, caz în care vă vom informa și veți avea dreptul de a alege dacă să continuați.'
  },
  {
    question: 'Oferiți consultații gratuite?',
    answer: 'Oferim consultații gratuite pentru evaluarea inițială în cazuri de urgență și pentru proprietarii care doresc să evalueze starea animalului înainte de a decide asupra unui tratament. De asemenea, oferim consultații gratuite pentru proprietarii de animale adoptate din adăposturi, cu documentația corespunzătoare.'
  },
  {
    question: 'Cum pot estima costul total pentru un tratament complex?',
    answer: 'Pentru tratamente complexe, oferim consultații gratuite de evaluare unde medicul va examina animalul și va elabora un plan de tratament cu estimarea costurilor. Vă vom oferi o estimare scrisă cu toate costurile previzibile. În cazul în care apar complicații neprevăzute, vă vom informa imediat despre costurile suplimentare.'
  }
]

export default function PricingFAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Întrebări despre{' '}
            <span className="text-gradient">prețuri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Răspunsuri la cele mai comune întrebări despre tarifele noastre 
            și politicile de prețuri.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-dark pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-primary" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Informații suplimentare
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Metode de plată acceptate:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Numerar (RON)</li>
                      <li>• Card bancar</li>
                      <li>• Transfer bancar</li>
                      <li>• Plata în rate (pentru intervenții majore)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Asigurări acceptate:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Asigurări de sănătate pentru animale</li>
                      <li>• Contracte cu companii de asigurări</li>
                      <li>• Facturare directă (în anumite cazuri)</li>
                    </ul>
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
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Ai alte întrebări despre prețuri?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Echipa noastră este aici să clarifice orice aspect legat de tarife 
              și să îți ofere o estimare personalizată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Contactează-ne
              </a>
              <a href="/programari" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Programează consultație
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
