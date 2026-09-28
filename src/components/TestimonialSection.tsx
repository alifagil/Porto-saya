import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function TestimonialSection() {
  const { ref: sectionRef, isInView } = useInViewAnimation();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    let isObserverActive = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!imageRef.current) {
            ticking = false;
            return;
          }
          const rect = imageRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Parallax calculation based on viewport position
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2;
          const distanceFromCenter = elementCenter - viewportCenter;

          // Calculate offset, max offset 200px
          const offset = Math.max(-200, Math.min(200, distanceFromCenter * 0.2));
          setParallaxOffset(offset);
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isObserverActive = entry.isIntersecting;
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll();
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    const target = imageRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-12 px-6 flex flex-col items-center justify-center text-center mx-auto max-w-2xl"
    >
      {/* Quote icon */}
      <div
        className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-[#6C8EFF] mx-auto" />
      </div>

      {/* Large quote text */}
      <h2
        className={`text-[32px] md:text-[40px] lg:text-[46px] leading-[1.25] text-[#F5F5F5] tracking-tight mb-4 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        <span className="font-mondwest italic font-normal text-[#F5F5F5]">
          Always learning. Always trying. Always building.
        </span>
      </h2>

      {/* Author */}
      <p
        className={`italic text-sm md:text-base text-[#9CA3AF] mb-8 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.3s' }}
      >
        Alif Agil
      </p>

      {/* Parallax image */}
      <div
        className={`w-full flex justify-center overflow-hidden py-4 ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={{ animationDelay: '0.4s' }}
      >
        <img
          ref={imageRef}
          src="/image/profile/profil.jpeg"
          alt="Alif Agil"
          referrerPolicy="no-referrer"
          className="w-full max-w-xs rounded-2xl shadow-2xl border border-[#272B33] object-cover transition-transform duration-100 ease-out will-change-transform bg-[#171A1F]"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          }}
        />
      </div>
    </section>
  );
}
