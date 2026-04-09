'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import FadeUpWrapper from '@/components/FadeUpWrapper';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp Message
    const whatsappNumber = '6285939990371';
    const messageText = `Halo Movio Studio, saya ingin berkonsultasi / request meeting:%0A%0A` +
      `Nama: ${form.name}%0A` +
      `Perusahaan: ${form.company}%0A` +
      `Email: ${form.email}%0A` +
      `Telp/WA: ${form.phone}%0A` +
      `Layanan: ${form.service}%0A%0A` +
      `Catatan Konsultasi:%0A${form.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 md:pt-48 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── HEADER ── */}
        <FadeUpWrapper>
          <div className="mb-20 border-b-8 border-[#1E3A8A] pb-10 text-center">
            <span className="label-tegas text-[#FFB800] mb-6 block">Hubungi Kami</span>
            <h1 className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-black text-[#1E3A8A] tracking-tighter leading-[0.9] uppercase">
              Brief <br />
              <span className="text-outline-dark">Proyek Anda.</span>
            </h1>
            <p className="mt-10 text-slate-600 text-lg font-medium max-w-2xl border-l-4 border-[#FFB800] pl-6 mx-auto text-left md:text-center md:border-l-0 md:pl-0">
              Gunakan formulir ini untuk berkonsultasi langsung dengan tim ahli kami. Setelah menekan tombol kirim, Anda akan diarahkan otomatis ke chat WhatsApp kami untuk mendiskusikan kebutuhan project atau menjadwalkan meeting.
            </p>
          </div>
        </FadeUpWrapper>

        <div className="space-y-20">
          {/* ── FORM ── */}
          <div className="max-w-3xl mx-auto w-full">
            <FadeUpWrapper>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-[#1E3A8A]/20 bg-[#F8FAFC]">
                  <div className="w-16 h-16 bg-[#FFB800] rounded-full flex items-center justify-center mb-6">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-[#1E3A8A] uppercase mb-4">Mengarahkan ke WhatsApp...</h2>
                  <p className="text-slate-500 font-medium max-w-sm">
                    Terima kasih. Anda sedang dihubungkan ke WhatsApp kami untuk sesi konsultasi / meeting.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 text-sm font-bold text-[#FFB800] hover:underline uppercase tracking-widest"
                  >
                    Mulai Konsultasi Baru →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                        Nama Lengkap <span className="text-[#FFB800]">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-800 font-medium placeholder:text-slate-300 transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                        Perusahaan / Instansi <span className="text-[#FFB800]">*</span>
                      </label>
                      <input
                        id="company" name="company" type="text" required
                        value={form.company} onChange={handleChange}
                        placeholder="PT. Nama Perusahaan"
                        className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-800 font-medium placeholder:text-slate-300 transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                        Email Bisnis <span className="text-[#FFB800]">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="anda@perusahaan.com"
                        className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-800 font-medium placeholder:text-slate-300 transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                        WhatsApp / Telepon
                      </label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="+62 812 3456 7890"
                        className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-800 font-medium placeholder:text-slate-300 transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                      Layanan yang Dibutuhkan <span className="text-[#FFB800]">*</span>
                    </label>
                    <select
                      id="service" name="service" required
                      value={form.service} onChange={handleChange}
                      className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-700 font-medium transition-colors bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled>— Pilih Kategori Layanan —</option>
                      <option value="elearning">Jasa Pembuatan E-Learning / SCORM</option>
                      <option value="animasi">Jasa Video Animasi 2D / Explainer</option>
                      <option value="company-profile">Jasa Video Company Profile &amp; Shooting</option>
                      <option value="website">Jasa Pembuatan Website / Landing Page</option>
                      <option value="desain">Jasa Desain Presentasi &amp; Infografis</option>
                      <option value="konsultasi">Konsultasi / Belum Tahu</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-[#1E3A8A] mb-2">
                      Deskripsi Singkat Proyek <span className="text-[#FFB800]">*</span>
                    </label>
                    <textarea
                      id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Ceritakan kebutuhan Anda: tujuan project, estimasi durasi/halaman, target audiens, timeline, dan apapun yang relevan..."
                      className="w-full border-2 border-slate-200 focus:border-[#1E3A8A] outline-none px-5 py-4 text-slate-800 font-medium placeholder:text-slate-300 transition-colors bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFB800] hover:bg-orange-600 text-white px-8 py-5 font-black uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-3 group"
                  >
                    Mulai Konsultasi & Request Meeting
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-slate-400 font-medium text-center">
                    Dengan mengirimkan formulir ini, Anda setuju kami akan menghubungi Anda terkait kebutuhan produksi.
                  </p>
                </form>
              )}
            </FadeUpWrapper>
          </div>

          {/* ── INFO SECTION ── */}
          <div className="w-full">
            <FadeUpWrapper delay="delay-100">
              <div className="grid md:grid-cols-3 gap-0 border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50/50">
                {/* Head Office */}
                <div className="p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
                    <h3 className="font-black text-[#1E3A8A] uppercase tracking-wider text-xs">Head Office</h3>
                  </div>
                  <address className="not-italic text-slate-600 font-medium text-sm leading-relaxed">
                    Jalan Haji Rean No.56 RT.007 RW.005,<br />
                    Benda Baru, Pamulang,<br />
                    Tangerang Selatan, Banten 15418
                  </address>
                  <a href="tel:+622174638350" className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#1E3A8A] hover:text-[#FFB800] transition-colors">
                    <Phone className="w-4 h-4 text-[#FFB800]" />
                    +62 21 746 38 350
                  </a>
                </div>

                {/* Operational Office */}
                <div className="p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#FFB800] shrink-0" />
                    <h3 className="font-black text-[#1E3A8A] uppercase tracking-wider text-xs">Operational Office</h3>
                  </div>
                  <address className="not-italic text-slate-600 font-medium text-sm leading-relaxed">
                    Solo Techno Park,<br />
                    Jl. Ki Hajar Dewantara No.19,<br />
                    Kentingan, Kec. Jebres,<br />
                    Kota Surakarta, Jawa Tengah 57126
                  </address>
                </div>

                {/* Email & Hours */}
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-[#FFB800]" />
                      <h3 className="font-black text-[#1E3A8A] uppercase tracking-wider text-xs">Email Bisnis</h3>
                    </div>
                    <a href="mailto:hello@movio.id" className="text-sm font-bold text-[#1E3A8A] hover:text-[#FFB800] transition-colors">
                      hello@movio.id
                    </a>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[#FFB800]" />
                      <h3 className="font-black text-[#1E3A8A] uppercase tracking-wider text-xs">Jam Operasional</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-600">
                      Senin–Jumat: 08.00 – 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpWrapper>
          </div>
        </div>

        {/* ── MAPS ── */}
        <FadeUpWrapper delay="delay-200">
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-black text-[#1E3A8A] uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800]" /> Head Office — Pamulang, Tangerang Selatan
              </h3>
              <div className="aspect-video border border-slate-200 overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.588!2d106.7228!3d-6.3488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef7dce63659b%3A0x6c7f888b7698fe12!2sPamulang%2C%20Tangerang%20Selatan%2C%20Banten!5e0!3m2!1sid!2sid!4v1680000000000"
                  className="w-full h-full border-0"
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Head Office Movio Studio - Pamulang"
                />
              </div>
            </div>
            <div>
              <h3 className="font-black text-[#1E3A8A] uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800]" /> Operational Office — Solo Techno Park, Surakarta
              </h3>
              <div className="aspect-video border border-slate-200 overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.096!2d110.8296!3d-7.5563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a168b5a53e56d%3A0x638e5a7b1b7b7b7b!2sSolo%20Techno%20Park!5e0!3m2!1sid!2sid!4v1680000000000"
                  className="w-full h-full border-0"
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Operational Office Movio Studio - Solo Techno Park"
                />
              </div>
            </div>
          </div>
        </FadeUpWrapper>

      </div>
    </div>
  );
}
