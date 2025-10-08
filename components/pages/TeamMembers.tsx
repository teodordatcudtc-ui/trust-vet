'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Stethoscope, 
  Heart, 
  Award, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Clock
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Maria Popescu',
    role: 'Medic Veterinar Principal',
    specialization: 'Medicină Internă & Chirurgie',
    experience: '15 ani',
    education: 'Universitatea de Medicină Veterinară București',
    certifications: ['Specializare Chirurgie', 'Certificat Ecografie', 'Urgențe Veterinare'],
    description: 'Cu peste 15 ani de experiență în medicina veterinară, Dr. Popescu este specializată în chirurgie și medicină internă. A lucrat în clinici de renume și a participat la numeroase conferințe internaționale.',
    image: '/team/maria-popescu.jpg',
    phone: '+40 742 878 788',
    email: 'maria.popescu@trustvet.ro',
    schedule: 'L-V: 08:00-18:00, S: 09:00-15:00'
  },
  {
    name: 'Dr. Alexandru Ionescu',
    role: 'Medic Veterinar',
    specialization: 'Dermatologie & Oftalmologie',
    experience: '12 ani',
    education: 'Universitatea de Medicină Veterinară Cluj-Napoca',
    certifications: ['Specializare Dermatologie', 'Oftalmologie Veterinară', 'Alergologie'],
    description: 'Dr. Ionescu este specialist în dermatologie și oftalmologie veterinară. A dezvoltat tehnici inovatoare pentru tratarea problemelor de piele și ochi la animalele de companie.',
    image: '/team/alexandru-ionescu.jpg',
    phone: '+40 742 878 789',
    email: 'alexandru.ionescu@trustvet.ro',
    schedule: 'L-V: 09:00-19:00, S: 10:00-16:00'
  },
  {
    name: 'Dr. Elena Dumitrescu',
    role: 'Medic Veterinar',
    specialization: 'Cardiologie & Ecografie',
    experience: '10 ani',
    education: 'Universitatea de Medicină Veterinară Iași',
    certifications: ['Cardiologie Veterinară', 'Ecografie Avansată', 'Anestezie'],
    description: 'Specialistă în cardiologie veterinară și ecografie, Dr. Dumitrescu folosește tehnologia cea mai avansată pentru diagnosticul și tratarea problemelor cardiace la animale.',
    image: '/team/elena-dumitrescu.jpg',
    phone: '+40 742 878 790',
    email: 'elena.dumitrescu@trustvet.ro',
    schedule: 'L-V: 08:00-17:00, S: 09:00-14:00'
  },
  {
    name: 'Ana Constantinescu',
    role: 'Asistent Veterinar Senior',
    specialization: 'Îngrijire & Monitorizare',
    experience: '8 ani',
    education: 'Școala Postliceală Sanitară',
    certifications: ['Asistență Veterinară', 'Prim Ajutor', 'Anestezie'],
    description: 'Ana este asistenta noastră senior cu experiență vastă în îngrijirea animalelor și asistența în proceduri medicale. Este cunoscută pentru empatia și profesionalismul său.',
    image: '/team/ana-constantinescu.jpg',
    phone: '+40 742 878 791',
    email: 'ana.constantinescu@trustvet.ro',
    schedule: 'L-V: 08:00-20:00, S: 09:00-18:00'
  },
  {
    name: 'Mihai Radu',
    role: 'Asistent Veterinar',
    specialization: 'Laborator & Radiologie',
    experience: '5 ani',
    education: 'Școala Postliceală Sanitară',
    certifications: ['Tehnician Laborator', 'Radiologie Veterinară', 'Analize Medicale'],
    description: 'Mihai este responsabil cu analizele de laborator și radiologia veterinară. Are experiență în interpretarea rezultatelor și asistența în investigații complexe.',
    image: '/team/mihai-radu.jpg',
    phone: '+40 742 878 792',
    email: 'mihai.radu@trustvet.ro',
    schedule: 'L-V: 09:00-18:00, S: 10:00-16:00'
  },
  {
    name: 'Cristina Marinescu',
    role: 'Recepționer & Coordonator',
    specialization: 'Administrare & Programări',
    experience: '6 ani',
    education: 'Facultatea de Administrație',
    certifications: ['Administrare Medicală', 'Comunicare', 'Servicii Clienți'],
    description: 'Cristina este prima persoană cu care vei interacționa la Trust Vet. Se ocupă de programări, administrarea dosarelor și asigură experiența optimă pentru clienți.',
    image: '/team/cristina-marinescu.jpg',
    phone: '+40 742 878 793',
    email: 'cristina.marinescu@trustvet.ro',
    schedule: 'L-V: 08:00-20:00, S: 09:00-18:00'
  }
]

export default function TeamMembers() {
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
            Cunoaște{' '}
            <span className="text-gradient">echipa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O echipă de profesioniști dedicați, cu experiență vastă și pasiune 
            pentru îngrijirea animalelor de companie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                {/* Profile image placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-dark mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{member.experience} experiență</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{member.schedule}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark mb-2">Certificări:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <span 
                          key={certIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-primary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-primary transition-colors">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Vrei să lucrezi cu echipa noastră?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Căutăm mereu profesioniști dedicați pentru a ne extinde echipa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Aplică acum
              </Link>
              <Link href="/programari" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors">
                Programează vizită
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
