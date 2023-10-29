import { Lexend, Inter, Ubuntu } from 'next/font/google'

import { ProfileProvider } from '@/contexts/profile'
import '@/styles/global.scss'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
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
        <ProfileProvider>{children}</ProfileProvider>
      </body>
    </html>
  )
}
