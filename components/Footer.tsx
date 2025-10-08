import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Echipă', href: '/echipa' },
    { name: 'Tarife', href: '/tarife' },
    { name: 'Programări', href: '/programari' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Consultații', href: '/servicii#consultatii' },
    { name: 'Vaccinări', href: '/servicii#vaccinari' },
    { name: 'Chirurgie', href: '/servicii#chirurgie' },
    { name: 'Urgențe', href: '/servicii#urgente' },
    { name: 'Analize', href: '/servicii#analize' },
    { name: 'Ecografie', href: '/servicii#ecografie' },
  ],
  legal: [
    { name: 'Politica de confidențialitate', href: '/politica-confidentialitate' },
    { name: 'Termeni și condiții', href: '/termeni-conditii' },
    { name: 'Politica cookie-uri', href: '/politica-cookie' },
    { name: 'GDPR', href: '/gdpr' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold">Trust Vet</h3>
                  <p className="text-gray-300 text-sm">Cabinet Veterinar Premium</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Oferim servicii veterinare de calitate superioară pentru animalele de companie, 
                cu echipă empatică și aparatură modernă.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={item.name}
                  >
                    <item.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Str. Jiului, nr. 145<br />
                      Sector 1, București, România
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+40742878788" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +40 742 878 788
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:cabinet@trustvet.ro" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    cabinet@trustvet.ro
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>L-V: 08:00-20:00</p>
                    <p>S: 09:00-18:00</p>
                    <p>D: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Servicii</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Informații legale</h4>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Trust Vet. Toate drepturile rezervate.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <Link href="/politica-confidentialitate" className="hover:text-white transition-colors">
                Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="hover:text-white transition-colors">
                Termeni
              </Link>
              <Link href="/gdpr" className="hover:text-white transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
