import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Package, Clock, FileType } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Layanan End-to-End Production',
  description:
    'Layanan teknis Movio Studio: Pembuatan E-Learning SCORM, Video Animasi Explainer 2D, Video Company Profile & Syuting On-Location. End-to-end production untuk kebutuhan korporasi Indonesia.',
  alternates: { canonical: '/servis' },
  openGraph: {
    title: 'Layanan End-to-End Production - Movio Studio',
    description:
      'E-Learning SCORM, Video Animasi Explainer, Video Company Profile & Syuting — semua dalam satu mitra profesional.',
    url: '/servis',
  },
};

const services = [
  {
    num: '01',
    dept: 'Digital Learning',
    title: 'Jasa Pembuatan E-Learning',
    desc: 'Pembuatan modul pembelajaran interaktif berstandar SCORM. Ubah materi konvensional menjadi pengalaman belajar yang menyenangkan dengan kuis dan gamifikasi.',
    deliverables: 'SCORM 1.2 / 2004, HTML5 Web Package, MP4 (Jika ada sisipan video)',
    timeframe: '4 - 8 Minggu per modul',
    packages: ['Basic Module', 'Interactive Pro', 'Gamified Enterprise'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
    badge: 'Modul Interaktif / Kuis / Gamifikasi',
    dark: false,
    href: '/jasa-pembuatan-scorm',
  },
  {
    num: '02',
    dept: 'Animation Studio',
    title: 'Jasa Pembuatan Animasi',
    desc: 'Produksi animasi untuk menjelaskan cara kerja produk, fitur aplikasi, atau SOP dengan gaya yang modern dan mudah dipahami.',
    deliverables: 'Script, Storyboard, Animatic, Final Render (MP4/WEBM)',
    timeframe: '2 - 6 Minggu',
    packages: ['2D Motion Graphic', 'Infographic Animation', 'Character Animation'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    badge: '2D / Infographic / Character',
    dark: true,
    href: '/jasa-video-animasi',
  },
  {
    num: '03',
    dept: 'Corporate Production',
    title: 'Jasa Video Production',
    desc: 'Layanan video shooting dan on-location production dengan kru profesional. Mendokumentasikan pesan dan skala bisnis Anda dengan sinematik.',
    deliverables: 'Full Shoot Raw Files, Editing, Color Grading, Sound Mix (MP4/MOV)',
    timeframe: '3 - 8 Minggu',
    packages: ['Single Camera Setup', 'Multi-Cam Corporate', 'Cinematic Shoot'],
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop',
    badge: 'Shooting & On-location',
    dark: false,
    href: '/jasa-video-company-profile',
  },
  {
    num: '04',
    dept: 'Corporate Identity',
    title: 'Jasa Company Profile Video',
    desc: 'Video eksklusif berkualitas premium yang menceritakan visi, misi, dan nilai inti perusahaan Anda kepada investor, mitra, dan klien.',
    deliverables: 'Final Master Video (MP4 4K), Cut-downs for Social, Subtitles (SRT)',
    timeframe: '4 - 8 Minggu',
    packages: ['Standard Profile', 'Premium Profile', 'Enterprise Storytelling'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    badge: 'Brand Story',
    dark: true,
    href: '/jasa-video-company-profile',
  },
  {
    num: '05',
    dept: 'Digital Development',
    title: 'Jasa Pembuatan Website',
    desc: 'Perancangan dan pengembangan website yang dinamis, cepat, responsif, dan siap mengkonversi pengunjung menjadi pelanggan.',
    deliverables: 'Source Code, UI/UX Assets (Figma), Deploy to Server, CMS Access',
    timeframe: '4 - 12 Minggu',
    packages: ['Landing Page', 'Company Profile Web', 'Custom Web Application'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    badge: 'Web App & Landing Page',
    dark: false,
    href: '/jasa-pembuatan-website-company-profile',
  },
  {
    num: '06',
    dept: 'Creative Art',
    title: 'Jasa Graphic Design',
    desc: 'Pembuatan aset visual yang indah dan konsisten, mulai dari perumusan identitas brand, desain presentasi, hingga infografis.',
    deliverables: 'Vector Files (AI/EPS), High-Res PDF, Image assets (PNG/JPEG)',
    timeframe: '1 - 4 Minggu',
    packages: ['Presentation Deck', 'Brand Identity', 'Infographic Design'],
    image: 'https://images.unsplash.com/photo-1626785724573-0b67e00d1101?q=80&w=800&auto=format&fit=crop',
    badge: 'Brand Assets / Presentasi / Infografis',
    dark: true,
    href: '/jasa-desain-presentasi',
  },
];

export default function ServisPage() {
  return (
    <div className="pt-40 md:pt-48 pb-24 px-6 md:px-12 bg-[#F0F4F8] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUpWrapper>
          <div className="mb-24 border-b-8 border-[#1E3A8A] pb-10">
            <span className="label-tegas text-[#FFB800] mb-6 block">Katalog Layanan Movio Studio</span>
            <h1 className="text-5xl md:text-[5rem] font-black text-[#1E3A8A] tracking-tighter leading-[0.9] uppercase">
              End-to-End <br />
              <span className="text-outline-dark">Production.</span>
            </h1>
          </div>
        </FadeUpWrapper>

        <div className="flex flex-col gap-10">
          {services.map((svc, i) => (
            <FadeUpWrapper key={i}>
              <div
                className={`p-10 md:p-14 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center hover:border-orange-500 transition-colors group ${
                  svc.dark
                    ? 'bg-[#1E3A8A] text-white shadow-2xl shadow-blue-900/20'
                    : 'bg-white border border-blue-100 shadow-xl shadow-slate-200/50'
                }`}
              >
                {/* Text Section */}
                <div className={`lg:col-span-7 relative ${svc.dark ? 'order-1 lg:order-2' : ''}`}>
                  {/* Big Number Background */}
                  <h2
                    className={`font-black text-[8rem] md:text-[10rem] leading-none absolute -mt-20 -ml-6 md:-ml-10 z-0 transition-colors pointer-events-none ${
                        svc.dark ? 'text-white/5 group-hover:text-orange-500/10' : 'text-[#1E3A8A]/5 group-hover:text-orange-500/5'
                    }`}
                  >
                    {svc.num}
                  </h2>
                  
                  <div className="relative z-10">
                    <span className="text-[#FFB800] font-bold tracking-widest uppercase text-xs mb-3 md:mb-4 block">
                      {svc.dept}
                    </span>
                    <h3
                      className={`text-3xl md:text-5xl font-black tracking-tight mb-6 uppercase leading-[1.1] ${
                        svc.dark ? 'text-white' : 'text-[#1E3A8A]'
                      }`}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className={`font-medium mb-8 text-sm md:text-base leading-relaxed ${
                        svc.dark ? 'text-blue-100/90' : 'text-slate-600'
                      }`}
                    >
                      {svc.desc}
                    </p>

                    {/* Metadata Card (Deliverables, Timeframe, Packages) */}
                    <div className={`mb-10 p-5 md:p-6 border ${
                        svc.dark ? 'border-white/10 bg-black/10' : 'border-[#1E3A8A]/10 bg-slate-50'
                    }`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <div className={`flex items-center gap-2 mb-2 text-[10px] uppercase font-black tracking-widest ${svc.dark ? 'text-orange-400' : 'text-orange-600'}`}>
                                    <FileType className="w-3.5 h-3.5" /> Deliverables
                                </div>
                                <span className={`text-sm font-bold block ${svc.dark ? 'text-white' : 'text-[#1E3A8A]'}`}>
                                    {svc.deliverables}
                                </span>
                            </div>
                            
                            {svc.timeframe && (
                                <div>
                                    <div className={`flex items-center gap-2 mb-2 text-[10px] uppercase font-black tracking-widest ${svc.dark ? 'text-orange-400' : 'text-orange-600'}`}>
                                        <Clock className="w-3.5 h-3.5" /> Estimasi Waktu
                                    </div>
                                    <span className={`text-sm font-bold block ${svc.dark ? 'text-white' : 'text-[#1E3A8A]'}`}>
                                        {svc.timeframe}
                                    </span>
                                </div>
                            )}
                        </div>

                        {svc.packages && svc.packages.length > 0 && (
                            <div className={`mt-6 pt-5 flex flex-col gap-3 border-t ${svc.dark ? 'border-white/10' : 'border-[#1E3A8A]/10'}`}>
                                <div className={`flex items-center gap-2 text-[10px] uppercase font-black tracking-widest ${svc.dark ? 'text-orange-400' : 'text-orange-600'}`}>
                                    <Package className="w-3.5 h-3.5" /> Opsi Paket
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {svc.packages.map((pkg, idx) => (
                                        <span key={idx} className={`text-xs font-bold px-3 py-1.5 uppercase tracking-wide border ${
                                            svc.dark 
                                                ? 'bg-white/5 border-white/10 text-blue-100' 
                                                : 'bg-white border-[#1E3A8A]/20 text-[#1E3A8A]'
                                        }`}>
                                            {pkg}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                      href={svc.href || "/contact"}
                      className={`inline-flex items-center gap-3 font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 border-b-2 pb-1 ${
                        svc.dark ? 'text-orange-400 border-orange-400/30 hover:border-orange-400 hover:gap-5' : 'text-[#1E3A8A] border-[#1E3A8A]/30 hover:border-[#FFB800] hover:text-[#FFB800] hover:gap-5'
                      }`}
                    >
                      {svc.href ? "Lihat Detail Layanan" : "Bicarakan Proyek Anda"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`lg:col-span-5 relative mt-8 lg:mt-0 ${svc.dark ? 'order-2 lg:order-1' : ''}`}>
                  <div
                    className={`aspect-[4/3] overflow-hidden border-4 md:border-8 ${
                      svc.dark ? 'border-white/10' : 'border-white shadow-xl shadow-slate-200'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-4 md:bottom-8 -left-4 md:-left-8 px-4 md:px-6 py-2 md:py-3 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500 ${
                      svc.dark
                        ? 'bg-[#FFB800] text-white'
                        : 'bg-[#1E3A8A] text-white'
                    }`}
                  >
                    {svc.badge}
                  </div>
                </div>
              </div>
            </FadeUpWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
