import { ReactNode } from 'react'
import { Lexend, Inter, Ubuntu } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { ProfileProvider } from '@/contexts/profile'

import '@/styles/global.scss'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--lexend',
  weight: ['300', '400', '500', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--ubuntu',
  weight: ['300', '400', '500', '700'],
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700;900&family=Montserrat:wght@400;500;600;700&family=Ubuntu:wght@300;400;500;700&family=Tomorrow:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="body" className={lexend.className}>
        <div className={inter.className}>
          <div className={ubuntu.className}>
            <ProfileProvider>
              {children}
              <Analytics />
            </ProfileProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
