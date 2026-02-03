import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const lato = Lato({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Chronos - Luxury Time Travel Agency',
  description: 'Journey through history with unparalleled elegance and sophistication. Experience Ancient Rome, Victorian London, and Neo-Tokyo.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
