import { ConvexClientProvider } from '@/components/providers/convex-provider';

import { Toaster } from '@/components/ui/toaster';

import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { EdgeStoreProvider } from '@/lib/edgestore';

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
      <EdgeStoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <Toaster />
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </EdgeStoreProvider>
    </ConvexClientProvider>
  );
}
