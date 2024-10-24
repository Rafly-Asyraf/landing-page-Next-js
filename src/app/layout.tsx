import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./componen/header";
import Footer from "./componen/footer";

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
      </body>
    </html>
  );
}
