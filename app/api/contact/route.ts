import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message', 'gdprConsent']
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
      <h2>Mesaj nou de la ${data.name}</h2>
      
      <h3>Informații de contact:</h3>
      <ul>
        <li><strong>Nume:</strong> ${data.name}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Telefon:</strong> ${data.phone || 'Nu a fost furnizat'}</li>
        <li><strong>Subiect:</strong> ${data.subject}</li>
      </ul>
      
      <h3>Mesaj:</h3>
      <p>${data.message}</p>
      
      <hr>
      <p><em>Mesajul a fost trimis pe ${new Date().toLocaleString('ro-RO')}</em></p>
    `

    // Send email
    await transporter.sendMail({
      from: 'cabinet@trustvet.ro',
      to: 'cabinet@trustvet.ro',
      subject: `Mesaj nou de la ${data.name} - ${data.subject}`,
      html: emailContent,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error sending contact email:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului' },
      { status: 500 }
    )
  }
}
