import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2, CalendarRange, MessageSquare, Briefcase, Bot } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Jasa Video Company Profile & Video Shooting Profesional | Movio Studio',
  description:
    'Movio Studio menyediakan jasa produksi video company profile dan video shooting profesional untuk perusahaan, BUMN, instansi, dan startup. Editing cinematic.',
  keywords:
    'jasa pembuatan video company profile, vendor video shooting perusahaan, jasa produksi video corporate, jasa video dokumentasi perusahaan',
  alternates: { canonical: '/jasa-video-company-profile' },
};

export default function VideoCompanyProfilePage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-white min-h-screen">
      
      {/* ── HERO SECTION (H1) ── */}
      <section className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUpWrapper>
            <div>
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-4 block">
                Corporate Production
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#1E3A8A] leading-[1.1] tracking-tight uppercase mb-6">
                Jasa Video <span className="text-[#FFB800]">Company Profile</span> <br />
                <span className="text-outline-dark text-4xl">&amp; Shooting Profesional</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                Movio Studio menyediakan jasa produksi video company profile dan video shooting profesional untuk perusahaan, BUMN, instansi pemerintah, dan startup. Kami menangani proses dari konsep, script, produksi, hingga editing cinematic berkualitas tinggi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                >
                  Brief Project Anda <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#portfolio-shooting"
                  className="bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] border border-blue-200 px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors"
                >
                  Lihat Showcase
                </Link>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-200">
            <div className="relative aspect-video md:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-100 rounded-lg shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop"
                alt="Jasa Video Shooting & Company Profile Movio Studio"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 w-full text-white font-medium text-sm rounded-sm">
                  Cinematic Camera Setup, Drones, &amp; On-location Production
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
                <span className="text-[#FFB800]">Keunggulan</span> Produksi Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Peralatan standar sinema dan kru ahli untuk merekam momen korporasi dengan sempurna.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Keahlian Layanan */}
            <FadeUpWrapper delay="delay-100">
              <div className="bg-white p-10 border shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#1E3A8A] uppercase mb-6 flex items-center gap-3">
                  <Building2 className="text-[#FFB800]" /> Spesialisasi Lensa
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Briefcase className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Company Profile Eksklusif</strong>
                      <span className="text-sm text-slate-500">Presentasi visual dari direksi, fasilitas, dan narasi brand DNA.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <CalendarRange className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Dokumentasi Event Multicam</strong>
                      <span className="text-sm text-slate-500">Coverage RUPS, Seminar, dan Peluncuran Produk tanpa bocor.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MessageSquare className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Video Testimoni Klien</strong>
                      <span className="text-sm text-slate-500">Wawancara on-location dengan lighting dramatis dan audio jernih.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUpWrapper>

            {/* Inovasi AI Hybrid */}
            <FadeUpWrapper delay="delay-200">
              <div className="bg-[#1E3A8A] p-10 shadow-2xl text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Bot className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 font-black uppercase tracking-widest text-[10px] mb-4 inline-block">
                    Inovasi Skalabilitas
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-6 text-white line-clamp-2">
                    Set Shooting Hybrid AI
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed mb-6">
                    Mewujudkan lingkungan visual layaknya studio ratusan meter persegi dengan hanya modal green screen dan teknologi Virtual Production / Unreal Engine.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Hilangkan biaya mahal penyewaan lokasi syuting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Set virtual dan properti dapat disesuaikan tanpa batas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Lebih aman, fleksibel, terbebas dari cuaca dan waktu.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO (H2) ── */}
      <section id="portfolio-shooting" className="px-6 md:px-12 py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <span className="text-[#FFB800] font-black tracking-widest uppercase text-xs mb-3 block">Direksi &amp; Skala Bisnis</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Portfolio</span> Shooting
              </h2>
            </div>
          </FadeUpWrapper>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Embed 1 */}
            <FadeUpWrapper>
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Company Profile Industri Nasional</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/kh1RKbQyVog?rel=0&modestbranding=1"
                    title="Company Profile PT Industri Nasional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Shooting skala besar di pabrik dan fasilitas manfaktur lengkap dengan drone view.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Embed 2 */}
            <FadeUpWrapper delay="delay-100">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Dokumentasi Event Korporasi</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/n183H3r76YY?rel=0&modestbranding=1"
                    title="Video Dokumentasi Event Korporasi"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Cakupan liputan multiple-camera untuk event bergengsi dan seminar eksekutif.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Embed 3 */}
            <FadeUpWrapper delay="delay-200">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Testimoni Klien Properti</h3>
                </div>
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/72IuhWO99jA?rel=0&modestbranding=1"
                    title="Video Testimoni Klien Properti"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center">
                    Interview on-location yang menceritakan pengalaman klien dengan tata cahaya sinematik.
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
                Proses <span className="text-[#FFB800]">Kerja Shooting</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Kerja cerdas tim produksi kami sebelum, di lapangan, dan usai pengambilan gambar.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Pra-Produksi', 'Pengambilan Gambar', 'Pasca-Produksi', 'Color & Sound Final'].map((step, idx) => (
              <FadeUpWrapper delay={`delay-${(idx + 1) * 100}` as any} key={idx}>
                <div className="relative p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">0{idx + 1}</div>
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase relative z-10 mt-8 mb-3">{step}</h3>
                  <p className="text-sm text-slate-500 relative z-10">
                    {idx === 0 && 'Recce (survey tempat), penyusunan rundown syuting, perizinan dan casting talent jika diperlukan.'}
                    {idx === 1 && 'Hari-H eksekusi di lokasi. Diarahkan oleh Director dan DOP untuk menerjemahkan storyboard.'}
                    {idx === 2 && 'Merapikan ratusan klip kasar menjadi kesatuan narasi yang enak ditonton lewat Offline Editing.'}
                    {idx === 3 && 'Proses pewarnaan (color grading), penambahan BGM, audio mixing, dan grafis teks.'}
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
                FAQ <span className="text-[#F97316] text-xl block mt-2 tracking-normal capitalize">Pertanyaan Seputar Produksi Video</span>
              </h2>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="space-y-4">
              {[
                {
                  q: 'Berapa harga jasa pembuatan video company profile?',
                  a: (
                    <div className="space-y-4">
                      <p>Harga jasa pembuatan video company profile bervariasi tergantung pada konsep kreatif, durasi video, jumlah hari shooting, kebutuhan talent, lokasi produksi, serta kompleksitas editing (motion graphic, animasi, drone, dll).</p>
                      <p>Movio Studio menyediakan beberapa skema produksi:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Produksi full shooting cinematic</li>
                        <li>Hybrid (shooting + animasi)</li>
                        <li>Full animasi company profile</li>
                      </ul>
                      <p>Untuk mendapatkan estimasi harga yang akurat, Anda dapat menghubungi tim kami untuk diskusi kebutuhan dan request penawaran resmi.</p>
                      <Link href="/contact" className="text-[#F97316] font-bold hover:underline inline-flex items-center gap-1">
                        👉 Klik di sini untuk konsultasi gratis untuk estimasi biaya dan konsep video Anda.
                      </Link>
                    </div>
                  )
                },
                {
                  q: 'Lokasi shooting ada di luar pulau, apakah tim bisa berangkat?',
                  a: 'Ya. Kru kami terbiasa terbang ke seluruh penjuru site tambang, pabrik regional, hingga kawasan lepas pantai. Biaya logistik dan akomodasi akan dianggarkan jelas di surat penawaran.'
                },
                {
                  q: 'Apakah harga sudah mencakup talent (aktor) pimpinan?',
                  a: 'Belum. Kami bisa menyediakan opsi list Talent/Aktor dengan variasi harga sesuai grade ketenaran yang diinginkan (KOL, Aktor Profesional, atau Talenta Kampus).'
                },
                {
                  q: 'Pakai kamera apa untuk proses syuting?',
                  a: 'Kamera standar sinema digital profesional kami mencakup seri Sony FX, RED, atau ARRI (tergantung kebutuhan skala produksi & budget Anda). Termasuk Drone 4k.'
                },
                {
                  q: 'Bolehkah saya minta semua rekaman mentahnya (Raw Footage)?',
                  a: 'Seluruh materi Raw dapat diserahkan ke klien dengan penyediaan Harddisk (HDD) dari Anda setelah pelunasan proyek usai.'
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
          <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Mulai Jadwalkan Rencana Syuting</h2>
          <Link
            href="/contact"
            className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-block mt-4"
          >
            Minta Penawaran Produksi
          </Link>
        </div>
      </section>

    </div>
  );
}
