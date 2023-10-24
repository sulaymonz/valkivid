import './globals.css'
import type { Metadata } from 'next'
import './components/Navbar'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Valkivid',
  description: "Youtuber's website"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
