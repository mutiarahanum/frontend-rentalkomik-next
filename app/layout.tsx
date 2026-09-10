import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Navigasi from '../components/Navigasi';
import './globals.css';

export const metadata: Metadata = {
  title: 'RentalKomik Mini',
  description: 'Dashboard peminjaman komik — versi Next.js + TypeScript',
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header>
          <h1>RentalKomik Mini</h1>
          <Navigasi />
        </header>

        <main>{children}</main>

        <footer>
          © 2026 RentalKomik Mini. Dibuat untuk latihan JarvisCamp.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;