import './globals.css';
import { ConvexClientProvider } from '@/components/providers/convex-provider';

import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

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
    <ConvexClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ConvexClientProvider>
  );
}
