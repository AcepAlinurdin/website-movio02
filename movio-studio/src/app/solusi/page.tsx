import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Megaphone, GraduationCap, Building } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Solusi Kreatif B2B & Korporasi | Movio Studio',
  description:
    'Temukan solusi digital dari Movio Studio berdasarkan kebutuhan sasaran Anda: Solusi Promosi, Media Pembelajaran L&D, hingga Employer Branding Internal.',
  alternates: { canonical: '/solusi' },
  openGraph: {
    title: 'Solusi Kreatif B2B & Korporasi - Movio Studio',
    description: 'Tiga kategori solusi komunikasi visual untuk perusahaan: promosi, pembelajaran, dan employer branding.',
    url: '/solusi',
  },
};

const solutions = [
  {
    icon: Megaphone,
    label: 'Solusi 01',
    title: 'Solusi Promosi & Marketing',
    desc: 'Untuk kebutuhan akuisisi pelanggan (B2C/B2B), peluncuran produk baru, dan kampanye media sosial. Kami merancang visual yang mampu menghentikan perhatian audiens dan mendorong konversi.',
    dark: true,
    outputs: [
      { label: 'Video Animasi (Ads & Explainer)', href: '/jasa-video-animasi' },
      { label: 'Video Syuting Promosi Komersial', href: '/jasa-video-company-profile' },
      { label: 'Konten Sosial & Branding Aset', href: '/jasa-desain-presentasi' },
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: GraduationCap,
    label: 'Solusi 02',
    title: 'Solusi Media Pembelajaran',
    desc: 'Didedikasikan untuk divisi HR, L&D (Learning & Development), serta Edu-Tech. Mentransformasikan SOP dan kurikulum training statis menjadi pusat media digital yang interaktif dan terukur.',
    dark: false,
    outputs: [
      { label: 'Video Pembelajaran Interaktif', href: '/jasa-pembuatan-scorm' },
      { label: 'E-Learning / SCORM', href: '/jasa-pembuatan-scorm' },
      { label: 'Modul Interaktif & Gamifikasi', href: '/jasa-pembuatan-scorm' },
    ],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Building,
    label: 'Solusi 03',
    title: 'Solusi Internal & Employer Branding',
    desc: 'Menjangkau audiens terpenting Anda — karyawan dan investor. Kami menghadirkan Corporate Identity yang kuat melalui rekaman on-location profesional dan materi visual eksekutif.',
    dark: true,
    outputs: [
      { label: 'Company Profile Video Eksklusif', href: '/jasa-video-company-profile' },
      { label: 'Training Video & Testimoni Karyawan', href: '/jasa-video-company-profile' },
      { label: 'Pitch Deck Investor & Laporan Tahunan', href: '/jasa-desain-presentasi' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
];

export default function SolusiPage() {
  return (
    <div className="pt-40 md:pt-48 pb-32 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeUpWrapper>
          <div className="mb-24 border-b-8 border-[#1E3A8A] pb-10">
            <span className="label-tegas text-[#FFB800] mb-6 block">Kategori Berdasarkan Tujuan</span>
            <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-black text-[#1E3A8A] tracking-tighter leading-[0.9] uppercase">
              Solusi <br />
              <span className="text-outline-dark">Pendekatan.</span>
            </h1>
            <p className="mt-10 text-slate-600 text-lg md:text-xl font-medium max-w-2xl border-l-4 border-[#FFB800] pl-6">
              Beritahu kami apa sasaran bisnis Anda — kami akan menyajikan kombinasi output layanan kreatif yang paling tepat untuk mencapai tujuan tersebut.
            </p>
          </div>
        </FadeUpWrapper>

        {/* Solution Sections */}
        <div className="flex flex-col gap-12 md:gap-16">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isReversed = i % 2 !== 0;
            return (
              <FadeUpWrapper key={i} delay={i === 0 ? undefined : i === 1 ? 'delay-100' : 'delay-200'}>
                <div
                  className={`grid md:grid-cols-2 overflow-hidden shadow-xl group border ${
                    sol.dark ? 'border-blue-900 bg-[#0A192F]' : 'border-blue-100 bg-[#F8FAFC]'
                  }`}
                >
                  {/* Text Panel */}
                  <div
                    className={`p-10 md:p-14 flex flex-col justify-center ${isReversed ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <Icon
                      className="w-12 h-12 text-[#FFB800] mb-6"
                    />
                    <span
                      className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${
                        sol.dark ? 'text-blue-400/60' : 'text-slate-400'
                      }`}
                    >
                      {sol.label}
                    </span>
                    <h2
                      className={`text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 leading-[1.1] ${
                        sol.dark ? 'text-white' : 'text-[#1E3A8A]'
                      }`}
                    >
                      {sol.title}
                    </h2>
                    <p
                      className={`font-medium leading-relaxed mb-10 text-sm md:text-base ${
                        sol.dark ? 'text-blue-100/70' : 'text-slate-600'
                      }`}
                    >
                      {sol.desc}
                    </p>

                    {/* Outputs */}
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FFB800] mb-4 block">
                        Output Layanan Ideal:
                      </span>
                      <div className="flex flex-col gap-3">
                        {sol.outputs.map((output, j) => (
                          <Link
                            key={j}
                            href={output.href}
                            className={`flex items-center gap-3 font-bold text-sm group/link w-fit transition-colors ${
                              sol.dark
                                ? 'text-blue-100 hover:text-white'
                                : 'text-[#1E3A8A] hover:text-[#FFB800]'
                            }`}
                          >
                            <ArrowRight
                              className="w-4 h-4 text-[#FFB800] group-hover/link:translate-x-1 transition-transform"
                            />
                            {output.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Panel */}
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden ${
                      isReversed ? 'md:order-1' : 'md:order-2'
                    }`}
                  >
                    <div className="absolute inset-0 bg-[#1E3A8A]/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/60 to-transparent">
                      <Link
                        href={sol.outputs[0].href}
                        className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[11px] hover:text-[#FFB800] transition-colors"
                      >
                        Lihat Layanan <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUpWrapper>
            );
          })}
        </div>

        {/* CTA */}
        <FadeUpWrapper delay="delay-200">
          <div className="mt-20 border-t border-slate-200 pt-16 text-center">
            <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">
              Belum Tahu Solusi yang Tepat?
            </h2>
            <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
              Tim kami siap membantu Anda menemukan kombinasi layanan yang paling efektif sesuai budget dan tujuan bisnis.
            </p>
            <Link
              href="/contact"
              className="bg-[#FFB800] hover:bg-orange-600 text-white px-10 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-flex items-center gap-2"
            >
              Konsultasi Gratis <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUpWrapper>

      </div>
    </div>
  );
}
