/* core */
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
/* instruments */
import { RootProvider } from '@/common/providers';
import '@/common/styles/normalize.css';
/* components */
import { Wrapper } from '@/modules';

const inter = Jost({ subsets: ['latin'] });

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
