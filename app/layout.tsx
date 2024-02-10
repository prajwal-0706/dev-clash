<<<<<<< HEAD
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConvexClientProvider } from '@/components/providers/convex-provider';
=======
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
>>>>>>> 184302c64968d73ddbea8663d148b8b6ffbe0471

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Estatery - Real Estate Made Easy',
  description: 'A Real-Time Property Availability Platform',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <ConvexClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ConvexClientProvider>
=======
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
>>>>>>> 184302c64968d73ddbea8663d148b8b6ffbe0471
  );
}
