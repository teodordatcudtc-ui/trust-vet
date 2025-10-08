'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

const blogPosts = [
  {
    title: 'Vaccinările esențiale pentru câini și pisici',
    excerpt: 'Află care sunt vaccinările obligatorii și recomandate pentru a proteja animalul tău de boli grave.',
    date: '15 Martie 2024',
    readTime: '5 min',
    category: 'Prevenție',
    href: '/blog/vaccinari-esențiale',
    image: '/blog/vaccinari.jpg'
  },
  {
    title: 'Cum să îngrijești câinele după sterilizare',
    excerpt: 'Ghid complet pentru îngrijirea post-operatorie a câinelui după intervenția de sterilizare.',
    date: '10 Martie 2024',
    readTime: '7 min',
    category: 'Îngrijire',
    href: '/blog/ingrijire-post-sterilizare',
    image: '/blog/sterilizare.jpg'
  },
  {
    title: 'Alimentația corectă pentru pisici adulte',
    excerpt: 'Descoperă principiile unei alimentații echilibrate pentru a menține sănătatea pisicii tale.',
    date: '5 Martie 2024',
    readTime: '6 min',
    category: 'Nutriție',
    href: '/blog/alimentatie-pisici',
    image: '/blog/nutritie.jpg'
  }
]

export default function BlogTeaserSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            Ghiduri și{' '}
            <span className="text-gradient">sfaturi utile</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă articolele noastre despre îngrijirea animalelor, 
            prevenția bolilor și sfaturi practice pentru proprietari.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={post.href}>
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/50" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                        <span>Citește</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary">
            Vezi toate articolele
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
