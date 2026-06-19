import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Arena Rio Verde / Pirassununga/SP',

  description:
    'Arena Rio Verde Beach Sports — Futevôlei, Beach Tennis e Beach Volley em Pirassununga/SP. Estrutura completa com 2 quadras de areia, bar, churrasqueira e muito mais.',

  keywords: [
    'beach sports',
    'futevôlei',
    'beach tennis',
    'beach volley',
    'Pirassununga',
    'arena esportiva',
  ],

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'Arena Rio Verde Beach Sports',

    description:
      'Futevôlei, Beach Tennis e Beach Volley em Pirassununga/SP.',

    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Arena Rio Verde',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-arena-bg scroll-smooth">
      <body className={`${barlowCondensed.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
