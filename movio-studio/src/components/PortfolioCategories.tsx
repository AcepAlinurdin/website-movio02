'use client';

import { useState, useEffect, useCallback } from 'react';

type PortfolioItem = {
  title: string;
  href: string;
  youtubeId?: string;
  frontImage?: string;
  backImage?: string;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  count: number;
  color: string;
  accentColor: string;
  bgLight: string;
  description: string;
  items: PortfolioItem[];
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: 'animasi',
    label: 'Animasi',
    emoji: '🎬',
    count: 43,
    color: '#1E3A8A',
    accentColor: '#F97316',
    bgLight: '#EFF6FF',
    description: 'Motion graphics, 2D/3D animasi, dan explainer video untuk brand korporasi.',
    items: [
      { title: 'BCA Tips Keamanan Privasi dan Data Perbankan', href: 'https://studio.movio.id/portfolio/bca-tips-keamanan-privasi-dan-data-perbankan/', youtubeId: 'vmYnwEcDx58' },
      { title: 'BCA OneKlik', href: 'https://studio.movio.id/portfolio/bca-oneklik/', youtubeId: 'vQGtmVFs7T0' },
      { title: 'Freeport Building Procedure 3D Animation', href: 'https://studio.movio.id/portfolio/freeport-building-procedure-3d-animation/', youtubeId: '6imRqEx5YYM' },
      { title: 'Lippo Insurance Medicare', href: 'https://studio.movio.id/portfolio/lippo-insurance-medicare/', youtubeId: 'HiqgCLTiRQs' },
      { title: 'PPIM Moderasi Beragama', href: 'https://studio.movio.id/portfolio/ppim-moderasi-beragama/', youtubeId: '5gCtsQ4XjrU' },
      { title: 'Lalamove API', href: 'https://studio.movio.id/portfolio/lalamove-api/', youtubeId: 'cGHHYp2mYvo' },
      { title: 'Aplikasi Teman Sehat Product Profile', href: 'https://studio.movio.id/portfolio/aplikasi-teman-sehat-product-profile/', youtubeId: 'yS-jS_1_QlU' },
      { title: 'Shipper Animation', href: 'https://studio.movio.id/portfolio/shipper-animation/', youtubeId: 'fOBHb_h9QHo' },
      { title: 'BCA Vira', href: 'https://studio.movio.id/portfolio/bca-vira/', youtubeId: 'ersXlhxJHME' },
      { title: 'AIA Awards', href: 'https://studio.movio.id/portfolio/aia-awards/', youtubeId: '8iPtRwnfKGM' },
      { title: 'Tutorial Bayar Pajak BCA MPN G2', href: 'https://studio.movio.id/portfolio/tutorial-bayar-pajak-bca-mpn-g2/', youtubeId: 'K2nxlS50AF4' },
      { title: 'Tutorial Pengajuan KPR BCA', href: 'https://studio.movio.id/portfolio/tutorial-pengajuan-kpr-bca/', youtubeId: 'xcq_efsO-G0' },
      { title: 'Bank Victoria', href: 'https://studio.movio.id/portfolio/bank-victoria/', youtubeId: 'bgFYyQLuDXs' },
      { title: 'Tutorial KlikBCA Bisnis', href: 'https://studio.movio.id/portfolio/tutorial-klikbca-bisnis/', youtubeId: 'MO2SJgRyT3M' },
      { title: 'BCA Indepay', href: 'https://studio.movio.id/portfolio/bca-indepay/', youtubeId: 'jov0JrOVaME' },
      { title: 'Kahitna 30 Tahun', href: 'https://studio.movio.id/portfolio/kahitna-30-tahun/', youtubeId: 'wKHfVHvhogc' },
      { title: 'Credit Card Woman UOB', href: 'https://studio.movio.id/portfolio/credit-card-woman-uob/', youtubeId: 'O3XIqtAIHYs' },
      { title: 'Mastercard BCA', href: 'https://studio.movio.id/portfolio/mastercard-bca/', youtubeId: 'EFZAwA-ps6U' },
      { title: 'EDC BCA', href: 'https://studio.movio.id/portfolio/edc-bca/', youtubeId: 'sk2Wlea9VHU' },
      { title: 'E-Branch BCA', href: 'https://studio.movio.id/portfolio/e-branch-bca/', youtubeId: '3KYClrOufYk' },
      { title: 'Adhi Karya LRT', href: 'https://studio.movio.id/portfolio/adhi-karya-lrt/', youtubeId: 'wLEaXdoAE1Y' },
      { title: 'MLDare2Perform', href: 'https://studio.movio.id/portfolio/mldare2perform/', youtubeId: 'XW85sa07Slc' },
      { title: 'BCA KPR 360 Video', href: 'https://studio.movio.id/portfolio/bca-kpr-360-video/', youtubeId: 'SwOk7Y5bnZ4' },
      { title: 'BCA Finhacks', href: 'https://studio.movio.id/portfolio/bca-finhacks/', youtubeId: 'pjwuMSLzTHU' },
      { title: 'Tahapan Berjangka BCA', href: 'https://studio.movio.id/portfolio/tahapan-berjangka-bca/', youtubeId: 't1l4CtPIGho' },
      { title: 'Ars86care Foundation', href: 'https://studio.movio.id/portfolio/ars86care-foundation/', youtubeId: 'Dr0IzrwXI7c' },
      { title: 'KlikBCA Bisnis', href: 'https://studio.movio.id/portfolio/klikbca-bisnis/', youtubeId: 'Rx3-xXjRHVA' },
      { title: 'Indonesia Tanpa Kusta', href: 'https://studio.movio.id/portfolio/indonesia-tanpa-kusta/', youtubeId: 'B3DBqLxlDAg' },
      { title: 'Lebaran di Luar Angkasa', href: 'https://studio.movio.id/portfolio/lebaran-di-luar-angkasa/', youtubeId: '1rO-hgoxXfE' },
      { title: 'PLN Corporate 2015', href: 'https://studio.movio.id/portfolio/pln-corporate-2015/', youtubeId: 'cn302AJbOio' },
      { title: 'Masyarakat Inklusif', href: 'https://studio.movio.id/portfolio/masyarakat-inklusif/', youtubeId: 'gJelXXoT6E0' },
      { title: 'Unicef Ureport', href: 'https://studio.movio.id/portfolio/unicef-ureport/', youtubeId: 'g256AjRI5i4' },
      { title: 'XL Rebrand', href: 'https://studio.movio.id/portfolio/xl-rebrand/', youtubeId: '3qG2zprbyLk' },
      { title: 'T-Cash: Transaksi Dalam Genggaman', href: 'https://studio.movio.id/portfolio/t-cash-transaksi-dalam-genggaman/', youtubeId: 'QuXmU2f9qNw' },
      { title: 'PSA Pemilu Part 01', href: 'https://studio.movio.id/portfolio/psa-pemilu-part-01/', youtubeId: 'ebuFnyurXKI' },
      { title: 'Tiger Crisis', href: 'https://studio.movio.id/portfolio/tiger-crisis/', youtubeId: 'e-pc7o202r0' },
      { title: 'Diabetes', href: 'https://studio.movio.id/portfolio/diabetes/', youtubeId: '052Lr1O7UTE' },
      { title: 'Tutorial Membuat Websites', href: 'https://studio.movio.id/portfolio/tutorial-membuat-websites/', youtubeId: 'FGXPiei_dY4' },
      { title: 'Tutorial Widget', href: 'https://studio.movio.id/portfolio/tutorial-widget/', youtubeId: 'ki942Dzy-Pk' },
      { title: 'YouTube Animation', href: 'https://studio.movio.id/portfolio/httpswww-youtube-comwatchvgjelxxot6e0/', youtubeId: 'ofeWmHgBDLw' },
      { title: 'Transaksi Dalam Genggaman', href: 'https://studio.movio.id/portfolio/transaksi-dalam-genggaman/', youtubeId: 'TAlmTd46wqQ' },
      { title: 'Bentuk Baru Uang Anda', href: 'https://studio.movio.id/portfolio/bentuk-baru-uang-anda/', youtubeId: 'TOuETvbiv5M' },
      { title: 'Persiapan Masa Depan', href: 'https://studio.movio.id/portfolio/persiapan-masa-depan/', youtubeId: 'Om4RITJJ5J4' },

    ],
  },
  {
    id: 'desain-grafis',
    label: 'Desain Grafis',
    emoji: '🎨',
    count: 4,
    color: '#1E3A8A',
    accentColor: '#FFB800',
    bgLight: '#F5F3FF',
    description: 'Branding, packaging, infografis, dan desain visual komunikasi profesional.',
    items: [
      { 
        title: 'Tahu Bungkeng Nori Tofu Packaging', 
        href: 'https://studio.movio.id/portfolio/tahu-bungkeng-tofu-nori-packaging/',
        frontImage: '/Nori Tofu.png',
        backImage: '/Nori Tofu (1).png',
      },
      { 
        title: 'PPIM UIN Jakarta – "Cerita Ahmad & Siti" Digital Book & Illustration', 
        href: 'https://studio.movio.id/portfolio/ppim-uin-jakarta-digital-book-infographic/',
        frontImage: '/Quanta.png' // Menggunakan Quanta sebagai pengganti visual PPIM sementara sesuai instruksi
      },
      { 
        title: 'Ahsoha – "Sejuta Pesantren Virtual" Program Profile & Identity', 
        href: 'https://studio.movio.id/portfolio/ahsoha-program-profile-design/',
        frontImage: '/ahsoha.png'
      },
      { 
        title: 'Roche – T-DM1 Panduan Praktis Penggunaan (Medical Guide)', 
        href: 'https://studio.movio.id/portfolio/roche-t-dm1-mobile-app/',
        frontImage: '/Roche.png'
      },
    ],
  },
  {
    id: 'website-aplikasi',
    label: 'Website / Aplikasi',
    emoji: '💻',
    count: 1,
    color: '#065F46',
    accentColor: '#FFB800',
    bgLight: '#ECFDF5',
    description: 'Microsite, mobile app, dan web application untuk kebutuhan digital bisnis.',
    items: [
      { 
        title: 'Roche – T-DM1 Mobile App', 
        href: 'https://studio.movio.id/portfolio/roche-t-dm1-mobile-app/',
        frontImage: '/2-website.png'
      },
    ],
  },
  {
    id: 'video',
    label: 'Video',
    emoji: '🎥',
    count: 14,
    color: '#991B1B',
    accentColor: '#FB923C',
    bgLight: '#FFF1F2',
    description: 'Video shooting, dokumentasi korporasi, dan konten visual brand storytelling.',
    items: [
      { title: 'AIA iMO Smart', href: 'https://studio.movio.id/portfolio/aia-imo-smart/', youtubeId: 'KQSQfqk1m44' },
      { title: 'ACE HARDWARE – Ace Boom Sale', href: 'https://studio.movio.id/portfolio/ace-hardware-ace-boom-sale/', youtubeId: 'xGevchtMsUQ' },
      { title: 'Alibaba Cloud x Asakita – Customer Success Story', href: 'https://studio.movio.id/portfolio/alibaba-cloud-x-asakita/', youtubeId: '72IuhWO99jA' },
      { title: 'Tarik Tunai dengan EDC BCA', href: 'https://studio.movio.id/portfolio/video-tarik-tunai-dengan-edc-bca/', youtubeId: 'GemrNVupMq8' },
      { title: 'Alibaba Cloud x Passpod', href: 'https://studio.movio.id/portfolio/alibaba-cloud-x-passpod/', youtubeId: 'waPrkFw1H-Q' },
      { title: 'Showreel Movio Kreasi Indonesia 2017', href: 'https://studio.movio.id/portfolio/showreel-movio-kreasi-indonesia-2017/', youtubeId: 'Vmte_M1RbEA' },
      { title: 'Buku untuk Indonesia – BCA', href: 'https://studio.movio.id/portfolio/buku-untuk-indonesia-bca/', youtubeId: 'kh1RKbQyVog' },
      { title: 'BCA Prioritas – Online Bisnis Forum', href: 'https://studio.movio.id/portfolio/bca-prioritas-online-bisnis-forum/', youtubeId: 'n183H3r76YY' },
      { title: 'Tupperware Foodmill – Penghalus Makanan', href: 'https://studio.movio.id/portfolio/tupperware-foodmill-penghalus-makanan-tupperware/', youtubeId: 'suxuwn_11mU' },
      { title: 'Pasar Komoditas Jakarta – PKJ', href: 'https://studio.movio.id/portfolio/pasar-komoditas-jakarta-pkj/', youtubeId: 'Pii0Jl8qJLs' },
      { title: 'BCA Digital Marketing', href: 'https://studio.movio.id/portfolio/bca-digital-marketing/', youtubeId: '1V-igGtQW50' },
      { title: 'Cerita Agen Laku BCA', href: 'https://studio.movio.id/portfolio/cerita-agen-laku-bca/', youtubeId: 'DIWRxwk78TQ' },
      { title: 'Tokoon Testimoni Seller', href: 'https://studio.movio.id/portfolio/tokoon-testimoni-seller/', youtubeId: 'n6LQID2YANE' },
      { title: 'Soyjoy My Name Is Owen', href: 'https://studio.movio.id/portfolio/soyjoy-my-name-is-owen/', youtubeId: 'n-_5AehvCcA' },
    ],
  },
];

// ─── YOUTUBE MODAL ───────────────────────────────────────────────────────────

type ModalItem = { title: string; youtubeId: string; href: string };

function YouTubeModal({ item, onClose }: { item: ModalItem; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${item.title}`}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          className="absolute -top-12 right-0 text-white text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-orange-400 transition-colors"
        >
          Tutup
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        </button>

        {/* Video container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Title bar */}
        <div className="flex items-center justify-between bg-[#0A192F] px-5 py-4 mt-0">
          <h3 className="text-white font-black text-sm md:text-base uppercase tracking-tight truncate pr-4">
            {item.title}
          </h3>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-orange-400 text-xs font-black uppercase tracking-widest hover:text-orange-300 transition-colors flex items-center gap-1.5"
          >
            Detail
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── THUMBNAIL CARD ──────────────────────────────────────────────────────────

function ThumbnailCard({
  item,
  index,
  color,
  accentColor,
  onPlay,
}: {
  item: PortfolioItem;
  index: number;
  color: string;
  accentColor: string;
  onPlay: (item: ModalItem) => void;
}) {
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
  
  const thumbnail = item.youtubeId
    ? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`
    : (viewSide === 'front' ? item.frontImage : item.backImage);

  const handleClick = (e: React.MouseEvent) => {
    // If clicking a toggle button, don't trigger the general click
    if ((e.target as HTMLElement).closest('.side-toggle')) return;

    if (item.youtubeId) {
      onPlay({ title: item.title, youtubeId: item.youtubeId, href: item.href });
    } else {
      window.open(item.href, '_blank');
    }
  };

  const hasGallery = item.frontImage && item.backImage;

  return (
    <div
      className="group cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      id={`portfolio-card-${index}`}
      aria-label={`Play ${item.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(e as any); }}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden mb-3"
        style={{ aspectRatio: '16/9', backgroundColor: '#0A192F' }}
      >
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
            key={viewSide} // Forces refresh for transition if images change
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
          >
            <span className="text-4xl opacity-40">🎬</span>
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Play button */}
        {item.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: accentColor }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5 3L15 9L5 15V3Z" fill="white" />
              </svg>
            </div>
          </div>
        )}

        {/* Front/Back Toggle Buttons */}
        {hasGallery && (
          <div className="absolute top-2 left-2 flex gap-1 z-30 side-toggle">
            <button
              onClick={() => setViewSide('front')}
              className={`px-2 py-1 text-[8px] font-black uppercase tracking-tighter transition-all ${
                viewSide === 'front' ? 'bg-white text-black' : 'bg-black/50 text-white/70 hover:bg-black/80'
              }`}
            >
              Front
            </button>
            <button
              onClick={() => setViewSide('back')}
              className={`px-2 py-1 text-[8px] font-black uppercase tracking-tighter transition-all ${
                viewSide === 'back' ? 'bg-white text-black' : 'bg-black/50 text-white/70 hover:bg-black/80'
              }`}
            >
              Back
            </button>
          </div>
        )}

        {/* Link icon for non-video items */}
        {!item.youtubeId && (
          <div className="absolute top-2 right-2">
            <div
              className="w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="white" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        )}

        {/* Number badge */}
        <div
          className="absolute bottom-2 left-2 text-[10px] font-black tabular-nums px-1.5 py-0.5"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'rgba(255,255,255,0.7)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Title */}
      <p
        className="text-xs font-bold leading-tight line-clamp-2 transition-colors duration-200"
        style={{ color }}
      >
        {item.title}
      </p>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function PortfolioCategories() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [modalItem, setModalItem] = useState<ModalItem | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  const handlePlay = useCallback((item: ModalItem) => {
    setModalItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalItem(null);
  }, []);

  return (
    <>
      {/* ── MODAL ── */}
      {modalItem && (
        <YouTubeModal item={modalItem} onClose={handleCloseModal} />
      )}

      <section
        id="portfolio-grid"
        className="bg-white pt-32 pb-40 px-6 md:px-12 relative z-20 border-t border-blue-100"
      >
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-20 border-b-8 border-[#1E3A8A] pb-10">
            <h2 className="text-[4rem] font-black text-[#1E3A8A] tracking-tighter uppercase leading-[0.9]">
              Porto<br />
              <span className="text-outline-dark">folio.</span>
            </h2>
            <p className="mt-4 text-slate-500 text-base font-medium tracking-wide max-w-xl">
              Koleksi karya terbaik Movio Studio — dari animasi, desain grafis, website &amp; aplikasi, hingga produksi video korporasi.
            </p>
          </div>

          {/* CATEGORY ACCORDION */}
          <div className="flex flex-col gap-5">
            {categories.map((cat, idx) => {
              const isOpen = openCategory === cat.id;
              const hasVideo = cat.items.some((i) => i.youtubeId);

              return (
                <div
                  key={cat.id}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    border: `2px solid ${isOpen ? cat.color : '#E2E8F0'}`,
                  }}
                >
                  {/* ── HEADER ROW ── */}
                  <div
                    className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6 cursor-pointer select-none"
                    style={{ backgroundColor: isOpen ? cat.color : 'transparent' }}
                    onClick={() => toggleCategory(cat.id)}
                    role="button"
                    aria-expanded={isOpen}
                    id={`category-toggle-${cat.id}`}
                  >
                    <div className="flex items-center gap-5 md:gap-7">
                      {/* Index number */}
                      <span
                        className="text-5xl md:text-6xl font-black tracking-tighter tabular-nums leading-none transition-colors duration-300"
                        style={{ color: isOpen ? 'rgba(255,255,255,0.15)' : '#E2E8F0' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="text-xl">{cat.emoji}</span>
                          <h3
                            className="text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300"
                            style={{ color: isOpen ? '#fff' : cat.color }}
                          >
                            {cat.label}
                          </h3>
                        </div>
                        <p
                          className="text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300"
                          style={{ color: isOpen ? 'rgba(255,255,255,0.6)' : '#94A3B8' }}
                        >
                          {cat.count} Karya {hasVideo && '· Klik untuk Play ▶'}
                        </p>
                      </div>
                    </div>

                    {/* Breakdown button */}
                    <button
                      id={`breakdown-btn-${cat.id}`}
                      className="flex items-center gap-2 px-5 py-2.5 text-[11px] font-black uppercase tracking-widest border-2 transition-all duration-300 shrink-0"
                      style={{
                        backgroundColor: isOpen ? 'rgba(255,255,255,0.12)' : cat.color,
                        borderColor: isOpen ? 'rgba(255,255,255,0.4)' : cat.color,
                        color: '#fff',
                      }}
                      onClick={(e) => { e.stopPropagation(); toggleCategory(cat.id); }}
                    >
                      {isOpen ? 'Tutup' : 'Breakdown'}
                      <svg
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                        width="13" height="13" viewBox="0 0 13 13" fill="none"
                      >
                        <path d="M2 5L6.5 10L11 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                      </svg>
                    </button>
                  </div>

                  {/* ── BREAKDOWN PANEL ── */}
                  <div
                    style={{
                      maxHeight: isOpen ? '9999px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.55s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    {/* Description */}
                    <div
                      className="px-8 py-3 border-b text-sm text-slate-500 font-medium"
                      style={{ backgroundColor: cat.bgLight, borderColor: `${cat.color}20` }}
                    >
                      {cat.description}
                    </div>

                    {/* Thumbnail grid */}
                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                        {cat.items.map((item, i) => (
                          <ThumbnailCard
                            key={i}
                            item={item}
                            index={i}
                            color={cat.color}
                            accentColor={cat.accentColor}
                            onPlay={handlePlay}
                          />
                        ))}
                      </div>

                      {/* Footer: View all */}
                      <div className="mt-10 pt-6 border-t-2" style={{ borderColor: `${cat.color}18` }}>
                        <a
                          href="https://studio.movio.id/portfolio/"
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`view-all-${cat.id}`}
                          className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest group transition-all duration-200"
                          style={{ color: cat.color }}
                        >
                          Lihat Semua Karya {cat.label} di Studio Movio
                          <svg
                            className="transition-transform duration-200 group-hover:translate-x-1"
                            width="13" height="13" viewBox="0 0 13 13" fill="none"
                          >
                            <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke={cat.accentColor} strokeWidth="2.5" strokeLinecap="square" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
