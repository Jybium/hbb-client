import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '../components/app-reusables/Footer';

const font = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Honey Bunny Bun | Easy way to link up with your favourite models",
  description:
    " Go live with honey bunny bun, monetize your streams according to your preferences. Join the honey bunny bun model community today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
     
    </html>
  )
}
