import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  metadataBase: new URL('https://movio.studio'),
  title: {
    default: 'Movio Studio - Professional Creative Partner',
    template: '%s | Movio Studio',
  },
  description:
    'Movio Studio adalah professional creative partner yang menyediakan jasa produksi video dan desain visual berkualitas tinggi untuk perusahaan menengah dan besar (korporasi) di Indonesia.',
  keywords: [
    'Movio Studio',
    'jasa video perusahaan',
    'produksi video korporasi',
    'video animasi explainer',
    'company profile video',
    'e-learning SCORM',
    'hybrid AI production',
    'video marketing Indonesia',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Movio Studio',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased flex flex-col min-h-screen selection:bg-[#F97316] selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
