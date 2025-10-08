import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica cookie-uri - Trust Vet',
  description: 'Politica cookie-uri Trust Vet. Informații despre tipurile de cookie-uri folosite, scopul lor și cum le poți controla.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaCookiePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark mb-8">
            Politica cookie-uri
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">1. Ce sunt cookie-urile?</h2>
            <p className="text-gray-700 mb-6">
              Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul 
              mobil când vizitezi un website. Ele sunt utilizate pe scară largă pentru a face 
              website-urile să funcționeze mai eficient, precum și pentru a furniza informații 
              proprietarilor site-ului.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">2. Cum folosim cookie-urile</h2>
            <p className="text-gray-700 mb-6">
              Trust Vet folosește cookie-uri pentru a îmbunătăți experiența ta de navigare pe 
              website-ul nostru, pentru a analiza traficul și pentru a personaliza conținutul. 
              Cookie-urile ne ajută să înțelegem cum folosești website-ul nostru și să îl 
              îmbunătățim.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">3. Tipuri de cookie-uri</h2>
            
            <h3 className="text-xl font-semibold text-dark mb-3">3.1 Cookie-uri strict necesare</h3>
            <p className="text-gray-700 mb-4">
              Aceste cookie-uri sunt esențiale pentru funcționarea website-ului și nu pot fi 
              dezactivate. Ele includ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cookie-uri de sesiune pentru navigarea pe site</li>
              <li>Cookie-uri de securitate pentru protejarea datelor</li>
              <li>Cookie-uri pentru formularul de programări</li>
              <li>Cookie-uri pentru consimțământul GDPR</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">3.2 Cookie-uri de performanță</h3>
            <p className="text-gray-700 mb-4">
              Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interacționează cu 
              website-ul nostru prin colectarea și raportarea informațiilor anonime:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Google Analytics - pentru analiza traficului</li>
              <li>Cookie-uri pentru măsurarea performanței</li>
              <li>Cookie-uri pentru optimizarea conținutului</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">3.3 Cookie-uri de funcționalitate</h3>
            <p className="text-gray-700 mb-4">
              Aceste cookie-uri permit website-ului să-și amintească alegerile pe care le faci 
              și să furnizeze funcții îmbunătățite și mai personale:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Preferințele de limbă</li>
              <li>Setările de afișare</li>
              <li>Informațiile de autentificare</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">3.4 Cookie-uri de marketing</h3>
            <p className="text-gray-700 mb-4">
              Aceste cookie-uri sunt folosite pentru a urmări vizitatorii pe website-uri. 
              Scopul este de a afișa reclame care sunt relevante și atractive pentru 
              utilizatorul individual:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Cookie-uri de rețele sociale (Facebook, Instagram)</li>
              <li>Cookie-uri de publicitate țintită</li>
              <li>Cookie-uri pentru remarketing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">4. Cookie-uri terțe părți</h2>
            <p className="text-gray-700 mb-4">
              Website-ul nostru poate conține cookie-uri de la terțe părți pentru:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Google Maps</strong> - pentru afișarea hărții</li>
              <li><strong>Google Analytics</strong> - pentru analiza traficului</li>
              <li><strong>Rețele sociale</strong> - pentru butoanele de partajare</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">5. Durata de viață a cookie-urilor</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Cookie-uri de sesiune</strong> - se șterg când închizi browser-ul</li>
              <li><strong>Cookie-uri persistente</strong> - rămân pe dispozitiv pentru o perioadă stabilită</li>
              <li><strong>Cookie-uri de marketing</strong> - pot rămâne până la 2 ani</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">6. Cum să controlezi cookie-urile</h2>
            
            <h3 className="text-xl font-semibold text-dark mb-3">6.1 Prin browser</h3>
            <p className="text-gray-700 mb-4">
              Poți controla și șterge cookie-urile prin setările browser-ului tău:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Chrome:</strong> Setări &gt; Confidențialitate și securitate &gt; Cookie-uri</li>
              <li><strong>Firefox:</strong> Opțiuni &gt; Confidențialitate și securitate &gt; Cookie-uri</li>
              <li><strong>Safari:</strong> Preferințe &gt; Confidențialitate &gt; Cookie-uri</li>
              <li><strong>Edge:</strong> Setări &gt; Cookie-uri și permisiuni site</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">6.2 Prin banner-ul nostru</h3>
            <p className="text-gray-700 mb-6">
              Când vizitezi prima dată website-ul nostru, vei vedea un banner care îți permite 
              să alegi ce tipuri de cookie-uri să accepti. Poți modifica aceste setări oricând 
              prin butonul de setări din banner.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">7. Efectele dezactivării cookie-urilor</h2>
            <p className="text-gray-700 mb-6">
              Dacă dezactivezi cookie-urile, unele funcții ale website-ului nostru pot să nu 
              funcționeze corect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Formularul de programări poate să nu funcționeze</li>
              <li>Preferințele tale nu vor fi salvate</li>
              <li>Anumite secțiuni ale website-ului pot să nu se încarce</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">8. Cookie-uri pe dispozitive mobile</h2>
            <p className="text-gray-700 mb-6">
              Pe dispozitivele mobile, poți controla cookie-urile prin setările browser-ului 
              sau prin aplicațiile de gestionare a confidențialității. Procesul este similar 
              cu cel de pe desktop.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">9. Actualizări ale politicii</h2>
            <p className="text-gray-700 mb-6">
              Această politică de cookie-uri poate fi actualizată periodic pentru a reflecta 
              modificările în practicile noastre sau din alte motive operaționale, legale 
              sau de reglementare. Vă rugăm să revedeți această pagină pentru a fi la curent 
              cu orice modificări.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">10. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pentru întrebări despre această politică de cookie-uri:
            </p>
            <ul className="list-none text-gray-700 mb-6">
              <li><strong>Email:</strong> cabinet@trustvet.ro</li>
              <li><strong>Telefon:</strong> +40 742 878 788</li>
              <li><strong>Adresă:</strong> Str. Jiului, nr. 145, Sector 1, București</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
