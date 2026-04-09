import type { Metadata } from 'next';
import PortfolioScrollSection from '@/components/PortfolioScrollSection';
import PortfolioCategories from '@/components/PortfolioCategories';

export const metadata: Metadata = {
  title: 'Portfolio Karya Eksklusif',
  description:
    'Lihat portfolio karya terbaik Movio Studio: Animasi, Desain Grafis, Website & Aplikasi, dan Video Produksi untuk klien korporasi Indonesia.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio Karya Eksklusif - Movio Studio',
    description: 'Kumpulan mahakarya produksi visual dan digital korporasi Movio Studio.',
    url: '/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Scroll Animation Section */}
      <PortfolioScrollSection />

      {/* Portfolio 4 Kategori + Breakdown */}
      <PortfolioCategories />
    </>
  );
}
