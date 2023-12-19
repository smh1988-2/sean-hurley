import type { Metadata } from 'next'
import './globals.css'

import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Sean Hurley | Software Engineer',
  description: 'I am a software engineer who builds fullstack web apps.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
