import './globals.css'
import Header from '@/components/Header'
import Image from 'next/image'

export const metadata = {
  title: 'Recipe Finder',
  description: 'Created By Eshaan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      </body>
    </html>
  )
}
