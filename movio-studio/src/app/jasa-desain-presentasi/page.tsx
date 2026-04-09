import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, PenTool, LayoutDashboard, PieChart, Presentation, Bot } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Jasa Desain Presentasi Perusahaan & Identitas Visual | Movio Studio',
  description:
    'Layanan jasa desain presentasi perusahaan, infografis, marketing kit, dan kebutuhan identitas visual dari vendor corporate terpercaya.',
  keywords:
    'jasa desain presentasi perusahaan, jasa desain infografis, jasa desain marketing kit, vendor desain corporate',
  alternates: { canonical: '/jasa-desain-presentasi' },
};

export default function DesainPresentasiPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-white min-h-screen">
      
      {/* ── HERO SECTION (H1) ── */}
      <section className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUpWrapper>
            <div>
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-4 block">
                Visual Art &amp; Communication
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-[1.1] tracking-tight uppercase mb-6">
                Jasa Desain <br />
                <span className="text-outline-dark text-3xl md:text-4xl lg:text-5xl">Presentasi &amp; Infografis</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                Tingkatkan nilai estetik visual perusahaan Anda. Kami menyediakan jasa desain presentasi profesional, penyusunan infografis data yang komunikatif, serta perancangan marketing kit untuk memperkuat identitas brand korporasi di mata klien dan investor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                >
                  Brief Desain Anda <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-200">
            <div className="relative aspect-video md:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-100 rounded-lg shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1626785724573-0b67e00d1101?q=80&w=1200&auto=format&fit=crop"
                alt="Jasa Graphic Design Perusahaan Movio Studio"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-transparent to-transparent flex items-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 w-full text-white font-medium text-sm rounded-sm">
                  Pitch Deck, Annual Report, &amp; Corporate Identity Design
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
                <span className="text-[#FFB800]">Keunggulan</span> Desain Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Dari layar kaca presentasi hingga cetakan fisik, kami menjaga konsistensi pilar brand Anda.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Ragam Desain Grafis */}
            <FadeUpWrapper delay="delay-100">
              <div className="bg-white p-10 border shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#1E3A8A] uppercase mb-6 flex items-center gap-3">
                  <PenTool className="text-[#FFB800]" /> Spesialisasi Layanan
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Presentation className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Desain Presentasi Perusahaan</strong>
                      <span className="text-sm text-slate-500">Materi PPT Pitch deck elegan untuk tender BUMN, materi RUPS, dan investor relation.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <PieChart className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Desain Infografis Laporan</strong>
                      <span className="text-sm text-slate-500">Menyulap data rumit di Annual Report / Sustainability Report menjadi visual.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <LayoutDashboard className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Marketing Kit Produk</strong>
                      <span className="text-sm text-slate-500">Aset penunjang sales seperti brosur PDF interaktif, katalog digital, dan flyer.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUpWrapper>

            {/* Inovasi UI/UX Hybrid */}
            <FadeUpWrapper delay="delay-200">
              <div className="bg-[#1E3A8A] p-10 shadow-2xl text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Bot className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 font-black uppercase tracking-widest text-[10px] mb-4 inline-block">
                    Inovasi Visual
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-6 text-white line-clamp-2">
                    Visual Hybrid AI
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed mb-6">
                    Akselerasi pembuatan grafis elemen presentasi menggunakan sistem kecerdasan buatan, menghemat waktu pencarian gambar di Stock Images.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Generasi asset gambar realistis untuk mengisi slide presentasi secara spesifik.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Waktu iterasi moodboard jauh lebih pesat dipresentasikan ke direksi awal.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO (H2) ── */}
      <section className="px-6 md:px-12 py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <span className="text-[#FFB800] font-black tracking-widest uppercase text-xs mb-3 block">Estetika &amp; Konsistensi</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Portfolio</span> Graphic Design
              </h2>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Portofolio 1 */}
            <FadeUpWrapper>
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group h-full">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Desain Presentasi Tender BUMN</h3>
                </div>
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                    alt="Desain Presentasi Tender BUMN"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center bg-white flex-1">
                    Slide presentasi eksekutif dengan struktur layout bisnis, diagram cerdas, dan tipografi tegas yang meyakinkan.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Portofolio 2 */}
            <FadeUpWrapper delay="delay-100">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group h-full">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Infografis Laporan Tahunan</h3>
                </div>
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                    alt="Infografis Laporan Tahunan"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center bg-white flex-1">
                    Visualisasi persentase pertumbuhan, data ESG, dan metrik keuangan korporat yang dibingkai ilustrasi grafis dinamis.
                </div>
              </div>
            </FadeUpWrapper>

            {/* Portofolio 3 */}
            <FadeUpWrapper delay="delay-200">
              <div className="flex flex-col border border-slate-100 shadow-xl bg-slate-50 relative group h-full">
                <div className="p-4 bg-[#0A192F] text-center border-b-4 border-[#FFB800]">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider">Marketing Kit Produk</h3>
                </div>
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1634942537034-266f5d6f1f3d?q=80&w=800&auto=format&fit=crop"
                    alt="Marketing Kit Produk"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-sm text-slate-600 font-medium text-center bg-white flex-1">
                    Desain katalog layanan, pamflet digital, dan aset PDF siap kirim yang meningkatkan daya saing penawaran sales tim Anda.
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
                Proses <span className="text-[#FFB800]">Kerja Desain</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Tahapan efektif merangkum dokumen verbal perusahaan jadi bahasa visual profesional.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Penyusunan Materi Dasar', 'Moodboard & Art Style', 'Slicing Desain Grafis', 'Revisi & File Final'].map((step, idx) => (
              <FadeUpWrapper delay={`delay-${(idx + 1) * 100}` as any} key={idx}>
                <div className="relative p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition h-full flex flex-col">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">0{idx + 1}</div>
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase relative z-10 mt-8 mb-3">{step}</h3>
                  <p className="text-sm text-slate-500 relative z-10 flex-1">
                    {idx === 0 && 'Kami menerima draf awal Anda (berupa Microsoft Word/Excel) untuk menyaring data pokok.'}
                    {idx === 1 && 'Penentuan palet warna brand guidelines dan contoh layout sampel (1-3 slide mula).'}
                    {idx === 2 && 'Tim desainer mengerjakan keseluruhan halaman berdasarkan patokan gaya visual disepakati.'}
                    {idx === 3 && 'Pengajuan draf 90% ke tim Anda, pengolahan *feedback*, dan serah terima file PDF siap cetak / PPTX.'}
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
                FAQ <span className="text-[#F97316] text-xl block mt-2 tracking-normal capitalize">Pertanyaan Seputar Desain Grafis</span>
              </h2>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="space-y-4">
              {[
                {
                  q: 'Apakah harga desain presentasi dihitung per slide?',
                  a: 'Iya. Biasanya estimasi biaya didasarkan rentang jumlah slide yang dihasilkan (Misal Paket 10-20 Slide, atau Paket up to 50 Slide).'
                },
                {
                  q: 'Bolehkah saya meminta format akhirnya Microsoft PowerPoint (.pptx) asli?',
                  a: 'Tentu saja. Desain akhir pitch deck tidak hanya berupa PDF/Gambar mati yang terkunci, tapi kami bangun kerangkanya di dalam format presentasi *native* sehingga staf Anda nanti bisa mengedit angkanya sendiri.'
                },
                {
                  q: 'Kami butuh desain sangat mendesak / urgensi tinggi untuk presentasi besok lusa. Apa bisa?',
                  a: 'Untuk proyek RUSH HOUR (24-48 jam), kami bisa mengerahkan dedikasi multi-desainer dengan status priotasitas tinggi. Tentu dengan *Surcharge/Rush Fee* tambahan persentase dari harga normal.'
                },
                {
                  q: 'Apakah sudah termasuk jasa copywriting / merapikan kalimat tulisan?',
                  a: 'Ya, tim kreaif kami turut serta membantu memadatkan kalimat dari naskah mentah Anda agar lebih berpusat pada *selling point* dan merangkumnya jadi bentuk point / infografis.'
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
          <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Butuh Pembaruan Visual Bisnis?</h2>
          <Link
            href="/contact"
            className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-block mt-4"
          >
            Diskusikan Projek Desain
          </Link>
        </div>
      </section>

    </div>
  );
}
