import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politica de confidențialitate - Trust Vet',
  description: 'Politica de confidențialitate Trust Vet. Informații despre prelucrarea datelor personale, drepturile tale și cum protejăm informațiile tale.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark mb-8">
            Politica de confidențialitate
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">1. Introducere</h2>
            <p className="text-gray-700 mb-6">
              Trust Vet („noi", „al nostru", „cabinetul") se angajează să protejeze confidențialitatea 
              și securitatea informațiilor personale ale clienților noștri. Această Politică de 
              confidențialitate descrie cum colectăm, utilizăm, stocăm și protejăm informațiile tale 
              personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">2. Informații pe care le colectăm</h2>
            <h3 className="text-xl font-semibold text-dark mb-3">2.1 Informații personale</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Adresă de domiciliu</li>
              <li>Date de identificare (CNP, seria și numărul de buletin)</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">2.2 Informații despre animale</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Numele animalului</li>
              <li>Specia, rasa și vârsta</li>
              <li>Istoricul medical</li>
              <li>Informații despre tratamente</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">3. Cum utilizăm informațiile</h2>
            <p className="text-gray-700 mb-4">
              Utilizăm informațiile tale personale pentru:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Prestarea serviciilor veterinare</li>
              <li>Programarea consultațiilor și tratamentelor</li>
              <li>Comunicarea cu tine despre sănătatea animalului</li>
              <li>Îndeplinirea obligațiilor legale</li>
              <li>Îmbunătățirea serviciilor noastre</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">4. Baza legală pentru prelucrare</h2>
            <p className="text-gray-700 mb-6">
              Prelucrăm datele tale personale pe baza:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Consimțământul</strong> - pentru comunicări de marketing</li>
              <li><strong>Execuția contractului</strong> - pentru prestarea serviciilor veterinare</li>
              <li><strong>Obligația legală</strong> - pentru raportarea la autorități</li>
              <li><strong>Interesul legitim</strong> - pentru îmbunătățirea serviciilor</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">5. Partajarea informațiilor</h2>
            <p className="text-gray-700 mb-4">
              Nu vindem, nu închiriem și nu partajăm informațiile tale personale cu terțe părți, 
              cu excepția cazurilor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Când este necesar pentru prestarea serviciilor (ex: laboratoare de analize)</li>
              <li>Când este impus de lege</li>
              <li>Când ai dat consimțământul explicit</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">6. Securitatea datelor</h2>
            <p className="text-gray-700 mb-6">
              Implementăm măsuri de securitate tehnice și organizaționale pentru a proteja 
              informațiile tale personale împotriva accesului neautorizat, modificării, 
              divulgării sau distrugerii.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">7. Drepturile tale</h2>
            <p className="text-gray-700 mb-4">
              Conform GDPR, ai următoarele drepturi:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Dreptul de acces</strong> - poți cere informații despre datele tale</li>
              <li><strong>Dreptul de rectificare</strong> - poți corecta datele inexacte</li>
              <li><strong>Dreptul de ștergere</strong> - poți cere ștergerea datelor</li>
              <li><strong>Dreptul de portabilitate</strong> - poți primi datele într-un format structurat</li>
              <li><strong>Dreptul de opoziție</strong> - poți te opune prelucrării</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">8. Păstrarea datelor</h2>
            <p className="text-gray-700 mb-6">
              Păstrăm datele tale personale doar atât timp cât este necesar pentru îndeplinirea 
              scopurilor pentru care au fost colectate sau conform obligațiilor legale.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">9. Cookie-uri</h2>
            <p className="text-gray-700 mb-6">
              Website-ul nostru folosește cookie-uri pentru a îmbunătăți experiența ta de navigare. 
              Poți controla setările cookie-urilor prin browser-ul tău.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">10. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pentru întrebări despre această Politică de confidențialitate sau pentru a-ți exercita 
              drepturile, ne poți contacta la:
            </p>
            <ul className="list-none text-gray-700 mb-6">
              <li><strong>Email:</strong> cabinet@trustvet.ro</li>
              <li><strong>Telefon:</strong> +40 742 878 788</li>
              <li><strong>Adresă:</strong> Str. Jiului, nr. 145, Sector 1, București</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">11. Modificări</h2>
            <p className="text-gray-700 mb-6">
              Ne rezervăm dreptul de a modifica această Politică de confidențialitate. 
              Orice modificări vor fi publicate pe această pagină cu data actualizării.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
