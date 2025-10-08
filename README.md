# Trust Vet - Website Premium

Website modern și complet funcțional pentru cabinetul veterinar Trust Vet, construit cu Next.js 14, TypeScript și Tailwind CSS.

## 🚀 Caracteristici

- **Design premium** cu animații cinematice și micro-interacțiuni elegante
- **Responsive design** optimizat pentru toate dispozitivele
- **SEO optimizat** cu meta tags, schema.org și sitemap
- **Formulare funcționale** cu validare și trimitere email
- **Paginile complete**: Home, Servicii, Echipă, Tarife, Programări, Galerie, Blog, Contact
- **Paginile legale**: Politica de confidențialitate, Termeni și condiții, Politica cookie-uri
- **Accesibilitate** conform WCAG AA
- **Performanță optimizată** cu lazy loading și optimizări

## 🛠️ Tehnologii

- **Framework**: Next.js 14 cu App Router
- **Limbaj**: TypeScript
- **Styling**: Tailwind CSS
- **Animații**: Framer Motion
- **Formulare**: React Hook Form
- **Email**: Nodemailer
- **Iconițe**: Lucide React
- **SEO**: Next SEO, Sitemap, Robots.txt

## 📦 Instalare

### 1. Clonează repository-ul
```bash
git clone <repository-url>
cd trust-vet
```

### 2. Instalează dependențele
```bash
npm install
```

### 3. Configurează email-ul
Pentru ca formularele să funcționeze, trebuie să configurezi email-ul în fișierele API:

1. **Deschide** `app/api/booking/route.ts` și `app/api/contact/route.ts`
2. **Înlocuiește** `'your-gmail-app-password-here'` cu parola de aplicație Gmail
3. **Pentru Gmail**: Activează autentificarea în 2 pași și generează o parolă de aplicație

### 4. Pornește serverul de dezvoltare
```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser pentru a vedea website-ul.

## 🏗️ Build pentru producție

### 1. Generează build-ul de producție
```bash
npm run build
```

### 2. Pornește serverul de producție
```bash
npm start
```

## 📧 Configurarea email-ului

### Gmail (Recomandat)
1. Activează autentificarea în 2 pași pentru contul Gmail
2. Generează o parolă de aplicație:
   - Mergi la Google Account > Security > 2-Step Verification > App passwords
   - Selectează "Mail" și generează parola
3. Înlocuiește `'your-gmail-app-password-here'` în fișierele API cu parola generată

### Alte provideri SMTP
Pentru alte provideri, modifică configurația în `app/api/booking/route.ts` și `app/api/contact/route.ts`:

```typescript
// Pentru Outlook/Hotmail
host: 'smtp-mail.outlook.com',
port: 587,

// Pentru Yahoo
host: 'smtp.mail.yahoo.com',
port: 587,
```

## 🚀 Deploy

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Deploy automat la fiecare push
3. Nu sunt necesare variabile de mediu - totul este configurat direct în cod

### Netlify
1. Conectează repository-ul la Netlify
2. Setează build command: `npm run build`
3. Setează publish directory: `.next`
4. Deploy automat - nu sunt necesare variabile de mediu

### VPS/Server propriu
1. Clonează codul pe server
2. Instalează Node.js și npm
3. Rulează `npm install`
4. Rulează `npm run build`
5. Configurează un reverse proxy (Nginx) pentru Next.js

## 📁 Structura proiectului

```
trust-vet/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API routes
│   ├── blog/              # Pagina blog
│   ├── contact/           # Pagina contact
│   ├── echipa/            # Pagina echipă
│   ├── galerie/           # Pagina galerie
│   ├── programari/        # Pagina programări
│   ├── servicii/          # Pagina servicii
│   ├── tarife/            # Pagina tarife
│   ├── politica-confidentialitate/
│   ├── termeni-conditii/
│   ├── politica-cookie/
│   ├── globals.css        # Stiluri globale
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   ├── manifest.ts        # PWA manifest
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Componente React
│   ├── pages/            # Componente pentru pagini
│   └── sections/         # Secțiuni pentru homepage
├── public/               # Fișiere statice
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Personalizare

### Culori
Modifică culorile în `tailwind.config.ts`:
```typescript
colors: {
  primary: '#7e1e99',    // Violet principal
  dark: '#010101',       // Negru
  white: '#ffffff',      // Alb
}
```

### Conținut
- **Text**: Modifică textele în componentele din `components/`
- **Imagini**: Adaugă imagini în `public/` și actualizează referințele
- **Servicii**: Modifică lista de servicii în `components/pages/ServicesList.tsx`
- **Echipă**: Actualizează informațiile echipei în `components/pages/TeamMembers.tsx`

## 🔧 Scripturi disponibile

```bash
npm run dev          # Pornește serverul de dezvoltare
npm run build        # Generează build-ul de producție
npm run start        # Pornește serverul de producție
npm run lint         # Rulează ESLint
npm run type-check   # Verifică tipurile TypeScript
```

## 📱 PWA Features

Website-ul include funcționalități PWA:
- Manifest pentru instalare pe dispozitive mobile
- Service worker pentru cache
- Iconițe pentru toate dimensiunile

## 🔍 SEO Features

- Meta tags complete pentru toate paginile
- Schema.org markup pentru cabinet veterinar
- Sitemap XML automat
- Robots.txt configurat
- Open Graph și Twitter Cards
- Canonical URLs

## 🛡️ Securitate

- Validare completă a formularelor
- Sanitizarea datelor de intrare
- Headers de securitate configurate
- Protecție CSRF
- Validare GDPR pentru formulare

## 📞 Suport

Pentru întrebări sau probleme:
- **Email**: cabinet@trustvet.ro
- **Telefon**: +40 742 878 788
- **Adresă**: Str. Jiului, nr. 145, Sector 1, București

## 📄 Licență

Acest proiect este proprietatea Trust Vet și este destinat utilizării exclusive a cabinetului veterinar.

---

**Trust Vet** - Cabinet Veterinar Premium București
*HEALTH, BEAUTY & BEYOND*
