import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { CartProvider } from '@/context/CartContext'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bliss Bay - Fresh Fruit Juices',
  description: 'Delicious and nutritious fresh fruit juices delivered to your doorstep.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
            {children}
          </main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
} 