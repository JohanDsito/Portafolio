import "@/src/app/globals.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan Delgado - Portfolio',
  description: 'Portfolio profesional de Johan Delgado, Ingeniero de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-b from-teal-600 to-teal-700 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
