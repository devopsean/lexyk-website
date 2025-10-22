import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lexykapp.com"),
  title: {
    default: "Lexykapp - Vocabulary Learning App | Learn French, Spanish & English",
    template: "%s | Lexykapp"
  },
  description: "Boost your vocabulary with Lexykapp! Learn French, Spanish, and English words through personalized flashcards. Track your progress and master new words that matter to you.",
  keywords: ["vocabulary builder", "language learning", "learn French", "learn Spanish", "learn English", "flashcards app", "vocabulary app", "language learning app", "French vocabulary", "Spanish vocabulary", "English vocabulary", "word learning", "vocabulary practice"],
  authors: [{ name: "Lexykapp Team" }],
  creator: "Lexykapp",
  publisher: "Lexykapp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lexykapp.com",
    siteName: "Lexykapp",
    title: "Lexykapp - Vocabulary Learning App | Learn French, Spanish & English",
    description: "Boost your vocabulary with Lexykapp! Learn French, Spanish, and English words through personalized flashcards. Track your progress and master new words.",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "Lexykapp - Vocabulary Learning App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexykapp - Vocabulary Learning App",
    description: "Boost your vocabulary! Learn French, Spanish, and English words through personalized flashcards.",
    images: ["/Logo.svg"],
    creator: "@lexykapp",
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
  alternates: {
    canonical: "https://www.lexykapp.com",
  },
  verification: {
    google: "google-site-verification-code-here", // User will need to add this from Search Console
  },
};

import StructuredData from "./components/structured-data";
import Analytics from "./components/analytics";
import HrefLangTags from "./components/hreflang-tags";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <HrefLangTags />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
