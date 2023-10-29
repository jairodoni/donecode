import { Lexend } from 'next/font/google'

import { ProfileProvider } from '@/contexts/profile'
import '@/styles/global.scss'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lexend.className}>
      <body id="body">
        <ProfileProvider>{children}</ProfileProvider>
      </body>
    </html>
  )
}
