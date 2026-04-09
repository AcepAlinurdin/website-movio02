'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;
    if (!cursor || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');

      if (isClickable) {
        cursor.style.width = '64px';
        cursor.style.height = '64px';
        cursor.style.marginLeft = '-32px';
        cursor.style.marginTop = '-32px';
      } else {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        cursor.style.marginLeft = '-8px';
        cursor.style.marginTop = '-8px';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="fixed top-0 left-0 pointer-events-none z-[100] transition-all duration-300 ease-out hidden md:flex items-center justify-center mix-blend-difference"
      style={{ width: '16px', height: '16px', marginLeft: '-8px', marginTop: '-8px' }}
    >
      <div
        ref={innerRef}
        id="cursor-inner"
        className="w-full h-full rounded-full border-[2px] border-[#FFB800] bg-[#FFB800] transition-all duration-500 scale-100"
      />
    </div>
  );
}
