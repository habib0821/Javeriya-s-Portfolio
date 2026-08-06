import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Javeriya — Creative Graphic Designer',
  description:
    'Javeriya is a creative graphic designer crafting modern visual identities, branding systems, and digital experiences that help brands stand out.',
  keywords: [
    'graphic designer',
    'brand identity',
    'logo design',
    'UI design',
    'portfolio',
    'Javeriya',
  ],
  openGraph: {
    title: 'Javeriya — Creative Graphic Designer',
    description:
      'Modern visual identities, branding systems, and digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
