import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins",
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-outfit",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}

export const metadata: Metadata = {
  title: "Kaan Doğanay - Full Stack Developer",
  description: "Bilgisayar Mühendisi ve Full Stack Developer. React, Next.js, MongoDB, Firebase ve Python ile modern web uygulamaları geliştiriyorum.",
  keywords: ["Full Stack Developer", "UI/UX Designer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Portfolio Owner" }],
  creator: "Portfolio Owner",
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    title: 'Portfolio - Full Stack Developer & UI/UX Designer',
    description: 'Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiren Full Stack Developer portföyü.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Full Stack Developer & UI/UX Designer',
    description: 'Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiren Full Stack Developer portföyü.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
