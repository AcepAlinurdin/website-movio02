import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileType, MonitorPlay, Target, Gamepad2, Cog } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan E-Learning Interaktif & SCORM | Movio Studio',
  description:
    'Vendor e-learning SCORM, jasa pembuatan modul LMS, video pembelajaran interaktif untuk training karyawan. Kompatibel dengan Moodle, TalentLMS, SAP.',
  keywords:
    'Jasa pembuatan SCORM, vendor e-learning SCORM, jasa pembuatan modul LMS, jasa konten e-learning perusahaan, pembuatan video pembelajaran SCORM, Jasa video pembelajaran, vendor video training perusahaan, jasa pembuatan video training karyawan, jasa konten learning digital',
  alternates: { canonical: '/jasa-pembuatan-scorm' },
};

export default function SCORMPage() {
  return (
    <div className="pt-32 md:pt-40 pb-24 bg-white min-h-screen">
      
      {/* ── HERO SECTION (H1) ── */}
      <section className="px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUpWrapper>
            <div>
              <span className="text-[#FFB800] font-black uppercase tracking-widest text-sm mb-4 block">
                Enterprise L&D Solutions
              </span>
              {/* Only 1 H1 per page */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E3A8A] leading-[1.1] tracking-tight uppercase mb-6">
                Jasa Pembuatan <br />
                <span className="text-outline-dark">E-Learning & SCORM</span>
              </h1>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                Movio Studio menyediakan jasa pembuatan SCORM dan e-learning interaktif yang kompatibel dengan berbagai LMS seperti Moodle, TalentLMS, SAP SuccessFactors, dan platform internal perusahaan. Kami membantu tim Learning &amp; Development dalam membuat modul training digital yang engaging, terstruktur, dan mudah dipahami.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                >
                  Konsultasi Modul <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden bg-slate-100 rounded-lg shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop"
                alt="Pembuatan E-Learning Interaktif Movio Studio"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent flex items-end p-8 md:p-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 w-full text-white font-medium text-sm rounded-sm">
                  Kompatibel dengan sistem LMS Anda (Moodle, SAP, SuccessFactors, dll)
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
                <span className="text-[#FFB800]">Keunggulan</span> Kami
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Solusi LMS modern, hybrid AI, dan interaktif yang mempercepat serapan materi karyawan Anda.
              </p>
            </div>
          </FadeUpWrapper>

          {/* Sub-Keunggulan (Layanan Termasuk & AI) -> Changed to H3s */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Fitur Utama */}
            <FadeUpWrapper delay="delay-100">
              <div className="bg-white p-10 border shadow-sm h-full">
                <h3 className="text-2xl font-black text-[#1E3A8A] uppercase mb-6 flex items-center gap-3">
                  <Cog className="text-[#FFB800]" /> Ekosistem Modul Lengkap
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <FileType className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Standar SCORM 1.2 / 2004</strong>
                      <span className="text-sm text-slate-500">Paket responsif dengan tracking completion.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MonitorPlay className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Video Pembelajaran Interaktif</strong>
                      <span className="text-sm text-slate-500">User harus mengambil keputusan di layar.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Target className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Quiz & Assessment Otomatis</strong>
                      <span className="text-sm text-slate-500">Evaluasi dengan drag-drop, ganda, mencocokkan.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Gamepad2 className="text-[#FFB800] w-6 h-6 shrink-0" />
                    <div>
                      <strong className="block text-[#1E3A8A]">Gamifikasi Training</strong>
                      <span className="text-sm text-slate-500">Skenario poin & badge untuk motivasi.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeUpWrapper>

            {/* Inovasi AI Hybrid */}
            <FadeUpWrapper delay="delay-200">
              <div className="bg-[#1E3A8A] p-10 shadow-2xl text-white relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Gamepad2 className="w-64 h-64 text-white" />
                </div>
                <div className="relative z-10">
                  <span className="bg-orange-500 text-white px-3 py-1 font-black uppercase tracking-widest text-[10px] mb-4 inline-block">
                    Inovasi Efisiensi
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-6 text-white line-clamp-2">
                    Opsi Produksi Hybrid Berbasis AI
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed mb-6">
                    Metode produksi alternatif dengan alur kerja yang lebih efisien, waktu pengerjaan cepat, dan biaya optimal tanpa mengurangi standar profesional.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Aktor atau narator berbasis sintesis AI kustom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Biaya produksi ditekan lebih masif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#FFB800] w-5 h-5 shrink-0" />
                      <span className="text-sm">Revisi aset yang sangat fleksibel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO (H2) ── */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUpWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter">
                <span className="text-[#FFB800]">Portfolio</span> Solusi
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                Preview antarmuka pengguna modul pembelajaran yang kami kembangkan.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeUpWrapper delay="delay-100">
              <div className="group overflow-hidden rounded-md border shadow-sm">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop" alt="Modul LMS" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1E3A8A]">Dashboard Edukasi Karyawan</h3>
                  <p className="text-sm text-slate-500 mt-2">Sistem tracking quiz dan completion interaktif.</p>
                </div>
              </div>
            </FadeUpWrapper>
            <FadeUpWrapper delay="delay-200">
              <div className="group overflow-hidden rounded-md border shadow-sm">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" alt="E-Learning Assessment" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1E3A8A]">Digital Assessment & Gamifikasi</h3>
                  <p className="text-sm text-slate-500 mt-2">Simulasi kasus dengan Drag-and-Drop sistem.</p>
                </div>
              </div>
            </FadeUpWrapper>
            <FadeUpWrapper delay="delay-300">
              <div className="group overflow-hidden rounded-md border shadow-sm">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop" alt="Video Training" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1E3A8A]">Video Training Interaktif</h3>
                  <p className="text-sm text-slate-500 mt-2">Penyisipan navigasi di tengah video presentasi.</p>
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
                Proses <span className="text-[#FFB800]">Kerja</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto text-lg">
                4 Tahap metodologi terstruktur kami untuk menghasilkan modul e-learning terbaik.
              </p>
            </div>
          </FadeUpWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Konsultasi', 'Konsep & Storyboard', 'Produksi Konten', 'Integrasi LMS / Distribusi'].map((step, idx) => (
              <FadeUpWrapper delay={`delay-${(idx + 1) * 100}` as any} key={idx}>
                <div className="relative p-8 border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">0{idx + 1}</div>
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase relative z-10 mt-8 mb-3">{step}</h3>
                  <p className="text-sm text-slate-500 relative z-10">
                    {idx === 0 && 'Diskusi kurikulum, target capaian belajar (KPI), dan durasi pengerjaan.'}
                    {idx === 1 && 'Perancangan wireframe interaktif dan penyusunan skrip / materi kuis.'}
                    {idx === 2 && 'Perekaman video, elemen gamifikasi, penyisipan materi presentasi.'}
                    {idx === 3 && 'Export dalam format HTML5/SCORM dan uji coba pada target LMS Anda.'}
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
                FAQ <span className="text-[#FFB800] text-xl block mt-2 tracking-normal capitalize">Pertanyaan yang Sering Diajukan</span>
              </h2>
            </div>
          </FadeUpWrapper>

          <FadeUpWrapper delay="delay-100">
            <div className="space-y-4">
              {[
                {
                  q: 'Apakah modul SCORM bisa diintegrasikan ke LMS kami?',
                  a: (
                    <div className="space-y-4">
                      <p>Ya, modul SCORM yang kami produksi kompatibel dengan berbagai Learning Management System (LMS) seperti:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Moodle</li>
                        <li>TalentLMS</li>
                        <li>SAP SuccessFactors</li>
                        <li>Docebo</li>
                        <li>dan LMS internal perusahaan lainnya</li>
                      </ul>
                      <p>Kami menyediakan format SCORM 1.2 maupun SCORM 2004 sesuai kebutuhan sistem Anda. Sebelum final delivery, tim kami juga melakukan testing compatibility untuk memastikan modul dapat:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Melacak progress peserta</li>
                        <li>Menyimpan skor assessment</li>
                        <li>Mencatat completion status</li>
                      </ul>
                      <p>Jika diperlukan, kami dapat membantu koordinasi teknis dengan tim IT atau vendor LMS Anda untuk memastikan integrasi berjalan lancar.</p>
                    </div>
                  )
                },
                {
                  q: 'Apa itu format SCORM dalam E-Learning?',
                  a: 'SCORM (Sharable Content Object Reference Model) adalah standar teknis format modul e-learning. Format ini memungkinkan modul untuk "berkomunikasi" dengan LMS (Learning Management System), sehingga data riwayat belajar user (skor quiz, waktu akses, dll) dapat direkam otomatis oleh sistem HR.'
                },
                {
                  q: 'Apakah modul bisa diintegrasikan ke LMS Moodle perusahaan saya?',
                  a: 'Sangat bisa. Output akhir yang kami berikan adalah paket (.zip) berstandar SCORM 1.2 atau 2004 yang kompatibel dengan 99% LMS modern termasuk Moodle, TalentLMS, Blackboard, maupun SAP SuccessFactors.'
                },
                {
                  q: 'Berapa lama waktu pembuatan satu modul?',
                  a: 'Estimasi pengerjaan untuk 1 modul dengan durasi bahan materi 30-45 menit adalah sekitar 4 hingga 8 minggu, mencakup fase storyboard, desain grafis/video, interaktivitas, dan Quality Assurance.'
                },
                {
                  q: 'Bisakah menyisipkan video AI Avatar untuk penghematan biaya?',
                  a: 'Bisa. Kami memiliki layanan hybrid AI di mana narrator/pembawa materi dapat direpresentasikan melalui Avatar AI berkualtias tinggi, yang mengurangi timeline pembuatan dan biaya sewa studio secara drastis.'
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
          <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Siap Transformasi Modul Belajar Digital?</h2>
          <Link
            href="/contact"
            className="bg-[#1E3A8A] hover:bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors inline-block mt-4"
          >
            Hubungi Pakar LMS Kami
          </Link>
        </div>
      </section>

    </div>
  );
}
