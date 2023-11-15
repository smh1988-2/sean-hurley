import type { Metadata } from 'next'
import './globals.css'


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
      <body>{children}</body>
    </html>
  )
}
