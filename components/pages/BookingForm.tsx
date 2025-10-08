'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Calendar, Clock, User, Phone, Mail, Heart, AlertCircle, CheckCircle } from 'lucide-react'

interface BookingFormData {
  name: string
  phone: string
  email: string
  serviceType: string
  animalSpecies: string
  animalName: string
  animalAge: string
  reason: string
  preferredDate: string
  preferredTime: string
  urgency: string
  additionalInfo: string
  gdprConsent: boolean
}

const serviceTypes = [
  'Consultație generală',
  'Consultație de urgență',
  'Vaccinări',
  'Sterilizare/Castrare',
  'Chirurgie',
  'Analize medicale',
  'Ecografie',
  'Dentistrie',
  'Dermatologie',
  'Altele'
]

const animalSpecies = [
  'Câine',
  'Pisică',
  'Rozător (hamster, cobai, etc.)',
  'Pasăre',
  'Iepure',
  'Altele'
]

const urgencyLevels = [
  { value: 'normal', label: 'Normal (în următoarele zile)' },
  { value: 'urgent', label: 'Urgent (în următoarele ore)' },
  { value: 'critical', label: 'Critic (imediat)' }
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
]

export default function BookingForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>()

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
              Formular de{' '}
              <span className="text-gradient">programare</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Completează formularul de mai jos pentru a programa o vizită. 
              Te vom contacta în cel mai scurt timp pentru a confirma programarea.
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Preferi să ne contactezi direct?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+40742878788"
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-semibold mb-2">Sună acum</h4>
                  <p className="text-white/80 mb-4">+40 742 878 788</p>
                  <p className="text-sm text-white/70">Disponibil 24/7 pentru urgențe</p>
                </a>
                
                <a
                  href="https://wa.me/40742878788?text=Bună! Vreau să programez o vizită la Trust Vet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <svg className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <h4 className="text-xl font-semibold mb-2">WhatsApp</h4>
                  <p className="text-white/80 mb-4">Mesaj rapid</p>
                  <p className="text-sm text-white/70">Răspundem în câteva minute</p>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">
                      Programarea a fost trimisă cu succes!
                    </h3>
                    <p className="text-green-700">
                      Te vom contacta în cel mai scurt timp pentru a confirma programarea.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">
                      A apărut o eroare!
                    </h3>
                    <p className="text-red-700">
                      Te rugăm să încerci din nou sau să ne suni direct la +40 742 878 788.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-dark mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  Informații personale
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Numele este obligatoriu' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Introdu numele tău"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: 'Telefonul este obligatoriu',
                        pattern: {
                          value: /^[0-9+\-\s()]+$/,
                          message: 'Format invalid pentru telefon'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+40 7XX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Format invalid pentru email'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="email@exemplu.ro"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Animal Information */}
              <div>
                <h3 className="text-xl font-semibold text-dark mb-6 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  Informații despre animal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specia animalului *
                    </label>
                    <select
                      {...register('animalSpecies', { required: 'Specia este obligatorie' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează specia</option>
                      {animalSpecies.map((species) => (
                        <option key={species} value={species}>{species}</option>
                      ))}
                    </select>
                    {errors.animalSpecies && (
                      <p className="text-red-600 text-sm mt-1">{errors.animalSpecies.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numele animalului
                    </label>
                    <input
                      type="text"
                      {...register('animalName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Numele animalului"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vârsta animalului
                    </label>
                    <input
                      type="text"
                      {...register('animalAge')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="ex: 2 ani, 6 luni"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipul serviciului *
                    </label>
                    <select
                      {...register('serviceType', { required: 'Tipul serviciului este obligatoriu' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează serviciul</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p className="text-red-600 text-sm mt-1">{errors.serviceType.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-xl font-semibold text-dark mb-6 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Detalii programare
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data preferată *
                    </label>
                    <input
                      type="date"
                      {...register('preferredDate', { required: 'Data este obligatorie' })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                    {errors.preferredDate && (
                      <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ora preferată
                    </label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează ora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nivelul de urgență *
                    </label>
                    <select
                      {...register('urgency', { required: 'Nivelul de urgență este obligatoriu' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selectează urgența</option>
                      {urgencyLevels.map((level) => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                    {errors.urgency && (
                      <p className="text-red-600 text-sm mt-1">{errors.urgency.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-semibold text-dark mb-6">
                  Informații suplimentare
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motivul vizitei *
                    </label>
                    <textarea
                      {...register('reason', { required: 'Motivul vizitei este obligatoriu' })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Descrie simptomele sau motivul pentru care programezi vizita..."
                    />
                    {errors.reason && (
                      <p className="text-red-600 text-sm mt-1">{errors.reason.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Informații suplimentare
                    </label>
                    <textarea
                      {...register('additionalInfo')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Orice alte informații relevante despre animal sau preferințe speciale..."
                    />
                  </div>
                </div>
              </div>

              {/* GDPR Consent */}
              <div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    {...register('gdprConsent', { required: 'Consimțământul GDPR este obligatoriu' })}
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label className="text-sm text-gray-600">
                    Consimt la prelucrarea datelor personale conform{' '}
                    <a href="/politica-confidentialitate" className="text-primary hover:underline">
                      Politicii de confidențialitate
                    </a>
                    . *
                  </label>
                </div>
                {errors.gdprConsent && (
                  <p className="text-red-600 text-sm mt-1">{errors.gdprConsent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Se trimite...' : 'Trimite programarea'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
