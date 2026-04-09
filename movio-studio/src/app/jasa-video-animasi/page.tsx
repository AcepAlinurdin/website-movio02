import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PlaySquare, Briefcase, Frame, Tv, LineChart, Bot } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Video Animasi Explainer & 2D | Movio Studio',
  description:
    'Vendor jasa pembuatan video animasi 2D, explainer video profesional, dan animasi company profile untuk komunikasi perusahaan dan marketing digital ads.',
  keywords:
    'jasa video animasi, jasa animasi explainer, jasa video company profile animasi, vendor video animasi perusahaan, produksi animasi 2D',
  alternates: { canonical: '/jasa-video-animasi' },
};

export default function VideoAnimasiPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-white min-h-screen">
      
      {/* ── HERO SECTION (H1) ── */}
      <section className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUpWrapper>
            <div>
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-4 block">
                Animation Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-[1.1] tracking-tight uppercase mb-6">
                Jasa Pembuatan <br />
                <span className="text-outline-dark text-4xl lg:text-5xl">Video Animasi 2D</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                Kami adalah vendor spesialis jasa pembuatan video animasi 2D dan explainer video profesional untuk bisnis Anda. Sangat ideal untuk menjelaskan produk yang kompleks, alur sistem digital, hingga kampanye Iklan digital perusahaan secara dinamis dan menarik.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                >
                  Konsultasi Konsep Animasi <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#portfolio-animasi"
                  className="bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] border border-blue-200 px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors"
                >
                  Lihat Showreel
                </Link>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-200">
            <div className="relative aspect-video md:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-100 rounded-lg shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                alt="Jasa Pembuatan Video Animasi Movio Studio"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/20 to-transparent flex items-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 w-full text-white font-medium text-sm rounded-sm">
                  Kustom Illustrasi, Motion Graphics &amp; Karakter Desain
                </div>
              </div>
            </div>
          </FadeUpWrapper>
        </div>
      </section>

      {/* ── KEUNGGULAN (H2) ── */}
      <section className="px-6 md:px-12 py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Keunggulan</span> Animasi Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Fokus pada penyampaian pesan yang gamblang namun dikemas dalam ilustrasi menawan.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Ragam Animasi */}
            <FadeUpWrapper delay="delay-100">
              <div className="bg-white p-10 border shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#1E3A8A] uppercase mb-6 flex items-center gap-3">
                  <PlaySquare className="text-[#FFB800]" /> Varian Gaya Animasi
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Frame className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Animasi Explainer</strong>
                      <span className="text-sm text-slate-500">Video 60-90 detik merangkum kelebihan produk / aplikasi IT secara tuntas.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Briefcase className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Company Profile Animasi</strong>
                      <span className="text-sm text-slate-500">Visualisasi data perusahaan, sejarah, dan nilai visi & misi.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <LineChart className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Video Infografis Animasi</strong>
                      <span className="text-sm text-slate-500">Menganimasikan laporan statistik, Laporan Tahunan (Annual Report) dengan motion.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Tv className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Iklan Animasi Digital Ads</strong>
                      <span className="text-sm text-slate-500">Materi iklan YouTube & Social Media Ads vertikal.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUpWrapper>

            {/* Inovasi AI Hybrid */}
            <FadeUpWrapper delay="delay-200">
              <div className="bg-[#0A192F] p-10 shadow-2xl text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Bot className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 font-black uppercase tracking-widest text-[10px] mb-4 inline-block">
                    Produksi Tangkas
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-6 text-white line-clamp-2">
                    Metode Hybrid AI
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed mb-6">
                    Mewujudkan storyboard jadi aset vector/raster 2x lebih cepat melalui pipeline Generative AI, digabungkan dengan manuver animasi After Effects konvensional.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Eksplorasi gaya gambar (Art Style) dalam hitungan jam.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Pembuatan Storyboard kilat untuk proses *alignment* tim.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Dubbing Voice Over sementara digenerate Instan dari teks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO (H2) ── */}
      <section id="portfolio-animasi" className="px-6 md:px-12 py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <span className="text-[#FFB800] font-black tracking-widest uppercase text-xs mb-3 block">Estetika &amp; Storytelling</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Portfolio</span> Animasi
              </h2>
            </div>
          </FadeUpWrapper>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Embed 1 */}
            <FadeUpWrapper>
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Animasi Explainer Fintech</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/Pii0Jl8qJLs?rel=0&modestbranding=1"
                    title="Animasi Explainer Startup"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Video instruksi OneKlik dengan karakter korporasi minimalis.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Embed 2 */}
            <FadeUpWrapper delay="delay-100">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Company Profile Infrastruktur</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/n-_5AehvCcA?rel=0&modestbranding=1"
                    title="Profile Animasi Perusahaan"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Memadukan visual 3D enviroment untuk studi kasus pertambangan.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Embed 3 */}
            <FadeUpWrapper delay="delay-200">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Edukasi Keamanan Digital</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/DIWRxwk78TQ?rel=0&modestbranding=1"
                    title="Edukasi Kebocoran Data"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Gaya tipografi kinetik (Motion Graphics) untuk memperkuat pemahaman teks.
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>
      </section>

      {/* ── PROSES KERJA (H2) ── */}
      <section className="px-6 md:px-12 py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                Proses <span className="text-[#FFB800]">Kerja Animasi</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Pipeline pembuatan video animasi yang menjamin keselarasan cerita dengan identitas brand Anda.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Scripting', 'Storyboard & Styleframe', 'Voice Over & Animasi', 'Sound Design & Render'].map((step, idx) => (
              <FadeUpWrapper delay={`delay-${(idx + 1) * 100}` as any} key={idx}>
                <div className="relative p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">0{idx + 1}</div>
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase relative z-10 mt-8 mb-3">{step}</h3>
                  <p className="text-sm text-slate-500 relative z-10">
                    {idx === 0 && 'Pembuatan draft narasi teks yang memastikan timing sesuai keinginan durasi (misal 60 detik = ~130 kata).'}
                    {idx === 1 && 'Menggambar sketsa adegan per adegan dan mencontohkan warna final karakter.'}
                    {idx === 2 && 'Merekam talent pengisi suara asli dan proses menggerakkan seluruh aset.'}
                    {idx === 3 && 'Finishing BGM, efek suara Foley, dan eksport ke MP4 resolusi 4K berkualitas YouTube.'}
                  </p>
                </div>
              </FadeUpWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (H2) ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                FAQ <span className="text-[#F97316] text-xl block mt-2 tracking-normal capitalize">Pertanyaan Seputar Animasi</span>
              </h2>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="space-y-4">
              {[
                {
                  q: 'Berapa durasi ideal untuk Animasi Explainer?',
                  a: 'Durasi ideal di sosial media atau di sebuah Landing Page adalah 60 detik hingga maksimal 90 detik untuk mencegah audiens bosan dan langsung ke poin panggilan bertindak (Call to Action).'
                },
                {
                  q: 'Apakah bisa revisi bila gayanya tidak sesuai selera brand?',
                  a: 'Sebelum seluruh video dianimasikan, kami selalu mengajukan fase "Styleframe" (contoh hasil gambar akhir statis). Di tahap ini Anda memvalidasi ilustrasi agar 100% memuaskan, mencegah revisi fatal di tahap akhir.'
                },
                {
                  q: 'Berapa lama proses pengerjaan untuk 1 buah video animasi?',
                  a: 'Untuk animasi 2D standar berdurasi 1 Menit, umumnya memakan waktu 2 hingga 3 minggu penuh dari nol sampai final.'
                },
                {
                  q: 'Apakah saya berhak mendapatkan file project aslinya?',
                  a: 'Berdasarkan kebijakan standar industri, kami menyediakan Final Artwork dalam bentuk video. File sumber (After Effects/Illustrator) bisa diserahkan dengan kesepakatan lisensi serah-terima tambahan.'
                }
              ].map((faq, idx) => (
                <details key={idx} className="group border border-slate-200 rounded-md bg-slate-50 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-bold text-base md:text-lg text-[#1E3A8A] select-none">
                    {faq.q}
                    <span className="transition duration-300 group-open:rotate-180 bg-slate-200 text-slate-500 rounded-full p-1"><ArrowRight className="w-4 h-4 rotate-90" /></span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm md:text-base border-t border-slate-200 pt-4 bg-white rounded-b-md leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeUpWrapper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-12 pb-24 text-center">
        <div className="max-w-4xl mx-auto border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Mulai Animasikan Ide Anda</h2>
          <Link
            href="/contact"
            className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-block mt-4"
          >
            Minta Penawaran Harga
          </Link>
        </div>
      </section>

    </div>
  );
}
