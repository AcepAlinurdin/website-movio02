import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] pt-24 pb-10 px-6 md:px-12 text-white border-t-8 border-[#F97316] mt-auto z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-xs font-bold tracking-widest uppercase text-blue-200/50 gap-10">
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-movio.png" alt="Movio Studio" className="h-20 w-auto mb-2" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-white/80">
          <a href="#" className="hover:text-[#F97316] transition-colors cursor-pointer">Instagram</a>
          <a href="#" className="hover:text-[#F97316] transition-colors cursor-pointer">LinkedIn</a>
          <a href="#" className="hover:text-[#FFB800] transition-colors cursor-pointer">YouTube</a>
          <Link href="/contact" className="hover:text-[#FFB800] transition-colors cursor-pointer border-l border-white/20 pl-8 ml-0">Contact</Link>
        </div>

        <p className="border-t border-white/10 pt-8 w-full max-w-md">&copy; 2024 Movio Studio. Professional Digital Partner.</p>
      </div>
    </footer>
  );
}
