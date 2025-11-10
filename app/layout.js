import './globals.css';
import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mariam Alli | Frontend Developer',
  description: 'React / Next.js / Tailwind / DevOps portfolio.',
  openGraph: {
    title: 'Mariam Alli | Frontend Developer',
    description:
      'Portfolio showcasing frontend, DevOps, and cloud-native projects.',
    url: 'https://alli-mariam-portfolio.vercel.app/',
    siteName: 'Mariam Alli Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Mariam Alli Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
