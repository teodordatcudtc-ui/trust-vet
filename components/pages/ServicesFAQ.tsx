'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Când ar trebui să vaccinez animalul meu?',
    answer: 'Vaccinările pentru câini și pisici încep de la 6-8 săptămâni și continuă conform programului recomandat. Pentru câini, vaccinările de bază includ DHPP (distemper, hepatită, parainfluenza, parvovirus) și anti-rabică. Pentru pisici, vaccinările esențiale sunt FVRCP (rhinotracheită, calicivirus, panleucopenie) și anti-rabică. Recomandăm consultarea unui medic veterinar pentru un program personalizat.'
  },
  {
    question: 'Cât costă o consultație veterinară?',
    answer: 'Prețul unei consultații generale începe de la 150 RON. Costul poate varia în funcție de complexitatea cazului, tipul de animal și serviciile suplimentare necesare. Pentru urgențe, prețul poate fi mai mare. Oferim consultații gratuite pentru evaluarea inițială în cazuri de urgență.'
  },
  {
    question: 'Când să sun pentru urgențe?',
    answer: 'Sună imediat dacă animalul tău prezintă: dificultăți de respirație, sângerare abundentă, pierderea conștiinței, convulsii, vărsături persistente, diaree cu sânge, incapacitatea de a urina sau defeca, sau dacă a ingerat ceva toxic. Suntem disponibili 24/7 pentru urgențe la numărul +40 742 878 788.'
  },
  {
    question: 'Cum să îngrijesc animalul după sterilizare?',
    answer: 'După sterilizare, asigură-te că animalul rămâne cald și în repaus. Nu îl lăsa să se joace sau să facă eforturi timp de 7-10 zile. Verifică zilnic sutura și contactează-ne dacă observi roșeață, umflături sau secreții. Administrează medicamentele prescrise conform instrucțiunilor. Programează o vizită de control după 7-10 zile.'
  },
  {
    question: 'Ce analize sunt necesare pentru animalul meu?',
    answer: 'Analizele de rutină includ hemoleucograma, biochimia sanguină și analiza urinei. Pentru animale mai în vârstă (peste 7 ani), recomandăm analize anuale complete. Pentru animale cu probleme de sănătate, analizele pot fi necesare mai frecvent. Medicul veterinar va recomanda analizele potrivite în funcție de vârsta, rasa și starea de sănătate a animalului.'
  },
  {
    question: 'Cum să pregătesc animalul pentru o vizită?',
    answer: 'Aduceți cu voi toate documentele medicale anterioare, inclusiv carnetul de vaccinări. Dacă este posibil, nu hrăniți animalul cu 2-3 ore înainte de vizită (în cazul în care sunt necesare analize). Aduceți o pătură sau un jucărie familiară pentru a-l liniști. Pentru animale agresive sau anxioase, informați-ne în avans.'
  },
  {
    question: 'Cât durează o operație de sterilizare?',
    answer: 'O operație de sterilizare standard durează între 30-60 de minute, în funcție de tipul de animal și de complexitatea procedurii. Timpul total de ședere la cabinet poate fi de 4-6 ore, incluzând pregătirea pre-operatorie și monitorizarea post-operatorie. Vă vom informa despre toate detaliile înainte de intervenție.'
  },
  {
    question: 'Ce servicii oferiți pentru animale exotice?',
    answer: 'Oferim consultații și tratamente pentru păsări, rozătoare, iepuri și alte animale exotice. Serviciile includ consultații specializate, analize, radiografii și tratamente adaptate nevoilor specifice ale acestor animale. Echipa noastră are experiență în medicina exotică și folosește echipamente specializate.'
  }
]

export default function ServicesFAQ() {
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
            Întrebări{' '}
            <span className="text-gradient">frecvente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Răspunsuri la cele mai comune întrebări despre serviciile noastre 
            și îngrijirea animalelor de companie.
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-dark mb-4">
              Ai alte întrebări?
            </h3>
            <p className="text-gray-600 mb-6">
              Echipa noastră este aici să răspundă la orice întrebare despre 
              îngrijirea animalului tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contactează-ne
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
