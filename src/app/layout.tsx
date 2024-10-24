import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./componen/header";
import Footer from "./componen/footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  title: "Luxora | Jam Tangan Digital Terbaik dengan Fitur Inovatif",
  description: "Jelajahi jam tangan digital dengan fitur modern dan desain elegan, cocok untuk gaya hidup aktif dan teknologi",
  keywords: "jam tangan pintar, smartwatch, jam tangan digital, jam tangan digital pria,jam tangan digital wanita, jam tangan kesehatan",
  icons: {
    icon: '/images/Luxora.png',
  },

  // untuk optimasi berbagi konten di media sosial (misalnya, Facebook, LinkedIn).
  openGraph: {
    title: "Luxora | Jam Tangan Digital Terbaik",
    description: "Jam tangan digital dengan fitur canggih dan desain elegan untuk kebutuhan gaya hidup modern.",
    url: "https://landing-page-next-js-eight.vercel.app/",
    images: [
      {
        url: "https://www.luxora.com/images/hero.png", 
        width: 800,
        height: 600,
        alt: "Luxora Jam Tangan Pintar",
      },
    ],
    type: "website",
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-W569GNDX2X" />
      </body>
    </html>
  );
}
