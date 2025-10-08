import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'phone', 'serviceType', 'animalSpecies', 'reason', 'preferredDate', 'urgency', 'gdprConsent']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Câmpul ${field} este obligatoriu` },
          { status: 400 }
        )
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'cabinet@trustvet.ro',
        pass: 'your-gmail-app-password-here', // Înlocuiește cu parola de aplicație Gmail
      },
    })

    // Email content
    const emailContent = `
      <h2>Nouă programare - Trust Vet</h2>
      
      <h3>Informații personale:</h3>
      <ul>
        <li><strong>Nume:</strong> ${data.name}</li>
        <li><strong>Telefon:</strong> ${data.phone}</li>
        <li><strong>Email:</strong> ${data.email || 'Nu a fost furnizat'}</li>
      </ul>
      
      <h3>Informații despre animal:</h3>
      <ul>
        <li><strong>Specie:</strong> ${data.animalSpecies}</li>
        <li><strong>Nume:</strong> ${data.animalName || 'Nu a fost furnizat'}</li>
        <li><strong>Vârstă:</strong> ${data.animalAge || 'Nu a fost furnizat'}</li>
      </ul>
      
      <h3>Detalii programare:</h3>
      <ul>
        <li><strong>Serviciu:</strong> ${data.serviceType}</li>
        <li><strong>Data preferată:</strong> ${data.preferredDate}</li>
        <li><strong>Ora preferată:</strong> ${data.preferredTime || 'Nu a fost specificată'}</li>
        <li><strong>Urgență:</strong> ${data.urgency}</li>
      </ul>
      
      <h3>Motivul vizitei:</h3>
      <p>${data.reason}</p>
      
      ${data.additionalInfo ? `
      <h3>Informații suplimentare:</h3>
      <p>${data.additionalInfo}</p>
      ` : ''}
      
      <hr>
      <p><em>Programarea a fost trimisă pe ${new Date().toLocaleString('ro-RO')}</em></p>
    `

    // Send email
    await transporter.sendMail({
      from: 'cabinet@trustvet.ro',
      to: 'cabinet@trustvet.ro',
      subject: `Nouă programare de la ${data.name} - ${data.serviceType}`,
      html: emailContent,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea programării' },
      { status: 500 }
    )
  }
}
