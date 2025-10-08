import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și condiții - Trust Vet',
  description: 'Termeni și condiții de utilizare a serviciilor Trust Vet. Condițiile de prestare a serviciilor veterinare și drepturile clienților.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermeniConditiiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-dark mb-8">
            Termeni și condiții
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">1. Informații generale</h2>
            <p className="text-gray-700 mb-6">
              Acești termeni și condiții reglementează utilizarea serviciilor oferite de Trust Vet, 
              cabinet veterinar cu sediul în București, România. Prin utilizarea serviciilor noastre, 
              accepti acești termeni în întregime.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">2. Servicii oferite</h2>
            <p className="text-gray-700 mb-4">
              Trust Vet oferă următoarele servicii veterinare:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Consultații veterinare generale și specializate</li>
              <li>Vaccinări și deparazitări</li>
              <li>Intervenții chirurgicale</li>
              <li>Analize medicale și investigații</li>
              <li>Servicii de urgență</li>
              <li>Consultanță nutrițională</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">3. Programări și anulări</h2>
            <h3 className="text-xl font-semibold text-dark mb-3">3.1 Programări</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Programările se fac prin telefon, email sau formularul online</li>
              <li>Confirmarea programării se face în cel mai scurt timp</li>
              <li>Pentru urgențe, contactați-ne imediat la +40 742 878 788</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark mb-3">3.2 Anulări</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Anulările trebuie făcute cu cel puțin 24 de ore înainte</li>
              <li>Pentru anulări de urgență, contactați-ne cât mai repede</li>
              <li>Anulările repetate pot duce la restricții în programare</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">4. Obligații ale clienților</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Prezentarea animalului la programarea stabilită</li>
              <li>Informarea corectă despre starea de sănătate a animalului</li>
              <li>Respectarea recomandărilor medicale</li>
              <li>Plata serviciilor conform tarifelor stabilite</li>
              <li>Comportament respectuos față de personalul medical</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">5. Obligații ale cabinetului</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Prestarea serviciilor cu profesionalism și empatie</li>
              <li>Respectarea programărilor stabilite</li>
              <li>Confidențialitatea informațiilor medicale</li>
              <li>Informarea corectă despre tratamente și costuri</li>
              <li>Disponibilitatea pentru urgențe</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">6. Tarife și plăți</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Tarifele sunt afișate public și pot fi actualizate</li>
              <li>Plata se face la momentul prestării serviciului</li>
              <li>Acceptăm plata în numerar și cu cardul</li>
              <li>Pentru intervenții costisitoare, oferim posibilitatea de plată în rate</li>
              <li>Pentru urgențe în afara programului, se aplică un supliment</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">7. Responsabilitate și limitări</h2>
            <h3 className="text-xl font-semibold text-dark mb-3">7.1 Responsabilitatea cabinetului</h3>
            <p className="text-gray-700 mb-4">
              Trust Vet se angajează să presteze servicii de calitate, dar nu poate garanta 
              rezultatul tratamentelor din cauza complexității medicinei veterinare.
            </p>

            <h3 className="text-xl font-semibold text-dark mb-3">7.2 Limitări de responsabilitate</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nu suntem responsabili pentru deteriorări cauzate de neconformarea cu recomandările</li>
              <li>Nu garantăm rezultatul tratamentelor în toate cazurile</li>
              <li>Responsabilitatea este limitată la valoarea serviciului prestat</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">8. Confidențialitate</h2>
            <p className="text-gray-700 mb-6">
              Toate informațiile despre animale și proprietari sunt confidențiale și vor fi 
              protejate conform legii. Informațiile vor fi partajate doar cu consimțământul 
              explicit sau când este impus de lege.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">9. Reclamatii</h2>
            <p className="text-gray-700 mb-4">
              Pentru reclamații, vă rugăm să ne contactați la:
            </p>
            <ul className="list-none text-gray-700 mb-6">
              <li><strong>Email:</strong> cabinet@trustvet.ro</li>
              <li><strong>Telefon:</strong> +40 742 878 788</li>
              <li><strong>Adresă:</strong> Str. Jiului, nr. 145, Sector 1, București</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dark mb-4">10. Forța majoră</h2>
            <p className="text-gray-700 mb-6">
              Nu vom fi responsabili pentru întârzieri sau neîndeplinirea obligațiilor din 
              cauza unor evenimente de forță majoră (cutremure, inundații, pandemii, etc.).
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">11. Legea aplicabilă</h2>
            <p className="text-gray-700 mb-6">
              Acești termeni sunt guvernați de legea română. Orice dispute vor fi soluționate 
              de instanțele competente din România.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">12. Modificări</h2>
            <p className="text-gray-700 mb-6">
              Ne rezervăm dreptul de a modifica acești termeni și condiții. Modificările 
              vor fi publicate pe website și vor intra în vigoare imediat.
            </p>

            <h2 className="text-2xl font-semibold text-dark mb-4">13. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pentru întrebări despre acești termeni și condiții:
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
