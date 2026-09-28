import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const MARQUEE_IMAGES = [
  '/image/profile/profil.jpeg',
];

interface Thumbnail {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
  createdAt: number;
}

export function PartnerSection() {
  const { ref: sectionRef, isInView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const nextId = useRef<number>(0);
  const imageIndex = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return; // 80ms minimum spawn interval

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 20 - 10; // -10 to +10 degrees
    const image = MARQUEE_IMAGES[imageIndex.current % MARQUEE_IMAGES.length];
    imageIndex.current += 1;
    lastSpawnTime.current = now;

    const newThumb: Thumbnail = {
      id: nextId.current++,
      x,
      y,
      rotation,
      image,
      createdAt: now,
    };

    setThumbnails((prev) => [...prev.slice(-15), newThumb]);
  }, []);

  // RequestAnimationFrame cleanup of expired thumbnails (>1000ms old)
  useEffect(() => {
    let animId: number;
    const cleanup = () => {
      const now = Date.now();
      setThumbnails((prev) => {
        const filtered = prev.filter((t) => now - t.createdAt < 1000);
        return filtered.length === prev.length ? prev : filtered;
      });
      animId = requestAnimationFrame(cleanup);
    };

    animId = requestAnimationFrame(cleanup);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 px-6">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={`max-w-7xl mx-auto py-28 md:py-36 rounded-[40px] shadow-2xl border border-[#272B33] bg-[#111418] relative overflow-hidden flex flex-col items-center justify-center text-center px-6 select-none ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.1s' }}
      >
        {/* Spawned cursor thumbnails */}
        {thumbnails.map((thumb) => {
          const age = Date.now() - thumb.createdAt;
          const progress = Math.min(1, Math.max(0, age / 1000));
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.35;

          return (
            <div
              key={thumb.id}
              className="absolute pointer-events-none rounded-xl overflow-hidden shadow-2xl z-0 border border-[#272B33]"
              style={{
                left: `${thumb.x}px`,
                top: `${thumb.y}px`,
                transform: `translate(-50%, -50%) rotate(${thumb.rotation}deg) scale(${scale})`,
                opacity: opacity,
                width: '160px',
                height: '100px',
                transition: 'opacity 0.1s linear, transform 0.1s linear',
              }}
            >
              <img
                src={thumb.image}
                alt="Studio work preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        {/* Centered heading */}
        <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] text-[#F5F5F5] tracking-tight mb-12 relative z-10">
          Partner with us
        </h2>

        {/* CTA button: Accent pill with circular avatar image + "Start chat with Alif Agil" */}
        <a
          href="mailto:alif.agil@binus.ac.id"
          className="relative z-10 bg-[#6C8EFF] text-[#0B0D10] font-semibold rounded-full pl-2 pr-7 py-2.5 inline-flex items-center gap-3 shadow-lg shadow-[#6C8EFF]/25 hover:bg-[#7C8CFF] transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          <img
            src="/image/profile/profil.jpeg"
            alt="Alif Agil"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-[#0B0D10]/30 shrink-0"
          />
          <span className="font-semibold text-sm md:text-base tracking-tight">
            Start chat with Alif Agil
          </span>
        </a>
      </div>
    </section>
  );
}
