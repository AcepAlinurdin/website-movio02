import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, LayoutTemplate, GraduationCap, LineChart, Target, Bot } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Company Profile & Landing Page | Movio Studio',
  description:
    'Kami menyediakan jasa pembuatan website company profile dan landing page profesional terintegrasi dengan video konten dan strategi digital marketing.',
  keywords:
    'jasa pembuatan website company profile, jasa website profesional perusahaan, vendor pembuatan website corporate, jasa landing page campaign',
  alternates: { canonical: '/jasa-pembuatan-website-company-profile' },
};

export default function WebsiteCompanyProfilePage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-white min-h-screen">
      
      {/* ── HERO SECTION (H1) ── */}
      <section className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUpWrapper>
            <div>
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-4 block">
                Web Development Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-[1.1] tracking-tight uppercase mb-6">
                Jasa Pembuatan Website <br />
                <span className="text-outline-dark text-4xl lg:text-5xl">Company Profile</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                Kami menyediakan jasa pembuatan website company profile dan landing page profesional yang terintegrasi dengan strategi digital marketing. Sangat cocok untuk perusahaan yang ingin membangun kredibilitas dan meningkatkan konversi online secara signifikan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                >
                  Brief Website Anda <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-200">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-100 rounded-lg shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                alt="Jasa Pembuatan Website Company Profile Movio Studio"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-[#1E3A8A]/20 to-transparent flex items-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 w-full text-white font-medium text-sm rounded-sm">
                  Responsive Web Design, SEO Optimization, &amp; Fast Loading Speed
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
                <span className="text-[#FFB800]">Keunggulan</span> Tech Stack Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Dibangun dengan framework modern untuk kecepatan dan keamanan level enterprise.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Ragam Layanan Web */}
            <FadeUpWrapper delay="delay-100">
              <div className="bg-white p-10 border shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#1E3A8A] uppercase mb-6 flex items-center gap-3">
                  <Globe className="text-[#FFB800]" /> Skala Digitalisasi
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <Globe className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Company Profile Global</strong>
                      <span className="text-sm text-slate-500">Website kredibel yang aman untuk audiens internasional.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <LayoutTemplate className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Landing Page Campaign</strong>
                      <span className="text-sm text-slate-500">Sales funnel yang dikhususkan merekam Lead (Email/WhatsApp).</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <GraduationCap className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Website Portal / LMS</strong>
                      <span className="text-sm text-slate-500">Sistem pendaftaran dan interaksi edukasi digital mandiri.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <LineChart className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Optimasi SEO & Analytics</strong>
                      <span className="text-sm text-slate-500">Pemasangan Pixel Ads dan arsitektur yang disukai Google Indexing.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUpWrapper>

            {/* Inovasi UI/UX */}
            <FadeUpWrapper delay="delay-200">
              <div className="bg-[#1E3A8A] p-10 shadow-2xl text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Target className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 font-black uppercase tracking-widest text-[10px] mb-4 inline-block">
                    Inovasi Desain
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-6 text-white line-clamp-2">
                    UX Design dengan AI Hybrid
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed mb-6">
                    Akselerasi pembuatan grafis elemen website dan wireframe menggunakan sistem kecerdasan buatan, memungkinkan Anda melakukan iterasi tanpa batas waktu.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Mockup visual selesai 2-3x lebih cepat untuk disetujui.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Generasi asset UI (Ikon, Ilustrasi Background) kustom yang eksklusif tanpa royalty issue.</span>
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
              <span className="text-[#FFB800] font-black tracking-widest uppercase text-xs mb-3 block">Performa & Visual</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Portfolio</span> Website Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Desain landing page dan web portal modern yang telah kami eksekusi.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeUpWrapper delay="delay-100">
              <div className="group overflow-hidden rounded-md border shadow-sm flex flex-col h-full bg-slate-50">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=800&auto=format&fit=crop" alt="Company Profile Web" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-[#1E3A8A] uppercase">Corporate Bank Portal</h3>
                  <p className="text-sm text-slate-500 mt-2">Redesign wajah institusi perbankan dengan Mega-Menu yang lebih bersahabat dan aman.</p>
                </div>
              </div>
            </FadeUpWrapper>
            
            <FadeUpWrapper delay="delay-200">
              <div className="group overflow-hidden rounded-md border shadow-sm flex flex-col h-full bg-slate-50">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Dashboard Panel" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-[#1E3A8A] uppercase">SaaS Sales Dashboard</h3>
                  <p className="text-sm text-slate-500 mt-2">Halaman presentasi metrik konversi untuk internal perusahaan berbasis ReactJS.</p>
                </div>
              </div>
            </FadeUpWrapper>

            <FadeUpWrapper delay="delay-300">
              <div className="group overflow-hidden rounded-md border shadow-sm flex flex-col h-full bg-slate-50">
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Marketing Campaign Landing Page" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-bold text-[#1E3A8A] uppercase">Promo Campaign Page</h3>
                  <p className="text-sm text-slate-500 mt-2">Landing page event musiman dengan orientasi tombol CTA tinggi untuk panen database lead.</p>
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
                Proses <span className="text-[#FFB800]">Kerja Web Dev</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Agile development approach untuk meluncurkan website tepat waktu tanpa bug.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Wireframing & UI/UX', 'Development Frontend', 'CMS & Backend (Opsional)', 'QA & Go-Live'].map((step, idx) => (
              <FadeUpWrapper delay={`delay-${(idx + 1) * 100}` as any} key={idx}>
                <div className="relative p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition h-full flex flex-col">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">0{idx + 1}</div>
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase relative z-10 mt-8 mb-3">{step}</h3>
                  <p className="text-sm text-slate-500 relative z-10 flex-1">
                    {idx === 0 && 'Pemetaan sitemap lalu pembuatan purwarupa desain (Figma) hingga disetujui klien.'}
                    {idx === 1 && 'Slicing desain menjadi kode interaktif untuk Desktop, Tablet, dan Mobile.'}
                    {idx === 2 && 'Pemasangan panel Admin mandiri (WordPress / Custom CMS) bila Anda butuh update blog harian.'}
                    {idx === 3 && 'Pengujian kecepatan, penanaman SEO Tag, hingga upload final ke domain server Anda.'}
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
                FAQ <span className="text-[#FFB800] text-xl block mt-2 tracking-normal capitalize">Pertanyaan Seputar Website</span>
              </h2>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="space-y-4">
              {[
                {
                  q: 'Apakah harga sudah termasuk Hosting & Domain?',
                  a: 'Tentu. Paket standar kami umumnya sudah membundling gratis sewa layanan Hosting Server dan Domain (seperti .com / .co.id) selama 1 Tahun pertama.'
                },
                {
                  q: 'Apa bedanya Company Profile Web dengan Landing Page?',
                  a: 'Company Profile Web memiliki banyak halaman bervariasi (Home, About, Services, Contact, Blog) untuk informasi korporasi menyuluruh. Sedangkan Landing Page murni 1 halaman (One-page) yang memfokuskan perhatian user pada 1 konversi iklan tertentu.'
                },
                {
                  q: 'Apakah websitenya akan Ramah Seluler (Mobile Responsive)?',
                  a: 'Ya, 100% Guaranteed. Di era modern, statistik akses smartphone mencapai lebih dari 70%. Kode kami memastikan grid di website meramping otomatis dan tidak saling menabrak teksnya bila dibuka lewat seluler.'
                },
                {
                  q: 'Bisakah tim kami mengedit isi artikel sendiri nantinya?',
                  a: 'Bisa. Kami akan memasangkan CMS (Content Management System) agar Staff IT/Admin Anda bisa bebas mengubah teks, ganti foto, dan menulis artikel tanpa perlu keahlian coding.'
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
          <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Siap Membangun Kehadiran Digital Anda?</h2>
          <Link
            href="/contact"
            className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-block mt-4"
          >
            Konsultasikan Kebutuhan Web
          </Link>
        </div>
      </section>

    </div>
  );
}
