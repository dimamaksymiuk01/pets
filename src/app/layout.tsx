import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { RootProvider } from '@/common/providers';
import '@/common/styles/normalize.css';
import { Wrapper } from '@/common/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pets',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RootProvider>
          <Wrapper>{children}</Wrapper>
        </RootProvider>
      </body>
    </html>
  );
}
