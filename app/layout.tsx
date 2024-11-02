import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import RegisterGsap from '@/components/animations/register.gsap';
import Footer from '@/components/sections/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js + GSAP Animations',
  description: 'A simple Next.js starter with GSAP animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="PT-BR" suppressHydrationWarning>
      <body className={cn( inter.className, "" )}>
        <RegisterGsap />
        {children}
        <Footer />
      </body>
    </html>
  );
}