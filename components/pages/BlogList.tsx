'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, BookOpen, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Vaccinările esențiale pentru câini și pisici: Ghid complet 2024',
    excerpt: 'Află care sunt vaccinările obligatorii și recomandate pentru a proteja animalul tău de boli grave. Ghid complet cu programul de vaccinare și sfaturi practice.',
    content: `
      <h2>De ce sunt importante vaccinările?</h2>
      <p>Vaccinările sunt fundamentale pentru protejarea animalelor de companie împotriva unor boli grave, unele dintre ele fatale. Ele funcționează prin stimularea sistemului imunitar să recunoască și să combată agenții patogeni.</p>
      
      <h2>Vaccinări obligatorii pentru câini</h2>
      <ul>
        <li><strong>DHPP</strong> - Protejează împotriva distemperului, hepatitei, parainfluenza și parvovirusului</li>
        <li><strong>Anti-rabică</strong> - Obligatorie anual, protejează împotriva rabiei</li>
        <li><strong>Bordetella</strong> - Previne tusea câinilor</li>
        <li><strong>Leptospiroză</strong> - Protejează împotriva unei boli bacteriene grave</li>
      </ul>
      
      <h2>Vaccinări pentru pisici</h2>
      <ul>
        <li><strong>FVRCP</strong> - Protejează împotriva rinotracheitei, calicivirusului și panleucopeniei</li>
        <li><strong>Anti-rabică</strong> - Obligatorie pentru pisicile care ies din casă</li>
        <li><strong>Leucemia felină</strong> - Recomandată pentru pisicile cu risc</li>
        <li><strong>Chlamydia</strong> - Previne infecțiile respiratorii</li>
      </ul>
      
      <h2>Programul de vaccinare</h2>
      <p>Prima vaccinare se face la 6-8 săptămâni, urmată de revaccinări la 10-12 săptămâni și 14-16 săptămâni. Vaccinările de întreținere se fac anual sau la 3 ani, în funcție de tipul de vaccin.</p>
      
      <h2>Reacții adverse și ce să faci</h2>
      <p>Majoritatea animalelor nu prezintă reacții adverse. Dacă observi letargie, febră sau pierderea apetitului mai mult de 24 ore, contactează medicul veterinar. Reacțiile alergice grave sunt rare, dar necesită atenție veterinară imediată.</p>
      
      <h2>Costuri și programare</h2>
      <p>Vaccinările sunt o investiție în sănătatea animalului tău. Contactează-ne pentru a programa o consultație și pentru a afla prețurile actuale. Oferim pachete complete de vaccinare la prețuri avantajoase.</p>
    `,
    author: 'Dr. Maria Popescu',
    date: '15 Martie 2024',
    readTime: '8 min',
    category: 'Prevenție',
    tags: ['vaccinări', 'prevenție', 'câini', 'pisici'],
    featured: true,
    image: '/blog/vaccinari.jpg'
  },
  {
    id: 2,
    title: 'Cum să îngrijești câinele după sterilizare: Ghid pas cu pas',
    excerpt: 'Ghid complet pentru îngrijirea post-operatorie a câinelui după intervenția de sterilizare. Tot ce trebuie să știi pentru o recuperare rapidă și sigură.',
    content: `
      <h2>Pregătirea pentru intervenție</h2>
      <p>Înainte de sterilizare, asigură-te că câinele este sănătos și că a fost examinat de medicul veterinar. Nu îl hrăni cu 8-12 ore înainte de intervenție pentru a preveni complicațiile anesteziei.</p>
      
      <h2>Primele 24 de ore după operație</h2>
      <p>Primele ore sunt cruciale. Câinele va fi somnoros din cauza anesteziei. Oferă-i un loc liniștit și confortabil pentru odihnă, ferit de zgomote și aglomerație. Limitează consumul de apă și hrană pentru primele ore.</p>
      
      <h2>Îngrijirea plăgii chirurgicale</h2>
      <ul>
        <li><strong>Verifică zilnic plaga</strong> - Caută semne de infecție (roșeață, umflare, scurgeri)</li>
        <li><strong>Păstrează zona curată și uscată</strong> - Evită băile timp de 10-14 zile</li>
        <li><strong>Folosește guler elizabetan</strong> - Pentru a preveni linsul plăgii</li>
        <li><strong>Administrează medicamentele prescrise</strong> - Antibiotice și analgezice la orele stabilite</li>
      </ul>
      
      <h2>Activitate și exerciții</h2>
      <p>Limitează activitatea fizică timp de 10-14 zile. Evită săriturile, alergatul și jocurile intense. Plimbările scurte în lesă sunt permise după 3-4 zile.</p>
      
      <h2>Alimentație după sterilizare</h2>
      <p>Reintroduce hrana treptat, începând cu porții mici. Animalele sterilizate au tendința de a se îngrășa, așa că discută cu medicul veterinar despre ajustarea dietei.</p>
      
      <h2>Când să contactezi medicul veterinar</h2>
      <ul>
        <li>Sângerare abundentă din plagă</li>
        <li>Vărsături sau diaree persistente</li>
        <li>Letargie extremă după 48 ore</li>
        <li>Refuz de a mânca mai mult de 24 ore</li>
        <li>Semne de durere severă</li>
      </ul>
      
      <h2>Control post-operator</h2>
      <p>Programează un control la 10-14 zile pentru îndepărtarea cusăturilor și evaluarea vindecării. Majoritatea câinilor se recuperează complet în 2-3 săptămâni.</p>
    `,
    author: 'Dr. Alexandru Ionescu',
    date: '10 Martie 2024',
    readTime: '6 min',
    category: 'Îngrijire',
    tags: ['sterilizare', 'post-operator', 'câini', 'îngrijire'],
    featured: false,
    image: '/blog/sterilizare.jpg'
  },
  {
    id: 3,
    title: 'Alimentația corectă pentru pisici adulte: Ghid nutrițional',
    excerpt: 'Descoperă principiile unei alimentații echilibrate pentru a menține sănătatea pisicii tale. Ghid complet cu recomandări practice și erori de evitat.',
    content: `
      <h2>Necesitățile nutriționale ale pisicilor</h2>
      <p>Pisicile sunt carnivore obligate, ceea ce înseamnă că au nevoie de proteine animale de calitate pentru a supraviețui și a prospera. Spre deosebire de câini, pisicile nu pot sintetiza unele aminoacizi esențiali și au nevoie de taurină din carne.</p>
      
      <h2>Componente esențiale ale dietei</h2>
      <ul>
        <li><strong>Proteine de calitate</strong> - Minim 26% pentru adulți, 30% pentru pui</li>
        <li><strong>Grăsimi</strong> - Sursa principală de energie, 9-15% din dietă</li>
        <li><strong>Apă</strong> - Esențială pentru funcția renală, pisicile beau puțin natural</li>
        <li><strong>Taurină</strong> - Aminoacid esențial, vital pentru inimă și ochi</li>
        <li><strong>Vitamine și minerale</strong> - Necesare pentru metabolism și imunitate</li>
      </ul>
      
      <h2>Tipuri de alimente</h2>
      <ul>
        <li><strong>Hrană uscată</strong> - Convenabilă, bună pentru dinți, dar hidratare redusă</li>
        <li><strong>Hrană umedă</strong> - Hidratare excelentă, mai palatabilă, dar mai scumpă</li>
        <li><strong>Dietă mixtă</strong> - Combinația optimă pentru majoritatea pisicilor</li>
        <li><strong>Hrană crudă</strong> - Opțiune naturală, dar necesită atenție la igienă</li>
      </ul>
      
      <h2>Frecvența și cantitatea hrănirii</h2>
      <p>Pisicile adulte ar trebui hrănite de 2-3 ori pe zi, cu porții controlate pentru a preveni obezitatea. Calculează necesarul caloric bazat pe greutate (40-50 cal/kg/zi pentru pisici cu activitate normală).</p>
      
      <h2>Erori comune de evitat</h2>
      <ul>
        <li>Hrănirea excesivă cu recompense</li>
        <li>Alimentație doar cu ton sau ficat</li>
        <li>Hrană pentru câini (nu conține taurină)</li>
        <li>Lapte de vacă (majoritatea pisicilor sunt intolerantela lactoză)</li>
        <li>Oase de pui sau pește (risc de înăbușire)</li>
      </ul>
      
      <h2>Semne de alimentație incorectă</h2>
      <p>Observă semne precum pierdere sau creștere în greutate, par mat, letargie, vărsături frecvente sau schimbări în comportament. Consultă medicul veterinar pentru ajustări ale dietei.</p>
    `,
    author: 'Dr. Elena Dumitrescu',
    date: '5 Martie 2024',
    readTime: '7 min',
    category: 'Nutriție',
    tags: ['nutriție', 'pisici', 'alimentație', 'sănătate'],
    featured: false,
    image: '/blog/nutritie.jpg'
  },
  {
    id: 4,
    title: 'Semnele de urgență la animale: Când să suni medicul veterinar',
    excerpt: 'Învață să recunoști semnele de urgență la animalele de companie și când este necesar să contactezi imediat medicul veterinar pentru a salva viața animalului.',
    content: `
      <h2>Semne de urgență care necesită atenție imediată</h2>
      <ul>
        <li><strong>Dificultăți de respirație</strong> - Respir rapid, superficial sau cu gura deschisă</li>
        <li><strong>Sângerare abundentă</strong> - Care nu se oprește în 5 minute</li>
        <li><strong>Pierderea conștiinței</strong> - Leșin sau colaps</li>
        <li><strong>Convulsii</strong> - Mai ales dacă durează peste 2-3 minute</li>
        <li><strong>Vărsături persistente</strong> - Mai mult de 3 episoade pe oră</li>
        <li><strong>Diaree cu sânge</strong> - Cantități mari sau culoare închisă</li>
        <li><strong>Umflare abdominală</strong> - Mai ales la rase mari de câini</li>
        <li><strong>Traumatisme</strong> - Accidente, căderi din înălțime</li>
      </ul>
      
      <h2>Simptome care necesită evaluare în 12-24 ore</h2>
      <ul>
        <li>Letargie și refuzul de a mânca</li>
        <li>Vărsături ocazionale fără alte simptome</li>
        <li>Schimbări în apetit sau comportament</li>
        <li>Dificultăți la urinare sau defecare</li>
        <li>Tuse persistentă</li>
        <li>Șchiopătat ușor</li>
      </ul>
      
      <h2>Ce să faci în caz de urgență</h2>
      <p><strong>1. Păstrează calmul</strong> - Animalele simt panica ta și pot deveni agitate<br>
      <strong>2. Evaluează situația</strong> - Verifică respir, puls și nivel de conștiență<br>
      <strong>3. Contactează imediat medicul veterinar</strong> - Sună la +40 742 878 788<br>
      <strong>4. Nu administra medicamente fără consultare</strong> - Unele pot agrava situația<br>
      <strong>5. Transportă animalul cu grijă</strong> - Folosește o pătură sau tavă rigidă<br>
      <strong>6. Menține temperatura corporală</strong> - Înfășoară în pături dacă e în șoc</p>
      
      <h2>Kituri de prim ajutor pentru animale</h2>
      <ul>
        <li>Bandaje și comprese sterile</li>
        <li>Antiseptic (betadină)</li>
        <li>Termometru digital</li>
        <li>Pensă și foarfecă</li>
        <li>Seringă fără ac pentru administrare medicamente</li>
        <li>Contacte veterinar (pe telefon)</li>
      </ul>
      
      <h2>Preveniți urgențele</h2>
      <p>Multe urgențe pot fi prevenite prin supraveghere atentă, mediu sigur, vaccinări la zi și controale regulate. Cunoaște-ți animalul și fii atent la schimbările comportamentale.</p>
    `,
    author: 'Dr. Maria Popescu',
    date: '1 Martie 2024',
    readTime: '5 min',
    category: 'Urgențe',
    tags: ['urgențe', 'semnale', 'sănătate', 'prevenție'],
    featured: false,
    image: '/blog/urgente.jpg'
  },
  {
    id: 5,
    title: 'Deparazitarea animalelor: Program complet pentru toate anotimpurile',
    excerpt: 'Ghid complet pentru deparazitarea animalelor de companie. Află când și cum să deparazitezi animalul tău pentru a-l proteja de paraziți interni și externi.',
    content: `
      <h2>De ce este importantă deparazitarea?</h2>
      <p>Paraziții pot afecta serios sănătatea animalului tău, ducând la probleme digestive, anemie, pierdere în greutate și chiar boli transmisibile la oameni (zoonoze). Deparazitarea regulată este esențială pentru protecție.</p>
      
      <h2>Tipuri de paraziți</h2>
      <p><strong>Paraziți interni:</strong></p>
      <ul>
        <li><strong>Viermi rotunzi (ascarizi)</strong> - Cel mai comun tip, afectează puii</li>
        <li><strong>Viermi plați (tenii)</strong> - Transmis prin purici sau carne crudă</li>
        <li><strong>Viermi cârlig</strong> - Parazit hematofag, poate cauza anemie</li>
        <li><strong>Viermi chicotați</strong> - Afectează colonul</li>
        <li><strong>Giardia</strong> - Parazit protozoar, cauză diaree</li>
      </ul>
      
      <p><strong>Paraziți externi:</strong></p>
      <ul>
        <li><strong>Purici</strong> - Cauză mâncărimi, dermatită alergică</li>
        <li><strong>Căpușe</strong> - Transmit boli grave (boala Lyme, babezioză)</li>
        <li><strong>Râie</strong> - Acarieni care afectează pielea</li>
        <li><strong>Păduchi</strong> - Mai rari, dar deranjați</li>
      </ul>
      
      <h2>Programul de deparazitare</h2>
      <ul>
        <li><strong>Pui (0-6 luni):</strong> De la 2 săptămâni, apoi lunar până la 6 luni</li>
        <li><strong>Adulți:</strong> De 3-4 ori pe an (la fiecare 3 luni)</li>
        <li><strong>Femele gestante:</strong> Cu 10 zile înainte de împerechere și înainte de naștere</li>
        <li><strong>Animale cu risc crescut:</strong> Lunar (vânători, cei din adăposturi)</li>
      </ul>
      
      <h2>Tipuri de antiparazitare</h2>
      <ul>
        <li><strong>Tablete</strong> - Eficiente, acțiune rapidă</li>
        <li><strong>Pipete spot-on</strong> - Ușor de administrat, protecție lunară</li>
        <li><strong>Zgărzi antiparazitare</strong> - Protecție pe termen lung (3-8 luni)</li>
        <li><strong>Spray-uri</strong> - Pentru aplicare locală</li>
      </ul>
      
      <h2>Semne de infestare cu paraziți</h2>
      <ul>
        <li>Diaree sau vărsături</li>
        <li>Pierdere în greutate</li>
        <li>Abdomen umflat (la pui)</li>
        <li>Mâncărimi excesive</li>
        <li>Prezență viermi în fecale</li>
        <li>Letargie și lipsă de apetit</li>
      </ul>
      
      <h2>Prevenție și igienă</h2>
      <p>Pe lângă deparazitare, menține curățenia mediului, spală frecvent păturile, aspiră regulat și elimină fecelele imediat. Evită zonele cu risc crescut de paraziți.</p>
    `,
    author: 'Dr. Alexandru Ionescu',
    date: '25 Februarie 2024',
    readTime: '6 min',
    category: 'Prevenție',
    tags: ['deparazitare', 'prevenție', 'paraziți', 'sănătate'],
    featured: false,
    image: '/blog/deparazitare.jpg'
  },
  {
    id: 6,
    title: 'Dentistria veterinară: Importanța îngrijirii dentare la animale',
    excerpt: 'Descoperă de ce îngrijirea dentară este crucială pentru sănătatea animalelor și cum să previ boli dentare prin practici simple de îngrijire.',
    content: `
      <h2>De ce este importantă îngrijirea dentară?</h2>
      <p>Bolile dentare sunt printre cele mai comune probleme de sănătate la animalele de companie. Peste 80% din câini și 70% din pisici peste 3 ani au o formă de boală dentară. Aceste probleme pot afecta serios sănătatea generală, ducând la infecții cardiace, renale și hepatice.</p>
      
      <h2>Problemele dentare comune</h2>
      <ul>
        <li><strong>Placa bacteriană</strong> - Strat de bacterii pe dinți</li>
        <li><strong>Tartru</strong> - Placa mineralizată, irită gingiile</li>
        <li><strong>Gingivită</strong> - Inflamația gingiilor, reversibilă</li>
        <li><strong>Parodontită</strong> - Infecția avansată, pierdere de os</li>
        <li><strong>Abcese dentare</strong> - Infecții dureroase</li>
        <li><strong>Dinți fracturați</strong> - Durere, infecție</li>
        <li><strong>Leziuni resorptive</strong> - Comune la pisici, foarte dureroase</li>
      </ul>
      
      <h2>Semne de probleme dentare</h2>
      <ul>
        <li><strong>Halena urât mirositoare</strong> - Primul semn evident</li>
        <li><strong>Pierderea apetitului</strong> - Durere la mestecat</li>
        <li><strong>Salivare excesivă</strong> - Uneori cu sânge</li>
        <li><strong>Schimbarea comportamentului</strong> - Irascibilitate, retragere</li>
        <li><strong>Dificultăți la mestecat</strong> - Scapă mâncare, mestecă pe o parte</li>
        <li><strong>Îmgingere facială</strong> - Abces dentar</li>
        <li><strong>Dinți mobili sau lipsă</strong> - Boală avansată</li>
      </ul>
      
      <h2>Îngrijirea dentară acasă</h2>
      <p><strong>Periajul dinților:</strong></p>
      <ul>
        <li>Folosește pastă de dinți pentru animale (nu pentru oameni!)</li>
        <li>Periază zilnic sau minim 3 ori/săptămână</li>
        <li>Începe treptat, obișnuiește animalul cu procesul</li>
        <li>Concentrează-te pe exteriorul dinților</li>
      </ul>
      
      <p><strong>Alte metode de îngrijire:</strong></p>
      <ul>
        <li>Jucării dentare - Curăță mecanic</li>
        <li>Recompense dentare - Speciale pentru igienă</li>
        <li>Hrană uscată specială - Textură care curăță</li>
        <li>Geluri și soluții - Ajută la reducerea plăcii</li>
      </ul>
      
      <h2>Detartraj profesional</h2>
      <p>Chiar cu îngrijire acasă, animalele au nevoie de detartraj profesional sub anestezie generală. Acest procedeu include:</p>
      <ul>
        <li>Îndepărtarea tartrului sub și deasupra gingiilor</li>
        <li>Polizare pentru netezirea suprafeței</li>
        <li>Tratarea problemelor identificate</li>
        <li>Extracții dentare dacă este necesar</li>
      </ul>
      
      <h2>Când să programezi detartraj</h2>
      <ul>
        <li>Anual pentru câinii rasa mică (mai predispuși)</li>
        <li>La 1-2 ani pentru rase mari</li>
        <li>Când observi tartru vizibil</li>
        <li>La recomandarea medicului veterinar</li>
      </ul>
      
      <h2>Beneficiile îngrijirii dentare regulate</h2>
      <ul>
        <li>Prevenirea durerii și infecțiilor</li>
        <li>Menținerea dinților pe toată viața</li>
        <li>Reducerea riscului de boli sistemice</li>
        <li>Economii la tratamente costisitoare</li>
        <li>Calitate superioară a vieții</li>
      </ul>
    `,
    author: 'Dr. Elena Dumitrescu',
    date: '20 Februarie 2024',
    readTime: '5 min',
    category: 'Prevenție',
    tags: ['dentistrie', 'prevenție', 'sănătate', 'îngrijire'],
    featured: false,
    image: '/blog/dentistrie.jpg'
  }
]

export default function BlogList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div ref={ref} className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                {/* Category and tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                {/* Read more button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="group/btn inline-flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  <span>Citește mai mult</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}