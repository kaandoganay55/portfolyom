import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  title: "Portfolio - Full Stack Developer & UI/UX Designer",
  description: "Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiren Full Stack Developer portföyü. React, Next.js, TypeScript uzmanı.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
