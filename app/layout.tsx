import type { Metadata } from 'next'
import { Zen_Dots, Geist_Mono } from 'next/font/google'
import '@unocss/reset/tailwind.css'
import './globals.css'

const zenDots = Zen_Dots({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-dots',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Alex Becerra | Developer Portfolio',
  description: 'Modern developer portfolio of Alex Becerra, specializing in software engineering and automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${zenDots.variable} ${geistMono.variable}`}>
      <body className="bg-deepBlack text-white min-h-screen selection:bg-neonOrange selection:text-black font-sans">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  )
}
