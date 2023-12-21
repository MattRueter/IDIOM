import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import backgroundImage from '../../../public/background.svg'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exercises',
  description: 'Exercise page of app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
          {children}
        </main>
      </body>
    </html>
  )
}
