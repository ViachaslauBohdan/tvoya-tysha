import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'TVOYA TYSHA | Ручні футболки із сузірʼями для українців',
  description: 'Унікальні футболки ручної роботи із зодіакальними сузірʼями, перлами та вишивкою. Колекція для українців в Україні та в Польщі.',
  keywords: [
    'TVOYA TYSHA',
    'астрологічні футболки',
    'футболки зодіак',
    'одяг із сузірʼями',
    'ручна робота',
    'вишивка перлами',
    'мода зодіаку',
    'знаки зодіаку',
    'унікальні футболки',
    'український бренд одягу',
    'футболки для українців',
    'українці в Польщі',
    'українці у Польщі',
    'українці в Україні',
    'astrological t-shirts for Ukrainians',
    'zodiac t-shirts Ukraine',
    'zodiac t-shirts Poland'
  ],
  generator: 'v0.app',
  category: 'fashion',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'TVOYA TYSHA | Ручні астрологічні футболки для українців',
    description: 'Колекція футболок із сузірʼями зодіаку для українців в Україні та Польщі.',
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: ['pl_PL'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TVOYA TYSHA | Астрологічні футболки для українців',
    description: 'Ручні футболки із сузірʼями зодіаку для українців в Україні та Польщі.',
  },
  alternates: {
    languages: {
      'uk-UA': '/',
      'pl-PL': '/',
    },
  },
  other: {
    'geo.region': 'UA',
    'geo.placename': 'Ukraine; Poland',
    'distribution': 'global',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7B1331',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
