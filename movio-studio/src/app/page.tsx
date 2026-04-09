import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Sparkles, CheckCircle2, Quote, Star, Play } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Movio Studio - Professional Creative Partner',
  description:
    'Professional video and visual design production powered by Hybrid AI system. Movio Studio hadir untuk perusahaan yang butuh kepastian hasil, bukan sekadar ide liar.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO: Dark Navy, Grid, Bold */}
      <section className="pt-40 pb-24 md:pt-64 md:pb-40 px-6 md:px-12 relative overflow-hidden flex items-center min-h-screen bg-[#0A192F] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#FFB800]/20 rounded-full mix-blend-screen filter blur-[100px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E3A8A]/40 rounded-full mix-blend-screen filter blur-[120px] -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <FadeUpWrapper className="max-w-5xl">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-[#1E3A8A]/30 border border-blue-400/20 text-[11px] font-bold tracking-[0.2em] uppercase text-white mb-12 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
              Professional Creative Partner
            </div>

            <h1 className="text-[4rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-[0.9] tracking-tighter mb-10 uppercase">
              Hybrid AI &{' '}
              <br />
              Video <span className="text-outline block md:inline">Solutions</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-blue-400/20 pt-10 mt-16">
              <p className="text-[1.125rem] md:text-[1.25rem] text-blue-100/70 max-w-xl font-light leading-relaxed">
                Professional video and visual design production powered by Hybrid AI system for the
                efficiency you need and the quality standards you trust.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/portfolio"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-blue-400/30 flex items-center justify-center hover:bg-[#FFB800] hover:border-[#FFB800] transition-all duration-500 group cursor-pointer relative overflow-hidden bg-[#1E3A8A]/10"
                >
                  <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                  <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest group-hover:text-[#1E3A8A] flex flex-col items-center gap-2">
                    <Play className="w-6 h-6 fill-current" />
                    Showreel
                  </span>
                </Link>
              </div>
            </div>
          </FadeUpWrapper>
        </div>
      </section>

      <section className="py-16 bg-[#0A192F] border-y border-blue-400/10 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="label-tegas text-center text-blue-200/40">Dipercaya oleh Eksekutif Korporat & Instansi</p>
        </div>
        <div className="flex whitespace-nowrap opacity-40 hover:opacity-100 transition-all duration-700 select-none">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-marquee inline-flex items-center shrink-0 text-3xl md:text-5xl font-black tracking-tighter text-white uppercase pr-16 md:pr-24">
              <span className="mx-12 md:mx-16">BCA</span>
              <span className="mx-12 md:mx-16 text-outline">PPIM</span>
              <span className="mx-12 md:mx-16">AIA</span>
              <span className="mx-12 md:mx-16">Freeport</span>
              <span className="mx-12 md:mx-16 text-outline">Lalamove</span>
              <span className="mx-12 md:mx-16">Ace Hardware</span>
              <span className="mx-12 md:mx-16 text-outline">PLN</span>
              <span className="mx-12 md:mx-16">Roche</span>
              <span className="mx-12 md:mx-16 text-outline">Adhi Karya</span>
              <span className="mx-12 md:mx-16">Alibaba Cloud</span>
              <span className="mx-12 md:mx-16 text-outline">UOB</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white text-[#1E3A8A]">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="mb-20">
              <span className="text-[#FFB800] font-bold tracking-[0.2em] uppercase text-xs mb-8 block">Tentang Movio Studio</span>
              <h2 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter uppercase mb-10">
                Sistem <br />
                <span className="text-outline-dark">Profesional.</span>
              </h2>
              <div className="space-y-6 max-w-2xl text-[1.125rem] md:text-[1.25rem] font-medium leading-relaxed text-slate-600 border-l-4 border-[#FFB800] pl-8">
                <p>
                  Movio Studio adalah Professional business service di bidang kreatif & digital yang
                  menyediakan jasa produksi video dan desain untuk perusahaan menengah dan besar
                  (korporasi), dengan pendekatan produksi konvensional maupun Hybrid AI Production.
                </p>
                <p>
                  Kami membantu perusahaan mengubah pesan bisnis yang kompleks menjadi komunikasi
                  visual yang jelas, sistematis, dan berdampak.
                </p>
              </div>
            </div>
          </FadeUpWrapper>

          {/* Two approach cards */}
          <FadeUpWrapper delay="delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0A192F] text-white p-12 hover:bg-[#1E3A8A] transition-colors cursor-pointer group shadow-xl">
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="font-black text-3xl uppercase tracking-tight">
                    01. Konvensional
                  </h3>
                </div>
                <p className="text-blue-100/70 font-medium leading-relaxed">
                  Metode produksi dengan sistem kerja terstruktur, melibatkan tim kreatif, produksi,
                  dan post-production yang berpengalaman untuk menghasilkan video company profile,
                  shooting perusahaan, hingga animasi.
                </p>
              </div>

              <div className="bg-[#FFB800] p-12 text-white hover:bg-[#EA580C] transition-colors cursor-pointer group shadow-xl">
                <div className="flex items-center gap-6 mb-8">
                  <h3 className="font-black text-3xl uppercase tracking-tight">02. Hybrid AI</h3>
                </div>
                <p className="font-semibold leading-relaxed opacity-90">
                  Pendekatan yang menggabungkan sistem kerja profesional Movio dengan pemanfaatan
                  teknologi AI untuk proses lebih cepat, adaptif, dan biaya efisien tanpa
                  mengorbankan kualitas BUMN.
                </p>
              </div>
            </div>
          </FadeUpWrapper>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-32 bg-[#F8FAFC] text-[#1E3A8A] relative border-t border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-5" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeUpWrapper>
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b-8 border-[#1E3A8A] pb-10">
              <h2 className="text-4xl md:text-[5rem] font-black tracking-tighter leading-[0.9] uppercase max-w-3xl">
                Kepastian, <br /> Bukan Ide <span className="text-[#FFB800]">Liar.</span>
              </h2>
              <p className="text-slate-600 max-w-sm font-medium leading-relaxed pb-2">
                Kami menjual struktur kerja yang jelas, proses yang terukur, dan hasil yang dapat
                dipertanggungjawabkan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <ShieldCheck className="w-10 h-10 text-[#FFB800] mb-8 group-hover:scale-110 transition-transform" />, title: 'Structured\nWorkflow', desc: 'Sistem kerja profesional yang rapi dan terstruktur dari awal hingga akhir.' },
                { icon: <Clock className="w-10 h-10 text-[#FFB800] mb-8 group-hover:scale-110 transition-transform" />, title: 'Timeline\nCertainty', desc: 'Kepastian eksekusi dengan deliverables dan target waktu yang jelas.' },
                { icon: <Sparkles className="w-10 h-10 text-[#FFB800] mb-8 group-hover:scale-110 transition-transform" />, title: 'Hybrid AI\nEfficiency', desc: 'Integrasi teknologi AI untuk kecepatan produksi tanpa memotong kualitas.' },
                { icon: <CheckCircle2 className="w-10 h-10 text-[#FFB800] mb-8 group-hover:scale-110 transition-transform" />, title: 'Quality\nControl', desc: 'Pengecekan kualitas ketat berlapis sesuai standar tinggi korporasi BUMN.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-[#F0F4F8] p-10 rounded-none border-l-4 border-transparent hover:border-[#FFB800] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {item.icon}
                  <h4 className="font-black text-2xl uppercase tracking-tight mb-4 whitespace-pre-line">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium opacity-70 group-hover:opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeUpWrapper>
        </div>
      </section>

      {/* TESTIMONIAL HIGHLIGHT */}
      <section className="py-32 px-6 md:px-12 bg-[#F0F4F8] border-t border-blue-100">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/3 w-full">
                <h2 className="text-[5rem] font-black leading-none text-[#1E3A8A] mb-6">
                  &quot;PEACE
                  <br />
                  OF MIND&quot;
                </h2>
                <div className="w-20 h-2 bg-[#FFB800] mb-8" />
                <p className="font-bold text-xl text-[#1E3A8A]">Budi Santoso</p>
                <p className="text-[#1E3A8A]/50 font-semibold uppercase tracking-widest text-xs">
                  Marketing Director, XYZ Corp
                </p>
              </div>
              <div className="lg:w-2/3 w-full bg-white p-12 md:p-20 shadow-2xl relative border border-blue-50">
                <Quote className="absolute top-10 left-10 w-24 h-24 text-[#F0F4F8] fill-current" />
                <div className="relative z-10">
                  <div className="flex gap-2 text-[#FFB800] mb-10">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-4xl font-bold leading-snug tracking-tight text-[#1E3A8A]">
                    &quot;Movio adalah mitra yang bisa diandalkan. Mereka menyajikan peace of mind dalam
                    setiap tahap project dan timeline mereka selalu terukur. Kami sangat
                    terbantu.&quot;
                  </p>
                </div>
              </div>
            </div>
          </FadeUpWrapper>
        </div>
      </section>
    </>
  );
}
