'use client';

import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const portfolioCards = [
  {
    image: '/ahsoha.png',
    title: 'Ahsoha Program Identity',
    client: 'Sejuta Pesantren Virtual',
    border: 'border-white',
    zIndex: 5,
  },
  {
    image: '/Nori Tofu.png',
    title: 'Tahu Bungkeng Packaging',
    client: 'Nori Tofu Series',
    border: 'border-[#FFB800]',
    zIndex: 10,
  },
  {
    image: '/2-website.png',
    title: 'Roche Medical Platform',
    client: 'T-DM1 Digital Solution',
    border: 'border-white',
    zIndex: 5,
  },
];

export default function PortfolioScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScrollAnim = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      let progress = -rect.top / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      if (titleRef.current) {
        // Force title to stay fully visible and fixed
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "none";
        titleRef.current.style.visibility = "visible";
      }

      if (btnRef.current) {
        const btnProg = Math.max(0, (progress - 0.8) * 5);
        btnRef.current.style.opacity = String(btnProg);
        btnRef.current.style.transform = `translateY(${(1 - btnProg) * 20}px)`;
        btnRef.current.style.pointerEvents = btnProg > 0.5 ? 'auto' : 'none';
      }

      const isMobile = window.innerWidth < 768;
      const spreadX = isMobile ? 0 : 120;
      const spreadY = isMobile ? 120 : 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        let x = 0, y = 0, rot = 0, scale = 1;
        if (index === 0) {
          x = isMobile ? 0 : -spreadX * progress;
          y = isMobile ? -spreadY * progress : 15 * progress; // Reduced downward move
          rot = -15 * (1 - progress) - (isMobile ? 0 : 4 * progress);
          scale = 1 - 0.05 * progress;
        } else if (index === 1) {
          x = 0; y = 10 * progress; // Reduced downward move
          rot = 0; scale = 1 + 0.05 * progress;
        } else if (index === 2) {
          x = isMobile ? 0 : spreadX * progress;
          y = isMobile ? spreadY * progress : 15 * progress; // Reduced downward move
          rot = 15 * (1 - progress) + (isMobile ? 0 : 4 * progress);
          scale = 1 - 0.05 * progress;
        }
        card.style.transform = `translate(-50%, -50%) translate(${x}%, ${y}%) rotate(${rot}deg) scale(${scale})`;
      });
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          handleScrollAnim();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleScrollAnim);
    
    // Initial call to set correct layout on mount
    handleScrollAnim();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScrollAnim);
    };
  }, []);

  const scrollToGrid = () => {
    document.getElementById('portfolio-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} id="portfolio-anim-section" className="relative bg-[#0A192F] h-[300vh]">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">

        {/* Title */}
        <div
          ref={titleRef}
          id="portfolio-title"
          className="absolute top-[8vh] md:top-[10vh] left-0 w-full flex flex-col items-center pointer-events-none z-30 transition-transform will-change-transform"
        >
          <span className="label-tegas text-[#FFB800] mb-4 md:mb-6">Portfolio Eksklusif</span>
          <h1 className="text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] font-black text-white tracking-tighter text-center leading-none uppercase drop-shadow-2xl">
            Maha<span className="text-outline">karya.</span>
          </h1>
          <div className="mt-6 md:mt-8 flex flex-col items-center">
            <div className="w-1 h-12 bg-gradient-to-b from-[#FFB800] to-transparent mb-4 animate-pulse" />
            <p className="text-blue-200/50 font-bold tracking-[0.3em] uppercase text-xs">Scroll Perlahan</p>
          </div>
        </div>

        {/* Cards container */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {portfolioCards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`portfolio-card absolute top-[62%] left-1/2 w-[85vw] md:w-[35vw] max-w-lg aspect-[4/5] md:aspect-[4/3] rounded-none bg-[#1E3A8A] shadow-2xl border-4 ${card.border} overflow-hidden cursor-pointer pointer-events-auto group will-change-transform`}
              style={{ 
                zIndex: card.zIndex,
                transform: `translate(-50%, -50%) rotate(${i === 0 ? -15 : i === 2 ? 15 : 0}deg)` 
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#0A192F] to-transparent">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-1">{card.title}</h3>
                <p className="text-[#FFB800] font-bold tracking-widest text-xs uppercase">{card.client}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div
          ref={btnRef}
          id="portfolio-btn"
          className="absolute bottom-6 md:bottom-10 w-full flex flex-col items-center justify-center z-20 opacity-0 pointer-events-none will-change-transform"
        >
          <button
            onClick={scrollToGrid}
            className="px-10 py-5 bg-[#FFB800] text-[#0A192F] font-black tracking-widest uppercase text-sm cursor-pointer hover:bg-white transition-colors pointer-events-auto flex items-center gap-4"
          >
            Jelajahi Grid Arsip
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
