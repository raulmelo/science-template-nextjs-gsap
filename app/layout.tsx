import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import RegisterGsap from '@/components/animations/register.gsap';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js + GSAP Animations',
  description: 'Beautiful scroll animations with Next.js and GSAP',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn( inter.className, "" )}>
        <RegisterGsap />
        {children}
      </body>
    </html>
  );
}