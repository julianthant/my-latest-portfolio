import type { Metadata } from 'next';
import './globals.css';
import { heebo } from '@/library/fonts';
import Navbar from '@/components/Navbar';
import { Providers } from '@/helpers/Providers';

export const metadata: Metadata = {
  title: "Julian's Portfolio",
  description: 'Learn more about Julian',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={heebo.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900 text-black dark:text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
