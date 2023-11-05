import { Lexend, Inter, Ubuntu } from 'next/font/google'

import '@/styles/global.scss'
import StyledRegistry from './registry'
import { ProfileProvider } from '@/contexts/profile'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Lexend:wght@300;400;500;600;700;900&family=Montserrat:wght@400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        id="body"
        className={`${lexend.className}  ${inter.className} ${ubuntu.className}`}
      >
        <ProfileProvider>{children}</ProfileProvider>
      </body>
    </html>
  )
}
