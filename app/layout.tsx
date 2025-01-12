import './globals.css';

import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import localFont from 'next/font/local'; // For local custom fonts
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Example: Load a local custom font
/*
const NeueHaasDisplay = localFont({
  src: [
    {
      path: "..public/fonts/NeueHaasDisplayMedium.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "..public/fonts/NeueHaasDisplayBold.ttf",
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap', // Optional: improves performance by swapping fonts after loading
});
*/

export const metadata: Metadata = {
  title: 'Nils Goecke - UI/UX Designer & Developer',
  description: 'Portfolio showcasing UI/UX design work and development projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem

        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}