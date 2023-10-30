'use client'
import { Lexend, Inter, Ubuntu } from 'next/font/google'

import '@/styles/global.scss'
import StyledRegistry from './registry'

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
      <body
        id="body"
        className={`${lexend.className}  ${inter.className} ${ubuntu.className}`}
      >
        <StyledRegistry>{children}</StyledRegistry>
      </body>
    </html>
  )
}
